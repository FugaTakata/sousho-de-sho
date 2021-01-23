import { NextApiRequest, NextApiResponse } from "next";
import * as path from "path";
import { createCanvas, registerFont, loadImage } from "canvas";

const colors = ["black", "blue", "green", "indigo", "orange", "pink", "red"];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const width = 600;
  const height = 315;

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

  // draw rect
  const backgroundImage = await loadImage(
    path.resolve(`./images/${color}/Twitter_ogp.png`)
  );
  context.drawImage(backgroundImage, 0, 0, width, height);

  // draw text
  context.font = "40px gatasosyo";
  context.fillStyle = "#424242";
  context.textAlign = "start";
  context.textBaseline = "middle";
  context.fillText(`${decodeURIComponent(encodedText)}`, 30, 31.5);

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });

  res.end(buffer, "binary");
};
