import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import NavType1Container from 'components/Navigation/example/TextNavigation_1';
import NavType2Container from 'components/Navigation/example/TextNavigation_2';
import NavType3Container from 'components/Navigation/example/TextNavigation_3';
import NavType4Container from 'components/Navigation/example/TextNavigation_4';
import NavType5Container from 'components/Navigation/example/TextNavigation_5';

export default {
  title: 'Example/components/Navigation',
} as Meta;

export const TextNavigation_1 = <NavType1Container />;
export const TextNavigation_2 = <NavType2Container />;
export const TextNavigation_3 = <NavType3Container />;
export const TextNavigation_4 = <NavType4Container />;
export const TextNavigation_5 = <NavType5Container />;

// export const navMobile = <Nav_Mobile />;

// export const navQR = <Nav_QR />;
