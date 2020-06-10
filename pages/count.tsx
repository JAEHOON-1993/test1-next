import React, { ReactNode } from "react";
import Link from "next/link";
import { useObserver } from "mobx-react";

import Layout from "@components/Layout";
import { useStores } from "@utils/Mobx";

type Props = {
  children?: ReactNode;
};

const AboutPage: React.FC<Props> = () => {
  const { Count } = useStores();
  return useObserver(() => (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>Count</h1>
      <p>This is the count page</p>
      {Count.number}
      <button onClick={Count.increase}>+</button>
      <button onClick={Count.decrease}>-</button>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  ));
};

export default AboutPage;
