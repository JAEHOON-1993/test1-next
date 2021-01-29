import styled, { css, ThemeConsumer } from 'styled-components';

import { Props } from './types';

const CashIcon: React.FC<Props> = ({ size = 50, color, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="cash_icon__50"
          width={size}
          height={size}
          viewBox="0 0 50 50"
        >
          <defs>
            <clipPath id="clipPath">
              <FillProps
                id="사각형_28930"
                d="M0 0H35.64V38.252H0z"
                fill={theme.color.PRIMARY}
                colored={color}
              />
            </clipPath>
          </defs>
          <path id="사각형_1955" fill="none" d="M0 0H50V50H0z" />
          <g id="그룹_37291" transform="translate(7.361 6.253)">
            <g id="그룹_37290" clipPath="url(#clipPath)">
              <FillProps
                id="패스_264651"
                d="M13.919 16.212a11.465 11.465 0 1 0 11.464 11.465 11.478 11.478 0 0 0-11.464-11.465m0 21.51a10.045 10.045 0 1 1 10.045-10.045 10.057 10.057 0 0 1-10.045 10.045"
                fill={theme.color.PRIMARY}
                colored={color}
                transform="translate(-.44 -2.904)"
              />
              <FillProps
                id="패스_264652"
                d="M35.64 10.123V5.464C35.64 2.4 30.215 0 23.29 0S10.939 2.4 10.939 5.464v4.659a2.759 2.759 0 0 0 .389 1.359A13.471 13.471 0 1 0 26.95 24.944c5.081-.676 8.69-2.724 8.69-5.22v-1.64a.806.806 0 0 0-1.613 0v1.64c0 .866-1.093 1.822-2.925 2.557a18.055 18.055 0 0 1-4.223 1.052 13.344 13.344 0 0 0-.722-3.095c5.5-.558 9.483-2.689 9.483-5.314v-1.3a.806.806 0 0 0-1.613 0v1.3c0 .867-1.093 1.822-2.925 2.558a19.6 19.6 0 0 1-5.615 1.2 13.515 13.515 0 0 0-2.172-3.1c6.912-.007 12.324-2.4 12.324-5.464M15.476 2.907a21.7 21.7 0 0 1 7.814-1.295c6.652 0 10.738 2.243 10.738 3.851 0 .867-1.093 1.823-2.925 2.558a21.71 21.71 0 0 1-7.813 1.295c-6.653 0-10.738-2.243-10.738-3.852 0-.867 1.093-1.822 2.924-2.557m-2.924 7.216v-1.9c2.155 1.677 6.2 2.706 10.738 2.706S31.872 9.9 34.027 8.223v1.9c0 .867-1.093 1.823-2.925 2.558a21.711 21.711 0 0 1-7.813 1.294c-.65 0-1.268-.025-1.866-.066a13.388 13.388 0 0 0-7.944-2.614c-.093 0-.183.012-.275.014a1.753 1.753 0 0 1-.653-1.185m.928 26.71a12.06 12.06 0 1 1 12.06-12.06 12.073 12.073 0 0 1-12.06 12.06"
                fill={theme.color.PRIMARY}
                colored={color}
              />
              <FillProps
                id="패스_264653"
                d="M21.077 27.909h-1.5l.6-2.385a.851.851 0 1 0-1.652-.412l-.705 2.8h-1.245l-.713-2.82a.874.874 0 0 0-1.643.023l-.705 2.8h-1.252l-.705-2.8a.852.852 0 0 0-1.652.412l.6 2.385H9.01a.85.85 0 0 0 0 1.7h1.917l1.138 4.54a.874.874 0 0 0 1.13.506.883.883 0 0 0 .513-.529l1.13-4.517h.391l1.13 4.517a.852.852 0 0 0 1.652 0l1.13-4.517h1.925a.85.85 0 0 0 .013-1.7M17.4 29.61l-.2.806-.2-.806zm-4.3 0l-.2.806-.2-.806z"
                fill={theme.color.PRIMARY}
                colored={color}
                transform="translate(-1.462 -4.383)"
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default CashIcon;

interface style {
  colored?: string;
}

const FillProps = styled.path<style>`
  fill: ${(props) => props.theme.color.PRIMARY};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
