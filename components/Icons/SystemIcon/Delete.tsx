import styled, { css } from 'styled-components';

import { Props } from './types';

const DeleteIcon: React.FC<Props> = ({ size = 24, color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <g>
        <Path
          fill={color}
          colored={color}
          d="M58.128 155.3a2.246 2.246 0 0 1-.664-1.592l-.642-13.519h-1.115a.664.664 0 0 1-.487-.209.677.677 0 0 1-.209-.5.715.715 0 0 1 .7-.7h16.6a.7.7 0 0 1 .7.7.685.685 0 0 1-.2.5.659.659 0 0 1-.492.209H71.2l-.642 13.51a2.266 2.266 0 0 1-.663 1.6 2.242 2.242 0 0 1-1.622.595h-8.52a2.246 2.246 0 0 1-1.625-.594zm9.991-.812a.947.947 0 0 0 .683-.265.977.977 0 0 0 .293-.683l.6-13.351H58.271l.652 13.351a.972.972 0 0 0 .292.679.914.914 0 0 0 .664.27zm-8.185-17.123a2.076 2.076 0 0 1 .614-1.584 2.36 2.36 0 0 1 1.69-.58h3.522a2.358 2.358 0 0 1 1.69.58 2.076 2.076 0 0 1 .614 1.584v2.08h-1.476v-1.988a.835.835 0 0 0-.252-.631.919.919 0 0 0-.669-.241h-3.335a.922.922 0 0 0-.669.241.84.84 0 0 0-.251.631v1.988h-1.478zm.907 15.386a.51.51 0 0 1-.163-.4l-.289-9.932a.532.532 0 0 1 .159-.395.576.576 0 0 1 .419-.152.589.589 0 0 1 .412.147.534.534 0 0 1 .173.392l.279 9.94a.5.5 0 0 1-.149.395.659.659 0 0 1-.84 0zm2.735 0a.51.51 0 0 1-.166-.395v-9.936a.515.515 0 0 1 .166-.395.622.622 0 0 1 .436-.152.61.61 0 0 1 .428.152.515.515 0 0 1 .166.395v9.932a.51.51 0 0 1-.166.395.6.6 0 0 1-.428.154.616.616 0 0 1-.435-.154zm2.759 0a.5.5 0 0 1-.147-.395l.277-9.932a.544.544 0 0 1 .173-.4.578.578 0 0 1 .4-.147.587.587 0 0 1 .427.152.526.526 0 0 1 .159.395l-.289 9.932a.514.514 0 0 1-.162.4.661.661 0 0 1-.842 0z"
          transform="translate(-52.011 -134.202)"
        />
      </g>
    </svg>
  );
};

export default DeleteIcon;

interface style {
  colored?: string;
}

const Path = styled.path<style>`
  fill: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
