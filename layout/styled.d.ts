import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      PRIMARY: string;
      SECONDARY: string;
      TERTIARY: string;
    };
    MODAL_BACKGROUND: string;
    color: {
      PRIMARY: string;
      PRIMARYSUB: string;
      SECONDARY: string;
      SECONDARYSUB: string;
      TERTIARY: string;
      TERTIARYSUB: string;
      POINT: string;
      POINTSUB: string;
      BLACK: string;
      GRAY5: string;
      GRAY4: string;
      GRAY3: string;
      GRAY2: string;
      GRAY1: string;
      GRAY0: string;
      WHITE: string;
      WARNING: string;
      WARNINGSUB: string;
      SUCCESS: string;
      ICON: string;
      ICONSUB: string;
      GRADIENT0: string;
      GRADIENT1: string;
      GRADIENT2: string;
    };
    radius: number;
    window: {
      smallMobile: string;
      mobile: string;
      tab: string;
      pc: string;
    };
  }
}
