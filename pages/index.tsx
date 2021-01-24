import Link from "next/link";
import { useState } from "react";
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
          このサービスはユーザの方々の入力をエレガントな草書の画像に変換することができます。
        </p>

        <p className="m-5">
          このサービスで利用しているフォント、和紙の画像（少し加工済み）は
          <a className="link-primary" href="https://booth.pm/ja/items/318557">
            フォントのリンク
          </a>
          と
          <a
            className="link-primary"
            href="https://publicdomainq.net/japanese-paper-0032397/"
          >
            和紙の画像のリンク
          </a>
          です。大変助かりました。ありがとうございます。
        </p>

        <p className="m-5">
          <span className="text-danger">利用前に必ず</span>
          <Link href="/terms-of-service">
            <a className="link-primary">利用規約</a>
          </Link>
          と
          <Link href="/privacy-policy">
            <a className="link-primary">プライバシーポリシー</a>
          </Link>
          を確認し、同意の上サービスを利用してください。
        </p>

        <Link href="/create">
          <a>
            <button className="btn btn-primary">作ってみる</button>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
