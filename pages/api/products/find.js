// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from './../../../lib/prisma.js';
import {writeFile} from 'fs/promises'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  try {
    const data = await prisma.product.findMany({});
    return res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Something went wrong' });
  }
}
