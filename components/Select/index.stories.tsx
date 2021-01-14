import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Select from 'components/Select';

export default {
  title: 'Example/components/Select',
  component: Select,
} as Meta;

const Template: Story = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'dd', label: 'dd' },
    { value: '33', label: '33' },
  ],
  placeholder: 'dd',
  isSearchable: true,
  chooseType: (data: string) => console.log(data),
};
