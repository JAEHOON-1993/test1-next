import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react';

import Layout from 'components/Layout';

import CountStore from 'stores/Count';

type Props = {
  children?: ReactNode;
};

const AboutPage: React.FC<Props> = observer(() => {
  const router = useRouter();
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <div style={{ padding: '50px' }}>
        <h1>Count</h1>
        <p>This is the count page</p>
        {CountStore.number}
        <button onClick={CountStore.increase}>+</button>
        <button onClick={CountStore.decrease}>-</button>
        <p>
          <Link href="/">
            <a>Go home Use Link</a>
          </Link>
          <br />
          <br />
          <div onClick={() => router.push('/')}>Go home use Router</div>
        </p>
      </div>
    </Layout>
  );
});

export default AboutPage;
