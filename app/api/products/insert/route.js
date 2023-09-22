import prisma from './../../../../lib/prisma.js';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const formData = await request.formData()

  const image = '/images/helmet.jpg';

  const product = await prisma.product.create({
    data: {
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      image: image,
      category: {
        connect : {id : Number(formData.get('category'))}
      },
    },
  });
  return NextResponse.json({ msg: '200' }, { status: 200 });
}
