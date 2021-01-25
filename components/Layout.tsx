import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  const ogpImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/images/sousho-de-sho_twitter_card.png`;
  const title = "草書で書";
  const description =
    "あなたの言葉を草書の画像にできるサービスです。Twitterのヘッダー画像を作ることができます。";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" key="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" key="ogTItle" content={title} />
        <meta property="og:site_name" key="ogSiteName" content={title} />
        <meta property="og:image" key="ogImage" content={ogpImageUrl} />
        <meta name="twitter:card" key="twitterCard" content="summary" />
        <meta name="twitter:image" key="twitterImage" content={ogpImageUrl} />
        <meta
          property="og:description"
          key="ogDescription"
          content={description}
        />
      </Head>
      <main style={{ backgroundColor: "#fafafa" }}>
        <nav
          className="navbar navbar-expand-lg navbar-light mb-3 sticky-top"
          style={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <div className="container">
            <div className="mr-auto">
              <Link href="/">
                <a className="navbar-brand">
                  <Image
                    src="/images/sousho-de-sho_logo.png"
                    alt="草書で書かれた「草書で書」のロゴ画像"
                    width={600 / 4}
                    height={315 / 4}
                  />
                </a>
              </Link>
            </div>
          </div>
        </nav>

        <div className="row justify-content-center mb-3">
          <div className="col-12 col-md-6">
            <div className="container">{children}</div>
          </div>
        </div>

        <footer
          className="text-center mt-5 py-5 bg-light"
          style={{ borderTop: "1px solid #f0f0f0" }}
        >
          <div className="pb-1 text-muted">&copy; f-maple</div>
          <div className="pb-1 text-muted">
            <a href="https://twitter.com/maple__f" className="link-primary">
              Twitter
            </a>
            と
            <a
              href="https://github.com/FugaTakata/sousho-de-sho"
              className="link-primary"
            >
              GitHub
            </a>
            のリンク
          </div>
          <div className="pb-1 text-muted">
            <Link href="/terms-of-service">
              <a>利用規約</a>
            </Link>
          </div>
          <div className="pb-1 text-muted">
            <Link href="/privacy-policy">
              <a>プライバシーポリシー</a>
            </Link>
          </div>
          <div className="pb-1 text-muted">
            <Link href="/license">
              <a>ライセンス</a>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
