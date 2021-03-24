import React from 'react';
import styled, { css } from 'styled-components';

interface BaseProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * 4가지 사이즈가 제공됩니다. 기본은 md입니다.
   */
  size?: 'sm' | 'md';
  /**
   * 컬러 값을 이용하여 색상을 변경할 수 있습니다. 기본은 inherit입니다.
   */
  color?: string;
}

const sizes = {
  sm: {
    pc: css`
      font-size: 12px;
      line-height: 18px;
    `,
    tab: css`
      font-size: 10px;
      line-height: 16px;
    `,
    mobile: css`
      font-size: 12px;
      line-height: 18px;
    `,
  },
  md: {
    pc: css`
      font-size: 15px;
      line-height: 27px;
    `,
    tab: css`
      font-size: 14px;
      line-height: 26px;
    `,
    mobile: css`
      font-size: 16px;
      line-height: 28px;
    `,
  },
};

const StyledLink = styled.a<BaseProps>`
  /* font-weight  */
  font-weight: 400;
  /* letter-spacing */
  letter-spacing: 0;
  /* text-decoration */
  text-decoration: underline;
  /* cursor */
  cursor: pointer;
  /* color */
  color: ${(props) => (props.color ? props.color : 'inherit')};

  /* font-size & line-height */
  /* Pc */
  ${(props) => sizes[props.size || 'md']['pc']}
  /* Tab */
  ${(props) => props.theme.window.tab} {
    ${(props) => sizes[props.size || 'md']['tab']}
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    ${(props) => sizes[props.size || 'md']['mobile']}
  }
`;

export interface LinkProps extends BaseProps {
  isExternal?: boolean;
  href: string;
}

/**
 * `Link` 컴포넌트는 페이지, 링크 이동에 활용됩니다. 항상 Normal(Regular)로 스타일을 정의합니다
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, isExternal, ...props }, ref) => {
    return (
      <StyledLink
        ref={ref}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </StyledLink>
    );
  },
);

Link.defaultProps = {
  size: 'md',
};

export default Link;
