import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/chat`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const response = await axios.post(API_URL, req.body);
    return res.status(response.status).json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const status = axiosError.response?.status || 500;
      const message = axiosError.message;
      return res.status(status).json({ error: message });
    }
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: "Unknown error occurred" });
  }
}
