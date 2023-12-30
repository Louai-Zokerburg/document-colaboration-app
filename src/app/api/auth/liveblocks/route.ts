import { getUserFromServer } from '@/lib/fetchers';
import { Liveblocks } from '@liveblocks/node';
import { NextRequest } from 'next/server';

const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;

const liveblocks = new Liveblocks({
  secret: API_KEY!,
});

export async function POST(request: NextRequest) {
  // Get the current user
  const user = await getUserFromServer();

  // Create a session for the current user
  const session = liveblocks.prepareSession(`user-${user?.id}`, {
    userInfo: user!,
  });

  // Give the user access to the room
  const { room } = await request.json();
  session.allow(room, session.FULL_ACCESS);

  // Authorize the user and return the result
  const { body, status } = await session.authorize();
  return new Response(body, { status });
}
