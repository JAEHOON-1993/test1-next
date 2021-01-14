import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Pagination from 'components/Pagination';

export default {
  title: 'Example/components/Pagination',
  component: Pagination,
} as Meta;

const Template: Story = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 100,
};
