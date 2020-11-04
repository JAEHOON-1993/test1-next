import React, { useState } from "react";
import Layout from "components/Layout";
import ReadyModal from "components/Modal/example/ReadyModal";

const IndexPage = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Layout title="로켓메이커스">
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flex: 1,
        }}
      >
        <h1>홈입니다.</h1>
        <ReadyModal visible={visible} closeModal={() => setVisible(false)} />
        <button onClick={() => setVisible(true)}>Hello Button</button>
      </div>
    </Layout>
  );
};

export default IndexPage;
