import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS } from "./env.js";

const sendMail = async (email) => {
  // Create a test account or replace with real credentials.
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: EMAIL_USER, // generated ethereal user
      pass: EMAIL_PASS, // generated ethereal passwordnod
    },
  });

  // HTML email content
  const html = `
  <div style="background: linear-gradient(135deg, #09090f 0%, #4F46E5 100%); padding: 32px; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); font-family: 'Segoe UI', Arial, sans-serif; text-align: center; max-width: 520px; margin: auto; line-height: 1.6;">
  
  <img src="https://s3.tebi.io/recipe-dazzle/Pasar%205.svg" alt="Pasar Logo" style="width: 80px; margin-bottom: 16px;" />

  <h2 style="color: #7c3aed; font-size: 2rem; margin-bottom: 12px;">🎉 Welcome to Pasar!</h2>

  <p style="color: #111827; font-size: 1.15rem; margin-bottom: 20px;">
    You've <span style="color: #22c55e; font-weight: bold;">successfully joined</span> our waitlist. You're now first in line to experience a smarter, safer, and more flexible way to buy and sell — powered by escrow, crypto, and intelligent automation.
  </p>

  <div style="background: #f1f5f9; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
    <p style="color: #4f46e5; font-weight: 600; margin-bottom: 10px; font-size: 1rem;">
      🚀 Invite your friends and earn early access perks:
    </p>
    <a href="https://pasar-waitlist.vercel.app" style="color: #2563eb; font-size: 1.1rem; font-weight: bold; text-decoration: underline;">
      https://pasar-waitlist.vercel.app
    </a>
  </div>

  <div style="text-align: left; background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
    <h3 style="color: #4338CA; font-size: 1.2rem; font-weight: 600; margin-bottom: 8px;">Why Pasar?</h3>
    <ul style="color: #374151; font-size: 1rem; padding-left: 20px; text-align: left;">
      <li>✅ Escrow protects every transaction — no more scams.</li>
      <li>✅ Pay with card, bank, Binance Pay, or MetaMask.</li>
      <li>✅ AI Agent <strong>Xiara</strong> finds and negotiates deals for you.</li>
      <li>✅ Verified sellers only, with real reviews from real buyers.</li>
      <li>✅ Sellers get smart wallets, in-dashboard payouts, and tools to manage orders easily.</li>
      <li>✅ Every transaction is trackable with our built-in PasarScan explorer.</li>
    </ul>
  </div>

  <p style="color: #7c3aed; font-size: 1.05rem; margin-bottom: 12px;">
    You're officially part of a community redefining how commerce works — where trust meets trade, and technology works for everyone.
  </p>

  <p style="font-size: 1rem; color: #4b5563; margin-bottom: 8px;">
    We’ll reach out as soon as Pasar is live. In the meantime, keep an eye on your inbox — and share Pasar with your network!
  </p>

  <p style="font-size: 1.5rem;">💜</p>
</div>

    `;
  // Wrap in an async IIFE so we can use await.
  (async () => {
    const info = await transporter.sendMail({
      from: `Pasar Waitlist <${EMAIL_USER}>`, // sender address
      to: email,
      subject: "Waitlist Notification✔",
      text: "", // plain‑text body
      html: html, // HTML body
    });

    console.log("Message sent:", info.messageId);
  })();
};
export default sendMail;
