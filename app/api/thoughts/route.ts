import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const result = await sql`
      SELECT id, content, image_url, created_at
      FROM thoughts
      ORDER BY created_at DESC
    `;

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error fetching thoughts:", error);
    return NextResponse.json(
      { error: "Failed to fetch thoughts" },
      { status: 500 }
    );
  }
}

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

  try {
    // Insert the thought into the database
    const result = await sql`
      INSERT INTO thoughts (content, image_url)
      VALUES (${content.trim()}, NULL)
      RETURNING id, content, image_url, created_at
    `;

    const newThought = result.rows[0];
    return NextResponse.json(newThought, { status: 201 });
  } catch (error) {
    console.error("Error creating thought:", error);
    return NextResponse.json(
      { error: "Failed to create thought" },
      { status: 500 }
    );
  }
}
