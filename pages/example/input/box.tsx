import React from 'react';

import Container from 'components/Container';
import BoxInput from 'components/Input/BoxInput';

const TermsPage = () => {
  return (
    <Container>
      <BoxInput label="이름" />
      <BoxInput label="테스트" />
      <BoxInput label="테스트" action="전송" />
    </Container>
  );
};

export default TermsPage;
