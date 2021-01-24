import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";

const colors = ["black", "blue", "green", "indigo", "orange", "pink", "red"];

export default function Preview() {
  const color = "pink";
  const encodedText = encodeURIComponent("私の名前は高田楓我です。");

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
