import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1>
          <span className="text-success">草</span>
          書で書
        </h1>
        <p className="m-5">
          このサービスはユーザの方々の入力を草書の画像に変換します。
        </p>
        <p className="m-5">
          利用前に必ず
          <Link href="/terms-of-service">
            <a className="link-primary">利用規約</a>
          </Link>
          と
          <Link href="/privacy-policy">
            <a className="link-primary">プライバシーポリシー</a>
          </Link>
          を確認し、同意の上サービスを利用してください。
        </p>

        <h2>このサービスの使い方</h2>
        <Link href="/create">
          <a>to create</a>
        </Link>
      </div>
    </Layout>
  );
}
