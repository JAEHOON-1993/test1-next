import React from "react";

import LoginContainer from "containers/Login";
import Layout from "components/Layout";

const LoginPage = () => {
  return (
    <Layout title="์ํค๋์นด" noHeader centered>
      <LoginContainer />
    </Layout>
  );
};

export default LoginPage;
