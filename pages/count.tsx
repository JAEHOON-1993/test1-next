import React, { ReactNode } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';

import Layout from 'components/Layout';

import countStore from 'stores/Count';

type Props = {
  children?: ReactNode;
};

const AboutPage: React.FC<Props> = observer(() => {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <div style={{ padding: '50px' }}>
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
      </div>
    </Layout>
  );
});

export default AboutPage;
