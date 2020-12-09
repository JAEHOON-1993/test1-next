import React from 'react';

import MainContainer from 'container/Main';
import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

const IndexPage = () => {
  const router = useRouter();

  return (
    <Layout title="똑똑한개발자">
      <div>
        <Link href="/count">Go to Count page use Link</Link>
      </div>
      <div onClick={() => router.push('/count')}>
        Go to Count page use Router
      </div>
      <MainContainer />
    </Layout>
  );
};

export default IndexPage;
