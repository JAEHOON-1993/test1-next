import Link from "next/link";
import Layout from "@components/Layout";
import KakaoLogin from "@components/Social/KakaoLogin";
import NaverLogin from "@components/Social/NaverLogin";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
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
