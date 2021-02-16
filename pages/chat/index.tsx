import React from 'react';

import ChatContainer from 'containers/Chat';
import Layout from 'components/Layout';

const IndexPage: React.FC = () => {
  return (
    <Layout title="똑똑한개발자" pageName="채팅">
      <ChatContainer />
    </Layout>
  );
};

export default IndexPage;
