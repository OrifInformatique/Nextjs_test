import prisma from './../../../lib/prisma.js';

export default async function handler(req, res) {
  console.log('delete begin');
  console.log(req.method);
  if (req.method !== 'DELETE') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  const body = req.body;
  const product = await prisma.product.delete({
    where: {
      id: body.id
    },
  });
  res.status(200).json({ msg: '200'});
}

