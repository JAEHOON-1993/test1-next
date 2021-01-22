import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const FinanceIcon = ({ size = 50, ...props }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="finance_icon_36"
          width={size}
          height={size}
          viewBox="0 0 36 36"
        >
          <path id="사각형_1996" fill="none" d="M0 0H36V36H0z" />
          <g id="그룹_605" transform="translate(-531.924 -867.297)">
            <g id="그룹_601" transform="translate(535.924 876.785)">
              <path
                id="패스_1103"
                d="M561.932 897.335h-24.067a1.943 1.943 0 0 1-1.941-1.939V877.1a1.943 1.943 0 0 1 1.941-1.941h24.067a1.943 1.943 0 0 1 1.941 1.941v6.042a.576.576 0 0 1-1.153 0V877.1a.789.789 0 0 0-.788-.788h-24.067a.789.789 0 0 0-.788.788v18.3a.788.788 0 0 0 .788.787h24.067a.788.788 0 0 0 .788-.787v-6.041a.576.576 0 0 1 1.153 0v6.041a1.943 1.943 0 0 1-1.941 1.935z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-535.924 -875.155)"
              />
            </g>
            <g id="그룹_602" transform="translate(557.658 884.191)">
              <path
                id="패스_1104"
                d="M557.062 887.238h-5.917a1.381 1.381 0 0 1-1.38-1.38v-4.606a1.381 1.381 0 0 1 1.38-1.38h5.917a1.381 1.381 0 0 1 1.38 1.38v4.606a1.381 1.381 0 0 1-1.38 1.38zm-5.917-6.214a.229.229 0 0 0-.229.228v4.606a.229.229 0 0 0 .229.228h5.917a.228.228 0 0 0 .228-.228v-4.606a.228.228 0 0 0-.228-.228z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-549.765 -879.872)"
              />
            </g>
            <g id="그룹_603" transform="translate(543.956 872.297)">
              <path
                id="패스_1105"
                d="M541.615 877.937a.576.576 0 0 1-.273-1.083l8.341-4.488a.577.577 0 0 1 .78.234l1.531 2.845a.576.576 0 1 1-1.014.547l-1.258-2.338-7.834 4.214a.574.574 0 0 1-.273.069z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-541.039 -872.297)"
              />
            </g>
            <g id="그룹_604" transform="translate(550.784 874.05)">
              <path
                id="패스_1106"
                d="M552.517 877.3a.577.577 0 0 1-.509-.3l-1.2-2.227-4.576 2.461a.576.576 0 0 1-.546-1.014l5.083-2.735a.577.577 0 0 1 .78.235l1.471 2.734a.577.577 0 0 1-.235.78.568.568 0 0 1-.268.066z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-545.387 -873.413)"
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default FinanceIcon;
