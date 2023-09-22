import prisma from './../../../../lib/prisma.js';
import { NextResponse } from 'next/server';

export async function DELETE(request) {
  try {
    const body = await request.json();
    const product = await prisma.product.delete({
      where: {
        id: body.id
      },
    });
    return NextResponse.json({ msg: '200' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong' },
      { status: 500 });
  }
}

