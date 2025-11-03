
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message, captcha } = await req.json();


    
    // 🔒 1. Verificar que venga el token
    if (!captcha) {
      return new Response(JSON.stringify({ error: "Captcha no completado" }), {
        status: 400,
      });
    }

    // 🔍 2. Validar el token con Google
    const verifyURL = "https://www.google.com/recaptcha/api/siteverify";
    const response = await fetch(verifyURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    });

    const data = await response.json();

    if (!data.success) {
      return new Response(JSON.stringify({ error: "Captcha inválido" }), {
        status: 400,
      });
    }
    
    await resend.emails.send({
      from: "Contacto Web <contacto@nartsfoundation.org>",
      to: process.env.EMAIL_TO,
      subject: "Nuevo mensaje desde la web",
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Error enviando email:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

