import Layout from "../../components/Layout";
import Link from "next/link";

export default function Create() {
  return (
    <Layout>
      <div>create page</div>
      <Link href="/">
        <a>to home</a>
      </Link>
    </Layout>
  );
}
