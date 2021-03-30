import styled, { css } from 'styled-components';

import ButtonComponent from 'components/Button';

import SocialIcon from 'components/Icons/SocialIcon';

interface Props {
  round?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  /**
   * 'sm', 'md' 두 가지 사이즈가 제공됩니다.
   * 'md' 사이즈가 default로 제공되고,
   * 'sm' 사이즈 적용 시 정사각형의 아이콘 버튼만 표시됩니다. 
   */
  size?: 'sm' | 'md';
}

const sizes = {
  sm: {
    pc: css`
      height: 44px;
      width: 44px;
    `,
    tab: css`
      height: 44px;
      width: 44px;
    `,
    mobile: css`
      height: 44px;
      width: 44px;
    `,
  },
  md: {
    pc: css`
      height: 45px;
      width: 310px;
      padding-left: 27px;
      padding-right: 30px;
    `,
    tab: css`
      height: 45px;
      width: 310px;
      padding-left: 17px;
      padding-right: 30px;
    `,
    mobile: css`
      height: 45px;
      width: 310px;
      padding-left: 17px;
      padding-right: 30px;
    `,
  },
};

export const Hr = styled.div`
  width: 1px;
  height: 26px;
  background-color: ${(props) => props.theme.color.WHITE};
  margin-left: 5px;
  margin-right: 15px;
`;

export const Icon = styled(SocialIcon)`
  /* width: 47px;
  height: 47px; */
  /* border-radius: 13px; */
  /* ${(props: Props) =>
    props.round &&
    css`
    background-color: '#000000'
      position: absolute;
      left: 0px;
    `} */

`;

export const Button = styled(ButtonComponent)`
  cursor: pointer;
  position: relative;
  ${(props) => sizes[props.size || 'md']['pc']}
  ${(props) => props.theme.window.tab} {
    ${(props) => sizes[props.size || 'md']['tab']}
  }
  ${(props) => props.theme.window.mobile} {
    ${(props) => sizes[props.size || 'md']['mobile']}
  }
  max-width: 500px;

  background-color: ${(props: Props) => props.backgroundColor};
  border: 1px solid ${(props: Props) => props.borderColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  p {
    padding-top: 3px;
    width: 100%;
    text-align: center;
    margin-left: 5%;
  }
  :focus {
    outline: none;
  }
  /* ${(props: Props) =>
    props.round &&
    css`
      border-radius: 100px;
      background-color: ${(props) => props.theme.color.WHITE};
      box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
      justify-content: center;
    `} */
`;

Button.defaultProps = {
  size: 'md',
};
