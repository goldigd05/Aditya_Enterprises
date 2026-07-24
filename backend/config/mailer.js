// Uses Brevo's HTTP API (not raw SMTP) because Render's free tier blocks
// outbound SMTP ports (587/465). HTTP requests are not affected.
const sendContactEmail = async ({ name, phone, email, company, productInterested, message }) => {
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'api-key': process.env.BREVO_API_KEY
    },
    body: JSON.stringify({
      sender: { name: 'Aditya Enterprises Website', email: process.env.SMTP_USER },
      to: [{ email: process.env.CONTACT_RECEIVER_EMAIL }],
      replyTo: { email },
      subject: `New Enquiry from ${name} - Aditya Enterprises`,
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Product Interested:</strong> ${productInterested || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Brevo API error (${response.status}): ${errText}`);
  }

  return response.json();
};

module.exports = { sendContactEmail };