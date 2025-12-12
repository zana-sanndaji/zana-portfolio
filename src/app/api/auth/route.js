// src/app/api/auth/route.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-for-dev-only-123";

const users = []; // در تولید واقعی از دیتابیس استفاده کن

export async function POST(request) {
  const { name, email, password, action } = await request.json();

  if (action === "register") {
    // چک کن کاربر قبلاً ثبت‌نام نکرده
    if (users.find((u) => u.email === email)) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const user = { id: Date.now(), name, email, password }; // در تولید رمز رو هش کن!
    users.push(user);

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "30d",
    });

    return NextResponse.json({
      token,
      user: { name: user.name, email: user.email },
    });
  }

  if (action === "login") {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "30d",
    });

    return NextResponse.json({
      token,
      user: { name: user.name, email: user.email },
    });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}

export async function GET(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "No token" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = users.find((u) => u.email === payload.email);
    if (!user) throw new Error("User not found");

    return NextResponse.json({ name: user.name, email: user.email });
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
