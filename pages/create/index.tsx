import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Create() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [color, setColor] = useState("green");
  const [isSending, setIsSending] = useState(false);

  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);

    const encodedText = encodeURIComponent(text);

    // router.push({
    //   pathname: "/preview/[color]/[encodedText]",
    //   query: { color, encodedText },
    // });
    router.push(`/preview/${color}/${encodeURIComponent(encodedText)}`);
  }

  return (
    <Layout>
      <div className="text-center">
        <h2>草書の画像を作成する</h2>
        <p className="m-5">草書にしたい言葉を入力しましょう</p>
        <p className="m-5 text-danger">
          一部表示ができない漢字や記号があります
        </p>
        <form onSubmit={onFormSubmit}>
          {/* <h3 className="m-5">まずは枠の色を選びましょう</h3> */}

          <h3 className="m-5">言葉の入力</h3>
          <textarea
            className="form-control"
            placeholder={`やってみせ、言って聞かせて、
させてみせ、褒めてやらねば人は動かじ`}
            rows={6}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <div className="m-3">
            {isSending ? (
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                disabled={text.length === 0}
              >
                草書にする
              </button>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
}
