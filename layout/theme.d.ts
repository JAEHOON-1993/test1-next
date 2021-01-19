import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    color: {
      PRIMARY: string;
      SECONDARY: string;
      TERTIARY: string;
      POINT: string;
      PRIMARYSUB: string;
      SECONDARYSUB: string;
      TERTIARYSUB: string;
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
      GRADIENT_1_BOTTOM: string;
      GRADIENT_1_RIGHT: string;
    };
    radius: number;
    window: {
      mobile: string;
      tab: string;
      pc: string;
    };
  }
}
