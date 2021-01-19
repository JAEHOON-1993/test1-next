import { NextPage } from 'next';
import styled, { css } from 'styled-components';

interface gradientProps {
  first: string;
  second: string;
  to?: string;
  style?: any;
  children?: React.ReactChild | JSX.Element;
  setColor?: string[];
}

const GradientComponent: NextPage<gradientProps> = ({
  first,
  second,
  to = 'right',
  children,
  setColor,
  ...props
}) => {
  return (
    <GradientWrap
      first={first}
      second={second}
      to={to}
      setColor={setColor}
      {...props}
    >
      {children}
    </GradientWrap>
  );
};

export default GradientComponent;

interface gradientStyleProps {
  first: string;
  second: string;
  to: string;
  setColor?: string[];
}

const GradientWrap = styled.div<gradientStyleProps>`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    `linear-gradient(to ${props.to}, ${props.first}, ${props.second})`};
  color: #fff;
`;
