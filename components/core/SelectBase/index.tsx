import React, { Children, useState, useRef, useLayoutEffect } from 'react';

import styled, { css } from 'styled-components';

import SystemIcon from 'components/Icons/SystemIcon';

interface BaseProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * select는 2가지 스타일로 제공됩니다. 기본은 'flushed' 입니다.
   */
  variant?: 'flushed' | 'outline';
  /**
   * true인 경우 select의 상태가 disabled로 변합니다.
   */
  isDisabled?: boolean;
  /**
   * true인 경우 부모 요소의 가로 길이 만큼의 영역을 갖습니다.
   */
  isFullWidth?: boolean;
  /**
   * true인 경우 보더의 색상을 변경시켜 에러 상태임을 표시합니다.
   */
  isError?: boolean;
}

const sizes = {
  pc: css`
    width: 402px;
    height: 40px;
  `,
  tab: css`
    width: 410px;
    height: 40px;
  `,
  mobile: css`
    width: 343px;
    height: 40px;
  `,
};

interface ReadOnlyBaseProps extends BaseProps {
  readOnly?: boolean;
}

const StyledSelect = styled.select<ReadOnlyBaseProps>`
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;

  /* width & height & font-size & line-height */
  font-size: 15px;
  line-height: 27px;
  /* Pc */
  ${sizes['pc']}
  /* Tab */
  ${(props) => props.theme.window.tab} {
    font-size: 14px;
    line-height: 26px;
    ${sizes['tab']}
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    ${sizes['mobile']}
    font-size: 16px;
    line-height: 28px;
  }

  /* variant */
  ${(props) => {
    switch (props.variant) {
      case 'outline':
        return css`
          padding: 0 44px 0 10px;
          background-color: ${props.theme.color.WHITE};
          border-width: 1px;
        `;
      default:
        // flushed
        return css`
          padding: 0 34px 0 0;
          background-color: transparent;
          border-width: 0 0 2px 0;
        `;
    }
  }}

  /* isFullWidth */
  width: ${(props) => props.isFullWidth && '100%'};
  /* border */
  border-color: currentColor;
  border-style: solid;
  /* when option selected */
  color: ${(props) => (props.value ? props.theme.color.BLACK : 'currentColor')};
  /* isError */
  border-color: ${(props) =>
    props.isError && `${props.theme.color.WARNING} !important`};
  /* options  */
  & option {
    display: none;
  }
`;

export interface SelectBaseProps extends BaseProps {
  /**
   * 현재 선택된 값을 나타냅니다.
   */
  value?: any;
  /**
   * 옵션 선택에 따라 변경된 새로운 값을 받습니다.
   */
  onChange?: (value: any) => void;
}

/**
 * `SelectBase` 컴포넌트는 HTML select 요소에 스타일이 추가된 컴포넌트 입니다. 메뉴의 옵션은 `<option>`으로 정의합니다.
 */
const SelectBase = React.forwardRef<HTMLSelectElement, SelectBaseProps>(
  (
    {
      children,
      placeholder,
      variant,
      isDisabled,
      isFullWidth,
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedValue, setSelectedValue] = useState('');
    const [optionsShown, setOptionsShown] = useState(false);

    const onClickSelect = () => {
      setOptionsShown((prev) => !prev);
    };

    const onClickOption = (event: React.MouseEvent<HTMLDivElement>) => {
      // EventTarget type은 Element를 상속 받지 않기 때문에, 타입 단언을 합니다.
      // event target이 element 외의 것일 수도 있기 때문입니다.
      const target = event.target as HTMLDivElement;
      const value = target.getAttribute('data-value');
      setOptionsShown(false);
      setSelectedValue(value || '');

      if (onChange) {
        onChange(value);
      }
    };

    // native click event
    const onClickAway = (event: MouseEvent) => {
      // 선택 옵션이 열려있는 상태면 함수 실행 종료
      if (!optionsShown) return;
      // 마우스 클릭 이벤트 발생시 container 밖을 클릭한 경우 선택 옵션 닫힘
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOptionsShown(false);
      }
    };

    useLayoutEffect(() => {
      document.addEventListener('mousedown', onClickAway);
      // 언마운트시 이벤트 리스너 정리
      return () => {
        document.removeEventListener('mousedown', onClickAway);
      };
    }, [optionsShown]);

    return (
      <Container isFullWidth={isFullWidth} ref={containerRef}>
        <SelectContainer isFullWidth={isFullWidth} isDisabled={isDisabled}>
          <StyledSelect
            ref={ref}
            variant={variant}
            disabled={isDisabled}
            isDisabled={isDisabled}
            isFullWidth={isFullWidth}
            readOnly
            value={value || selectedValue}
            onClick={onClickSelect}
            {...props}
          >
            <option value="" hidden>
              {placeholder}
            </option>
            <>{children}</>
          </StyledSelect>
          <CustomArrow
            className="custom-arrow"
            variant={variant}
            isDisabled={isDisabled}
          >
            <SystemIcon name="optionDown" color="currentColor" />
          </CustomArrow>
        </SelectContainer>
        <OptionsContainer className={optionsShown ? 'options-shown' : ''}>
          {Children.toArray(children).map((child: any, index) => (
            <Options
              key={index}
              onClick={onClickOption}
              data-value={child?.props?.value}
              children={child?.props?.children}
            />
          ))}
        </OptionsContainer>
      </Container>
    );
  },
);

export default SelectBase;

SelectBase.defaultProps = {
  variant: 'flushed',
};

type ContainerProps = Pick<BaseProps, 'isFullWidth'>;

const Container = styled.div<ContainerProps>`
  display: inline-block;
  position: relative;
  /* isFullWidth */
  width: ${(props) => props.isFullWidth && '100%'};
`;

type SelectContainerProps = Pick<BaseProps, 'isFullWidth' | 'isDisabled'>;

const SelectContainer = styled.div<SelectContainerProps>`
  display: inline-flex;
  align-items: center;
  position: relative;
  /* color */
  color: ${(props) => props.theme.color.GRAY3};
  /* isDisabled */
  background-color: ${(props) => props.isDisabled && props.theme.color.GRAY2};
  /* isFullWidth */
  width: ${(props) => props.isFullWidth && '100%'};
`;

type CustomArrow = Pick<BaseProps, 'variant' | 'isDisabled'>;

const CustomArrow = styled.div<CustomArrow>`
  pointer-events: none;
  position: absolute;
  right: 0;
  display: flex;
  margin-right: ${(props) => props.variant === 'outline' && '10px'};
  color: ${(props) =>
    props.isDisabled ? props.theme.color.GRAY3 : props.theme.color.BLACK};
`;

// Custom Options
const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${(props) => props.theme.color.GRAY1};
  display: none;
  &.options-shown {
    display: block;
  }
`;

const Options = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  /* width & height & font-size & line-height */
  font-size: 15px;
  line-height: 27px;
  /* Pc */
  ${sizes['pc']}
  /* Tab */
  ${(props) => props.theme.window.tab} {
    font-size: 14px;
    line-height: 26px;
    ${sizes['tab']}
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    ${sizes['mobile']}
    font-size: 16px;
    line-height: 28px;
  }
  padding: 0 10px;
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.color.PRIMARYSUB};
  }
`;
