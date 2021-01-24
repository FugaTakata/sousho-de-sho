import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";

const colors = ["black", "blue", "green", "indigo", "orange", "pink", "red"];

export default function Preview() {
  const router = useRouter();
  const [color, setColor] = useState<string>("");
  const [encodedText, setEncodedText] = useState<string>("");

  useEffect(() => {
    if (router.asPath !== router.route) {
      setEncodedText(router.query.encodedText as string);
      if (!colors.includes(router.query.encodedText as string)) {
        const i = Math.floor(Math.random() * colors.length);
        setColor(colors[i]);
      }
    }
  }, [router]);

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
