import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Received request method:', req.method);
  res.status(200).json({ name: 'John Doe' });
}
