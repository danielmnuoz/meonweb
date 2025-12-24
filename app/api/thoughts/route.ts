import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Check authorization header
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");
  const secretToken = process.env.THOUGHTS_SECRET_TOKEN;

  if (!secretToken) {
    return NextResponse.json(
      { error: "Server not configured for posting" },
      { status: 500 }
    );
  }

  if (!token || token !== secretToken) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  // Parse the request body
  const body = await request.json();
  const { content } = body;

  if (!content || typeof content !== "string" || !content.trim()) {
    return NextResponse.json(
      { error: "Content is required" },
      { status: 400 }
    );
  }

  // Create the new thought
  const newThought = {
    id: crypto.randomUUID(),
    content: content.trim(),
    image_url: null,
    created_at: new Date().toISOString(),
  };

  return NextResponse.json(newThought, { status: 201 });
}
