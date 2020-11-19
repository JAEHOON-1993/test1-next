import React from "react";

import LoginContainer from "container/Login";
import Layout from "components/Layout";

const LoginPage = () => {
  return (
    <Layout title="똑똑한개발자" noHeader>
      <LoginContainer />
    </Layout>
  );
};

export default LoginPage;