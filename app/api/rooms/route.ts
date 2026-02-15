import { NextResponse } from 'next/server';
import roomsData from '@/data/rooms.json';

export async function GET() {
  return NextResponse.json(roomsData);
}
