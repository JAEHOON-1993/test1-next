import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "components/Layout";

import Step1 from "container/Signup/1";
import Step2 from "container/Signup/2";
import Step3 from "container/Signup/3";

const IndexPage = () => {
  const [step, setStep] = useState<any>(0);
  const router = useRouter();
  useEffect(() => {
    const { step } = router.query;
    console.log(step);
    setStep(step);
  }, [router]);
  return (
    <Layout title="똑똑한개발자" noHeader>
      {step === "1" && <Step1 />}
      {step === "2" && <Step2 />}
      {step === "3" && <Step3 />}
    </Layout>
  );
};

export default IndexPage;
