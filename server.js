import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();  

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// --- API ROUTES ---

// 1. Send Email Route (Applications)
app.post('/api/send-email', async (req, res) => {
  const { fullName, mobile, email, date, employmentType, monthlyIncome, productName, bankName, productType } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false }
    });

    const formattedDate = date
  ? new Date(date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  : 'Not Provided';

    console.log(process.env.EMAIL_USER, 'checking env')

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Credgrow Lead: ${productName} - ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ef4444;">New Application Received</h2>
          <p><strong>Product:</strong> ${productName} (${bankName})</p>
          <p><strong>Type:</strong> ${productType?.toUpperCase()}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <h3 style="color: #111827;">Applicant Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Full Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Mobile:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${mobile}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${email}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Date:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${formattedDate}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Employment:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; text-transform: capitalize;">${employmentType}</td></tr>
            ${monthlyIncome ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Monthly Income:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">₹${monthlyIncome}</td></tr>` : ''}
          </table>
          <br/>
          <p style="font-size: 12px; color: #6b7280;">Sent securely via Credgrow Application Portal.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' , 'date': formattedDate });
  } catch (error) {
    console.error('SMTP Error:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
});

// 2. Contact Mail Route (Contact Page)
app.post('/api/contact-mail', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #ef4444; padding: 20px; color: white;">
            <h2 style="margin: 0; font-size: 20px;">New Website Inquiry</h2>
          </div>
          <div style="padding: 20px;">
            <p style="margin-top: 0;"><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <h3 style="color: #374151; font-size: 16px; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; color: #4b5563; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            Sent securely via Credgrow Contact Page
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Contact email sent successfully' });
  } catch (error) {
    console.error('SMTP Error:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
});


// --- PRODUCTION FRONTEND SERVING ---
// This serves your Vite 'dist' folder when deployed on CloudPanel
app.use(express.static(path.join(__dirname, 'dist')));

// This fixes React Router (so refreshing /contact doesn't give a 404)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});