import prisma from './../../../../lib/prisma.js';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData()
    console.log(formData);

    const image = '/images/helmet.jpg';

    const product = await prisma.product.update({
      where: {id: Number(formData.get('idItem'))},
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
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong' },
      { status: 500 });
  }
}

