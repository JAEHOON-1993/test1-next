// import baseStyled, { ThemedStyledInterface } from "styled-components";
import { DefaultTheme } from 'styled-components';

const size = {
  mobile: 767.98,
  tab: 991.98,
  pc: 1299.98,
};

const gradientsColor = {
  light: {
    PRIMARY: '#3479EA',
    POINT_1: '#74BAF5',
    POINT_2: '#364FC7',
  },
  dark: {
    PRIMARY: '#3479EA',
    POINT_1: '#69BAFF',
    POINT_2: '#2744CC',
  },
};

export const light: DefaultTheme = {
  BACKGROUND: '#ffffff',
  MODAL_BACKGROUND: '#ffffff',
  color: {
    PRIMARY: '#3479EA',
    SECONDARY: '#3F4CB2',
    TERTIARY: '#0c1f6f',
    POINT: '#f77721',
    PRIMARYSUB: '#C3DCFF',
    SECONDARYSUB: '#98a9f0',
    TERTIARYSUB: '#6f85e3',
    POINTSUB: '#ffcab2',
    BLACK: '#1a1a1a',
    GRAY5: '#444444',
    GRAY4: '#808080',
    GRAY3: '#BEBEBE',
    GRAY2: '#F0F0F0',
    GRAY1: '#F7F7F7',
    GRAY0: '#FAFAFA',
    WHITE: '#FFFFFF',
    WARNING: '#FF6060',
    WARNINGSUB: '#FFE2E2',
    SUCCESS: '#4575f5',
    TEST: gradientsColor.light.PRIMARY,
    GRADIENT_1_BOTTOM: `linear-gradient(to bottom, ${gradientsColor.light.PRIMARY}, ${gradientsColor.light.POINT_1})`,
    GRADIENT_1_RIGHT: `linear-gradient(to right, ${gradientsColor.light.POINT_2}, ${gradientsColor.light.PRIMARY})`,
  },
  radius: 4,
  window: {
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
    tab: `@media screen and (max-width: ${size.tab}px)`,
    pc: `@media screen and (max-width: ${size.pc}px)`,
  },
};

export const dark: DefaultTheme = {
  BACKGROUND: '#363636',
  MODAL_BACKGROUND: '#444444',
  color: {
    PRIMARY: '#176FFF',
    SECONDARY: '#3F4CB2',
    TERTIARY: '#0c1f6f',
    POINT: '#f77721',
    PRIMARYSUB: '#96B9E5',
    SECONDARYSUB: '#98a9f0',
    TERTIARYSUB: '#6f85e3',
    POINTSUB: '#ffcab2',
    BLACK: '#FFFFFF',
    GRAY5: '#EBEBEB',
    GRAY4: '#BEBEBE',
    GRAY3: '#A7A7A7',
    GRAY2: '#808080',
    GRAY1: '#1D1D1D',
    GRAY0: '#535353',
    WHITE: '#444444',
    WARNING: '#FF6060',
    WARNINGSUB: '#EFC2C2',
    SUCCESS: '#4575f5',
    GRADIENT_1_BOTTOM: `linear-gradient(to bottom, ${gradientsColor.dark.PRIMARY}, ${gradientsColor.dark.POINT_1})`,
    GRADIENT_1_RIGHT: `linear-gradient(to right, ${gradientsColor.dark.POINT_2}, ${gradientsColor.dark.PRIMARY})`,
  },
  radius: 4,
  window: {
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
    tab: `@media screen and (max-width: ${size.tab}px)`,
    pc: `@media screen and (max-width: ${size.pc}px)`,
  },
};

// export type Theme = typeof theme;
// export const styled = baseStyled as ThemedStyledInterface<Theme>;
