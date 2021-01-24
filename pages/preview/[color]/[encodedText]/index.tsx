import Head from "next/head";
import Layout from "../../../../components/Layout";

const colors = ["black", "blue", "green", "indigo", "orange", "pink", "red"];

type Props = {
  color: string;
  encodedText: string;
};

export default function Preview(props: Props) {
  const color = props.color;
  const encodedText = props.encodedText;

  const ogpImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/api/${color}/${encodedText}/ogp`;

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
      <main>preview page</main>
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
