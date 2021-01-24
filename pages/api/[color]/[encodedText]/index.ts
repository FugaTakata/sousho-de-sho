import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const color = req.query.color as string;
  const encodedText = req.query.encodedText as string;

  res.status(200).json({
    color,
    encodedText,
  });
};
