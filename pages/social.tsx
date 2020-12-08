import Link from 'next/link';

import Layout from 'components/Layout';
import KakaoLogin from 'components/Button/Social/KakaoLogin';
import NaverLogin from 'components/Button/Social/NaverLogin';

const IndexPage = () => (
  <Layout title="로켓메이커스">
    <h1>Hello Next.js! 👋</h1>
    <p>
      <Link href="/count">
        <a>Count Page</a>
      </Link>
    </p>
    <KakaoLogin round />
    <KakaoLogin />

    <NaverLogin round />
    <NaverLogin />
  </Layout>
);

export default IndexPage;
