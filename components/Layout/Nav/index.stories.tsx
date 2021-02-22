import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Nav_PC from './nav_pc';
import Nav_Mobile from './nav_mo';
import Nav_QR from './nav_qr';

export default {
  title: 'Example/components/Nav',
} as Meta;

export const navPC = <Nav_PC />;

export const navMobile = <Nav_Mobile />;

export const navQR = <Nav_QR />;
