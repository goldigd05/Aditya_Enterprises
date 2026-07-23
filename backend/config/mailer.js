const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const sendContactEmail = async ({ name, phone, email, company, productInterested, message }) => {
  const mailOptions = {
    from: `"Aditya Enterprises Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    replyTo: email,
    subject: `New Enquiry from ${name} - Aditya Enterprises`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Product Interested:</strong> ${productInterested || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendContactEmail };
