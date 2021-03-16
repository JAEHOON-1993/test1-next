import React from 'react';
import styled, { css, ThemeConsumer } from 'styled-components';

import SystemIcon from 'components/Icons/SystemIcon';

export interface SecondBoxProps {
  checked: boolean;
  onChange: Function;
  isLink?: boolean;
}

const SecondBox: React.FC<SecondBoxProps> = ({
  checked,
  onChange,
  children,
  ...props
}) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <BoxWrap {...props}>
            {children}
            <SystemIcon
              name="done"
              color={checked ? theme.color.PRIMARY : undefined}
              onClick={() => onChange(!checked)}
              //   color={checked.forth ? theme.color.PRIMARY : undefined}
            />
          </BoxWrap>
        </>
      )}
    </ThemeConsumer>
  );
};

export default SecondBox;

interface BoxProps {
  isLink?: boolean;
}

const BoxWrap = styled.div<BoxProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    ${(props) =>
      props.isLink &&
      css`
        cursor: pointer;
        text-decoration: underline;
      `}

    color: ${(props) => props.theme.color.GRAY4};
  }
  > svg {
    cursor: pointer;
  }
`;
