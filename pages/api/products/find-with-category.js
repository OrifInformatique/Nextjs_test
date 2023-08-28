import prisma from './../../../lib/prisma.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  try {
    const data = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    return res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Something went wrong' });
  }
}
