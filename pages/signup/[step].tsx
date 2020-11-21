import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "components/Layout";

import Step1 from "container/Signup/1";

const IndexPage = () => {
  const router = useRouter();
  useEffect(() => {
    console.log("router : ", router);
  }, []);
  return (
    <Layout title="똑똑한개발자" noHeader>
      <Step1 />
    </Layout>
  );
};

export default IndexPage;
