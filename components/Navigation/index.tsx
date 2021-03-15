import styled from 'styled-components';
import Container from 'components/Container';

const NavigationComponent = () => {
  return (
    <Nav>
      <Container></Container>
    </Nav>
  );
};

export default NavigationComponent;

const Nav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
`;
