import React from 'react';

import styled from 'styled-components';

import SelectBase, { SelectBaseProps } from 'components/core/SelectBase';

import { Title, Text } from 'components/Typography';

export interface SelectProps extends SelectBaseProps {
  /**
   * 인풋 컴포넌트의 라벨 텍스트를 정의할 수 있습니다.
   */
  label?: string;
  /**
   * true인 경우 보더의 색상을 변경시켜 에러 상태임을 표시합니다.
   */
  isError?: boolean;
  /**
   * 에러 메시지를 정의할 수 있습니다.
   */
  errorMessage?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, label, isFullWidth, isError, errorMessage, ...props }, ref) => {
    return (
      <Container isFullWidth={isFullWidth}>
        {label && (
          <Title as="p" size="sm" className="select-label">
            {label}
          </Title>
        )}
        <SelectBase
          ref={ref}
          isFullWidth={isFullWidth}
          isError={isError}
          {...props}
        >
          {children}
        </SelectBase>
        {isError && errorMessage && (
          <ErrorMessage size="sm">{errorMessage}</ErrorMessage>
        )}
      </Container>
    );
  },
);

export default Select;

type ContainerProps = Pick<SelectProps, 'isFullWidth'>;

const Container = styled.div<ContainerProps>`
  display: inline-block;
  /* isFullWidth */
  width: ${(props) => props.isFullWidth && '100%'};
  & .select-label {
    color: ${(props) => props.theme.color.PRIMARY};
    margin-bottom: 10px;
  }
`;

// ErrorMessage component
const ErrorMessage = styled(Text)`
  color: ${(props) => props.theme.color.WARNING};
  margin-top: 10px;
`;
