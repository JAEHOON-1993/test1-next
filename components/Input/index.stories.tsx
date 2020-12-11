import React from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

export default { title: 'Example/components/Input' };

export const defaultInput = () => (
  <Input
    label="Caption *"
    placeholder="placeholder"
    action={<Button width="100px" label="재전송" />}
  />
);
