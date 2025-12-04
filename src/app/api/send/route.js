// src/app/api/send/route.js   ← این فایل رو کامل جایگزین کن
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const response = await fetch("https://formspree.io/f/xovglvnk", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return Response.json({ success: true });
    } else {
      return Response.json({ error: "Failed to send" }, { status: 500 });
    }
  } catch (error) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
