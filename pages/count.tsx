import React, { ReactNode, useContext } from "react";
import Link from "next/link";

import Layout from "components/Layout";

import { observer } from "mobx-react-lite";
import CountStore from "stores/Count";

type Props = {
  children?: ReactNode;
};

const AboutPage: React.FC<Props> = observer(() => {
  const countStore = useContext(CountStore);

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>Count</h1>
      <p>This is the count page</p>
      {countStore.number}
      <button onClick={countStore.increase}>+</button>
      <button onClick={countStore.decrease}>-</button>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
});

export default AboutPage;
