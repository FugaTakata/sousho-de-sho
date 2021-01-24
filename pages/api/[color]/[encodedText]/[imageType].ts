import { NextApiRequest, NextApiResponse } from "next";
import * as path from "path";
import { createCanvas, registerFont, loadImage } from "canvas";

const colors: Array<string> = [
  "black",
  "blue",
  "green",
  "indigo",
  "orange",
  "pink",
  "red",
];

const sizes = {
  ogp: { width: 600, height: 315 },
  twitter_header: { width: 1500, height: 500 },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const width = sizes[req.query.imageType as string]?.width | 600;
  const height = sizes[req.query.imageType as string]?.height | 315;

  const encodedText = req.query.encodedText as string;
  let color = req.query.color as string;

  if (!colors.includes(color)) {
    const i = Math.floor(Math.random() * colors.length);
    color = colors[i];
  }

  registerFont(path.resolve("./fonts/gatasosyo.ttf"), {
    family: "gatasosyo",
  });

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  const backgroundImage = await loadImage(
    path.resolve(`./images/${color}/Twitter_ogp.png`)
  );
  context.drawImage(backgroundImage, 0, 0, width, height);

  context.font = "40px gatasosyo";
  context.fillStyle = "#424242";
  context.textAlign = "start";
  context.textBaseline = "middle";
  context.fillText(
    `${decodeURIComponent(encodedText)}`,
    width / 20,
    height / 20
  );

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });

  res.end(buffer, "binary");
};
