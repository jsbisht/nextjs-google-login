// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GOOGLE_TOKEN_COOKIE } from '../../../utility/constants/app'

type Data = {
  name: string
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  console.log('LOGIN HANDLER RUNNING')
  response.status(200).json({ name: 'John Doe' })
}
