import prisma from './../../../../lib/prisma.js';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const data = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json({ data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong' },
      { status: 500 });
  }
}
