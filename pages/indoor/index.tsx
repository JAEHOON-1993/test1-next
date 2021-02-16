import React from 'react';

import IndoorContainer from 'containers/Indoor';
import Layout from 'components/Layout';

const IndexPage: React.FC = () => {
  return (
    <Layout title="똑똑한개발자" pageName="실내">
      <IndoorContainer />
    </Layout>
  );
};

export default IndexPage;
