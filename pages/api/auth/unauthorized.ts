// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  error: string
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  console.log('UNAUTHORIZED HANDLER RUNNING')
  response.status(403).json({ error: 'Unauthorized' })
}
