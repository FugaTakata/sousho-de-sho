import Layout from "../components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <h1>プライバシーポリシー</h1>

      <h2>広告について</h2>
      <p>
        当サイトでは、第三者配信の広告サービス（Googleアドセンス）を利用もしくは、利用予定でユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
      </p>
      <p>
        クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
      </p>

      <p>
        Cookieを無効にする方法やGoogleアドセンスに関する詳細は「
        <a
          className="link-primary"
          href="https://policies.google.com/technologies/ads?gl=jp"
          target="_blank"
        >
          広告 – ポリシーと規約 – Google
        </a>
        」をご確認ください。
      </p>

      <h2>アクセス解析ツールについて</h2>
      <p>
        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
      </p>
    </Layout>
  );
}
