import React from 'react';

import { Story, Meta } from '@storybook/react';

import Footer, { Props } from './index';

import styled from 'styled-components';

export default {
  title: 'Example/components/Footer',
  component: Footer,
} as Meta;

const Template: Story<Props> = (args) => <Footer {...args} />;

export const Deafult = Template.bind({});
Deafult.args = {};

const Wrapper = styled.div`
  .description {
    margin-bottom: 12px;
  }
  & > div + div {
    margin-top: 32px;
  }
`;

export const IconFooter = () => (
  <Wrapper>
    <div className="description">Icon Footer</div>
    <Footer />
  </Wrapper>
);

export const TextFooter = () => (
  <Wrapper>
    <div className="description">Text Footer</div>
    <Footer iconMode={false} />
  </Wrapper>
);

export const Colors = () => {
  return (
    <Wrapper>
      <div>
        <div className="description">Dark</div>
        <Footer />
      </div>
      <div>
        <div className="description">Light</div>
        <Footer colorMode="light" />
      </div>
      <div>
        <div className="description">Primary</div>
        <Footer colorMode="primary" />
      </div>
    </Wrapper>
  );
};
