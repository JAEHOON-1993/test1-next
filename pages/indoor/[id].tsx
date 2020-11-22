import React, { useEffect } from "react";
import { useRouter } from "next/router";
import IndoorDetailContainer from "container/IndoorDetail";
import Layout from "components/Layout";

const IndexPage = () => {
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    console.log(id);
  }, [router]);
  return (
    <Layout title="똑똑한개발자" pageName="실내">
      <IndoorDetailContainer />
    </Layout>
  );
};

export default IndexPage;
