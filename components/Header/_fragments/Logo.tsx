import styled from 'styled-components';

interface Props {
  src: string;
  width: number;
  height: number;
  onClick: () => void;
}

const NavLogo = ({ src, width, height, onClick }: Props) => {
  return (
    <Logo onClick={onClick}>
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
