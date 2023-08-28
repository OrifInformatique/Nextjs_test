// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from './../../../lib/prisma.js';
// import {writeFile} from 'fs/promises'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  try {
    const id = req.query.id;
    let data = {};
    if (id === null) {
      data = await prisma.product.findMany({});
    } else {
      data = await prisma.product.findFirst({
        where : {id : +id}
      });
    }
    return res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Something went wrong' });
  }
}
