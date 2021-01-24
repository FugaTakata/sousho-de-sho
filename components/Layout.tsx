import Head from "next/head";

export default function Layout() {
  // const ogpImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/images/card.png`
  const title = "草書で書";
  const description =
    "あなたの言葉を草書の画像にできるサービスです。Twitterのヘッダー画像を作ることができます。";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" key="description" content={description} />
        <meta property="og:title" key="ogTItle" content={title} />
        <meta property="og:site_name" key="ogSiteName" content={title} />
        {/* <meta property="og:image" key="ogImage" content={ogpImageUrl} />
        <meta name="twitter:card" key="twitterCard" content="summary" />
        <meta name="twitter:image" key="twitterImage" content={ogpImageUrl} /> */}
        <meta
          property="og:description"
          key="ogDescription"
          content={description}
        />
      </Head>
    </div>
  );
}
