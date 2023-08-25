// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from './../../../lib/prisma.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  let body = req.body;
  body.image = '/images/helmet.jpg';

  const product = await prisma.product.update({
    where: {id: +body.idItem},
    data: {
      name: body.name,
      description: body.description,
      price: body.price,
      image: body.image,
      category: {
        connect : {id : +body.category}
      },
    },
  });
  res.redirect(308, './../../');
}

