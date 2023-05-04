const express = require('express');
const cors = require('cors');

const sgMail = require('@sendgrid/mail')

// const httpProxy = require('http-proxy');

// const proxy = httpProxy.createProxyServer();

const app = express();

app.use(cors());
app.use(express.json())

app.post('/send-email', async (req, res) => {
  const { email, content, fromEmail, toEmail, apiKey } = req.body
  sgMail.setApiKey("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");

  const body = {
    to: toEmail,
    from: fromEmail,
    subject: `New Message From - ${email}`,
    text: content + `\n From customer: ${email}`,
    html: `<p>${content}</p>`
  }

  try {
    await sgMail.send(body)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});