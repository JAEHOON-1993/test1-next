import React from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

export default { title: 'Example/components/Input' };

export const defaultInput = () => (
  <Input
    label="Caption *"
    placeholder="placeholder"
    action={<Button style={{ width: 100 }}>재전송</Button>}
  />
);
