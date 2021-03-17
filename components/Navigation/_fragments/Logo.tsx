import styled from 'styled-components';

interface Props {
  src: string;
  width: number;
  height: number;
}

const NavLogo = ({ src, width, height }: Props) => {
  return (
    <Logo>
      <img src={src} width={width} height={height} />
    </Logo>
  );
};

export default NavLogo;

interface StyleProps {}
export const Logo = styled.div<StyleProps>`
  width: 215px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
