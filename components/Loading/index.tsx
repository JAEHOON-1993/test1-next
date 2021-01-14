import styled from 'styled-components';

interface loadingProps {
  mainColor: string;
  subColor: string;
}

const Loading: React.FC<loadingProps> = ({ mainColor, subColor }) => {
  return (
    <LoadingWrap mainColor={mainColor}>
      <LoadingSpin mainColor={mainColor} subColor={subColor} />
    </LoadingWrap>
  );
};

export default Loading;

interface loadingStyle {
  mainColor: string;
  subColor?: string;
}

const LoadingWrap = styled.div<loadingStyle>`
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  color: ${(props) => props.mainColor};
`;

const LoadingSpin = styled.div<loadingStyle>`
  width: 50px;
  height: 50px;
  border: 7px solid ${(props) => props.subColor};
  border-radius: 50%;
  border-top-color: ${(props) => props.mainColor};
  animation: spin 1.9s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
