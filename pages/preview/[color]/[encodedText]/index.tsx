import Head from "next/head";
import Link from "next/link";
import Layout from "../../../../components/Layout";
import TwitterShareButton from "../../../../components/TwitterShareButton";

type Props = {
  color: string;
  encodedText: string;
};

export default function Preview(props: Props) {
  const color = props.color;
  const encodedText = props.encodedText;

  const ogpImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/api/${color}/${encodedText}/ogp`;
  const twitterHeaderImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/api/${color}/${encodedText}/twitter_header`;

  return (
    <Layout>
      <Head>
        <meta property="og:image" key="ogImage" content={ogpImageUrl} />
        <meta
          name="twitter:card"
          key="twitterCard"
          content="summary_large_image"
        />
        <meta name="twitter:image" key="twitterImage" content={ogpImageUrl} />
      </Head>
      <main className="text-center">
        <h2>草書画像を作成しました</h2>
        <p className="m-5">画像の利用については利用規約を参照してください。</p>
        <h2>横長（600x315）</h2>
        <img src={ogpImageUrl} alt="生成した横長画像" width="100%" />
        <h2 className="mt-5">Twitterヘッダー（1500x500）</h2>
        <img
          src={twitterHeaderImageUrl}
          alt="生成したtwitterのヘッダー画像"
          width="100%"
        />
        <div className="my-5 d-flex justify-content-center">
          <TwitterShareButton
            url={`${process.env.NEXT_PUBLIC_WEB_URL}/preview/${color}/${encodedText}`}
            text={encodedText}
          />
        </div>
        <div className="my-5 d-flex justify-content-center">
          <Link href="/create">
            <a>
              <button className="btn btn-warning">作り直す</button>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/${encodeURIComponent(
      query.color
    )}/${encodeURIComponent(query.encodedText)}`
  );
  const json = await res.json();
  return { props: json };
}
