import React from "react";

import ChatContainer from "container/Chat";
import Layout from "components/Layout";

const IndexPage: React.FC = (props) => {
  console.log(props);
  return (
    <Layout title="똑똑한개발자" pageName="채팅">
      <ChatContainer />
    </Layout>
  );
};

export default IndexPage;
