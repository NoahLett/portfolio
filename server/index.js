require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();

app.use(staticMiddleware);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/send-email', (req, res) => {
  const { topic, message } = req.body;

  const msg = {
    to: 'noahblett96@gmail.com',
    from: 'nblportfolio@gmail.com',
    subject: topic,
    text: message
  };

  sgMail.send(msg)
    .then(() => {
      res.status(200).send('Email sent successfully');
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error sending email');
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
