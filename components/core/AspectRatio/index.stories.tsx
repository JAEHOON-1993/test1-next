import React from 'react';

import { Story, Meta } from '@storybook/react';

import AspectRatio, { AspectRatioProps } from './index';

export default {
  title: 'Components/Core/AspectRatio',
  component: AspectRatio,
} as Meta;

const Template: Story<AspectRatioProps> = (args) => (
  <AspectRatio {...args}>
    <iframe
      src="https://www.youtube.com/embed/wDfqXR_5yyQ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </AspectRatio>
);

export const Default = Template.bind({});
Default.args = {
  ratio: 16 / 9,
  maxWidth: 400,
};
