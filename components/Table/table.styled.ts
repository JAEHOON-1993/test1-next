import styled from 'styled-components';

interface styleProps {
  boxShadow?: boolean;
}

export const TableWrapStyled = styled.div<styleProps>`
  position: relative;
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.background.PRIMARY};
  border: 1px solid ${(props) => props.theme.color.GRAY2};

  box-shadow: ${(props) =>
    props.boxShadow ? '0 3px 6px 0 rgba(0, 0, 0, 0.16)' : 'none'};
`;

interface styleProps {
  color?: string;
  backgroundColor?: string;
  click?: boolean;
}

export const TRHeadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const TRBodyBox = styled.div<styleProps>`
  cursor: pointer;
  display: flex;
  /* flex-flow: row nowrap; */
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 90px;

  > p {
    text-align: center;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.GRAY1};
  }

  ${(props) => props.theme.window.tab} {
    padding: 0;
  }

  /* ${(props) => props.theme.window.mobile} {
    > div {
      width: 100%;
      height: 45px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      &:nth-child(n + 4) {
        display: none;
      }
    }
  } */
`;

export const TableCell = styled.div<styleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 15px;
`;
