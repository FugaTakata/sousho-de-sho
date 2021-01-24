import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { MouseEvent, FormEvent, useState } from "react";

const colors: Array<string> = [
  "black",
  "blue",
  "green",
  "indigo",
  "orange",
  "pink",
  "red",
];

const colorCodes = {
  black: "#000000",
  blue: "#2196F3",
  green: "#1B5E20",
  indigo: "#1A237E",
  orange: "#F57F17",
  pink: "#880E4F",
  red: "#B71C1C",
};

export default function Create() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [isSending, setIsSending] = useState(false);

  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);

    const encodedText = encodeURIComponent(text);

    router.push(`/preview/${color}/${encodeURIComponent(encodedText)}`);
  }
  console.log(color);

  return (
    <Layout>
      <div className="text-center">
        <h2>草書の画像を作成する</h2>
        <p className="m-5">草書にしたい言葉を入力しましょう</p>
        <p className="m-5 text-danger">
          一部表示ができない漢字や記号があります
        </p>
        <form onSubmit={onFormSubmit}>
          <h3 className="m-5">まずは枠の色を選びましょう</h3>
          {colors.map((color) => {
            return (
              <div className="form-check form-check-inline" key={color}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id={color}
                  value={color}
                  onClick={(
                    e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
                  ) => setColor(e.target.value)}
                  style={{ backgroundColor: colorCodes[color] }}
                />
              </div>
            );
          })}

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
                disabled={text.length === 0 || color.length === 0}
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
