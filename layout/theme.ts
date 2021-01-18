// import baseStyled, { ThemedStyledInterface } from "styled-components";

const size = {
  mobile: 767.98,
  tab: 991.98,
  pc: 1299.98,
};

const color = {
  PRIMARY: '#4575f5',
  SECONDARY: '#3F4CB2',
  TERTIARY: '#0c1f6f',
  POINT: '#f77721',
  PRIMARYSUB: '#C3DCFF',
  SECONDARYSUB: '#98a9f0',
  TERTIARYSUB: '#6f85e3',
  POINTSUB: '#ffcab2',
  BLACK: '#1a1a1a',
  GRAY5: '#444444',
  GRAY4: '#767676',
  GRAY3: '#C6C6C6',
  GRAY2: '#E6E6E6',
  GRAY1: '#E5E5E5',
  GRAY0: '#FAFAFA',
  WHITE: '#FFFFFF',
  WARNING: '#f77721',
  SUCCESS: '#4575f5',
  // DANGER: '#FF5800',
  // INFO: '#24ADF5',
};

const theme = {
  color: {
    PRIMARY: color.PRIMARY,
    SECONDARY: color.SECONDARY,
    TERTIARY: color.TERTIARY,
    POINT: color.POINT,
    PRIMARYSUB: color.PRIMARYSUB,
    SECONDARYSUB: color.SECONDARYSUB,
    TERTIARYSUB: color.TERTIARYSUB,
    POINTSUB: color.POINTSUB,
    BLACK: color.BLACK,
    GRAY5: color.GRAY5,
    GRAY4: color.GRAY4,
    GRAY3: color.GRAY3,
    GRAY2: color.GRAY2,
    GRAY1: color.GRAY1,
    GRAY0: color.GRAY0,
    WHITE: color.WHITE,
    SUCCESS: color.SUCCESS,
    WARNING: color.WARNING,
    GRADIENT_1_BOTTOM: `linear-gradient(to bottom, ${color.POINT}, ${color.PRIMARY})`,
    GRADIENT_1_RIGHT: `linear-gradient(to right, ${color.POINT}, ${color.PRIMARY})`,
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
export default theme;
