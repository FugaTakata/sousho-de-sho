import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <h1>Home</h1>
        <Link href="/create">
          <a>to create</a>
        </Link>
      </main>
    </Layout>
  );
}
