import Link from "next/link";
import Layout from "@components/Layout";
import Vmap from "@components/Vmap";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js! 👋</h1>
    <p>
      <Link href="/count">
        <a>Count Page</a>
      </Link>
    </p>
    <Vmap />
  </Layout>
);

export default IndexPage;
