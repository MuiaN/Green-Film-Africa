import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, organization, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a Nodemailer transporter using the provided SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.greenfilmafrica.org',
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: true, // Port 465 is secure
      auth: {
        user: process.env.SMTP_USER || 'gfa@greenfilmafrica.org',
        pass: process.env.SMTP_PASSWORD, // Set this in Vercel Environment Variables
      },
    });

    // Construct email content
    const mailOptions = {
      from: process.env.SMTP_USER || 'gfa@greenfilmafrica.org',
      to: 'gfa@greenfilmafrica.org',
      replyTo: email,
      subject: `New Website Inquiry: ${subject} from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2E7D32; border-bottom: 2px solid #2E7D32; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <h3 style="color: #444;">Sender Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 5px 0; width: 150px;"><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Organization:</strong></td><td>${organization || 'N/A'}</td></tr>
          </table>
          
          <h3 style="color: #444; margin-top: 20px;">Inquiry Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 5px 0; width: 150px;"><strong>Subject:</strong></td><td>${subject || 'General'}</td></tr>
          </table>
          
          <h3 style="color: #444; margin-top: 20px;">Message</h3>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #666; font-style: italic;">
            This email was sent from the Green Film Africa contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
}