import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { password } = body;

  const secretToken = process.env.THOUGHTS_SECRET_TOKEN;

  if (!secretToken) {
    return NextResponse.json(
      { error: "Server not configured" },
      { status: 500 }
    );
  }

  if (password === secretToken) {
    const response = NextResponse.json({ success: true });

    // Set a cookie that lasts 7 days
    response.cookies.set("site_access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
