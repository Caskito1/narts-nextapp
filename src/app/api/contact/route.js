import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Web Contact" <${process.env.EMAIL_USER}>`,
      to: "caskito90@gmail.com",
      subject: "Nuevo mensaje desde la web",
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Error enviando email:", err);
    return new Response(JSON.stringify({ error: "Error enviando email" }), {
      status: 500,
    });
  }
}
