import Head from "next/head";
import { useRouter } from "next/router";

const colors = ["black", "blue", "green", "indigo", "orange", "pink", "red"];

export default function Preview() {
  const router = useRouter();
  let color = router.query.color as string;
  const encodedText = router.query.encodedText as string;

  if (!colors.includes(color)) {
    const i = Math.floor(Math.random() * colors.length);
    color = colors[i];
  }

  const ogpImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/api/${color}/${encodedText}/ogp`;

  return (
    <div>
      <Head>
        <meta property="og:image" key="ogImage" content={ogpImageUrl} />
        <meta
          name="twitter:card"
          key="twitterCard"
          content="wummary_large_image"
        />
        <meta name="twitter:image" key="twitterImage" content={ogpImageUrl} />
      </Head>
      <main>preview page</main>
    </div>
  );
}
