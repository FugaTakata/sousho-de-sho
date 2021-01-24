import { NextApiRequest, NextApiResponse } from "next";
import * as path from "path";
import { createCanvas, registerFont, loadImage } from "canvas";

type DrawArea = {
  width: number;
  height: number;
};

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
  const width = sizes[req.query.imageType as string]?.width || 600;
  const height = sizes[req.query.imageType as string]?.height || 315;

  const drawArea: DrawArea = {
    width: (width / 5) * 4,
    height: (height / 5) * 4,
  };

  const text = req.query.encodedText as string;
  let color = req.query.color as string;

  const lines = text.split("\n");
  let maxLength = 0;
  lines.forEach((line) => {
    if (maxLength < line.length) {
      maxLength = line.length;
    }
  });

  const space = {
    width: drawArea.width / maxLength,
    height: drawArea.height / lines.length,
  };
  const charSize = Math.min(space.width, space.height);

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

  context.font = `${charSize}px gatasosyo`;
  context.fillStyle = "#424242";
  context.textAlign = "center";
  context.textBaseline = "middle";

  lines.forEach((line, lineIndex) => {
    const charArray: string[] = line.split("");

    charArray.forEach((char, charIndex) => {
      if (space.height < space.width) {
        context.fillText(
          char,
          width / 10 +
            (space.width / 2) * (maxLength - line.length + 1) +
            space.width * charIndex,
          height / 10 + charSize / 2 + charSize * lineIndex
        );
      } else {
        context.fillText(
          char,
          width / 10 +
            (space.width / 2) * (maxLength - line.length + 1) +
            space.width * charIndex,
          height / 10 + space.height / 2 + space.height * lineIndex
        );
      }
    });
  });

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });

  res.end(buffer, "binary");
};
