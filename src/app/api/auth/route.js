import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const filePath = path.join(process.cwd(), "src/app/api/auth/users.json");
const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-123";

async function readUsers() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function writeUsers(users) {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
}

export async function POST(req) {
  const { email, password, name, action } = await req.json();

  if (action === "register") {
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const users = await readUsers();
    const userExists = users.users.find((u) => u.email === email);

    if (userExists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: users.nextId.toString(),
      email,
      password: hashedPassword,
      name,
    };

    users.users.push(newUser);
    users.nextId++;
    await writeUsers(users);

    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json(
      {
        message: "User registered",
        token,
        user: { id: newUser.id, email, name },
      },
      { status: 201 }
    );
  }

  if (action === "login") {
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const users = await readUsers();
    const user = users.users.find((u) => u.email === email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return NextResponse.json({
      message: "Login successful",
      token,
      user: { id: user.id, email, name: user.name },
    });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}

export async function GET(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const users = await readUsers();
    const user = users.users.find((u) => u.id === decoded.userId);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
