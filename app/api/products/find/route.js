import prisma from './../../../../lib/prisma.js';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    let data = {};
    if (id === null) {
      data = await prisma.product.findMany({});
    } else {
      data = await prisma.product.findFirst({
        where : {id : +id}
      });
    }
    return NextResponse.json({ data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong' },
      { status: 500 });
  }
}
