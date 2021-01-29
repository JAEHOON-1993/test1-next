import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import DragSwitch from './index';

export default {
  title: 'Example/components/DragSwitch',
  component: DragSwitch,
} as Meta;

export const Default = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return <DragSwitch checked={checked} onClick={() => setChecked(!checked)} />;
};
