import Head from "next/head";
import Link from "next/link";
import Layout from "../../../../components/Layout";
import TwitterShareButton from "../../../../components/TwitterShareButton";

type Props = {
  color: string;
  text: string;
};

export default function Preview(props: Props) {
  const color = props.color;
  const encodedText = encodeURIComponent(props.text);

  const ogpImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/api/${color}/${encodedText}/ogp`;
  const twitterHeaderImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/api/${color}/${encodedText}/twitter_header`;
  // const facebookCoverImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/api/${color}/${encodedText}/facebook_cover`;
  // const instagramPostImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/api/${color}/${encodedText}/instagram_post`;

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

        <p className="m-4">
          画像の利用については
          <Link href="/terms-of-service">
            <a className="link-primary">利用規約</a>
          </Link>
          を参照してください。
        </p>

        <h4 className="mt-5">横長（600 &#215; 315）</h4>
        <img src={ogpImageUrl} alt="生成した横長画像" width="100%" />

        <h4 className="mt-5">Twitterヘッダー（1500 &#215; 500）</h4>
        <img
          src={twitterHeaderImageUrl}
          alt="生成したtwitterのヘッダー画像"
          width="100%"
        />

        {/* <h4 className="mt-5">Facebookカバー（820 &#215; 312）</h4>
        <img
          src={facebookCoverImageUrl}
          alt="生成したfacebookのカバー画像"
          width="100%"
        />

        <h4 className="mt-5">Instagram post（1080 &#215; 1080）</h4>
        <img
          src={instagramPostImageUrl}
          alt="生成したinstagram post画像"
          width="100%"
        /> */}

        <div className="my-5 d-flex justify-content-center">
          <TwitterShareButton
            url={`${process.env.NEXT_PUBLIC_WEB_URL}/preview/${color}/${encodedText}`}
            text={encodedText}
          />
        </div>
        <p className="m-4">このページを離れると作成した画像は破棄されます。</p>
        <div className="m-4 d-flex justify-content-center">
          <Link href="/create">
            <a>
              <button className="btn btn-warning">新しく作る</button>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/${query.color}/${query.encodedText}`
  );

  const json = await res.json();

  return { props: json };
}
