import React from 'react';

import LoginContainer from 'containers/Login';
import Layout from 'components/Layout';

const LoginPage = () => {
  return (
    <Layout title="똑똑한개발자" noHeader centered>
      <LoginContainer />
    </Layout>
  );
};

export default LoginPage;
