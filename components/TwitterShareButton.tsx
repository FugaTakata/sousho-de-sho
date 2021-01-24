import Image from "next/image";

type Props = {
  url: string;
  text: string;
};

export default function TwitterShareButton(props: Props) {
  const url = `https://twitter.com/intent/tweet?url=${encodeURI(
    encodeURI(props.url)
  )}&text=${props.text}&hashtags=${encodeURIComponent("草書で書")}`;

  return (
    <a href={url} className="twitter-share-button" target="_blank">
      <Image
        src="/images/Twitter_Logo_WhiteOnBlue.svg"
        width="24"
        height="24"
      />
      <span>シェア</span>
    </a>
  );
}
