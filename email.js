const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'balikisjubril@gmail.com', 
    pass: 'your_password_here', 
  },
});

const mailOptions = {
  from: 'balikisjubril@gmail.com', 
  to: 'jane.smith@example.com', 
  subject: 'Test Email from Node.js',
  text: 'Hello from Node.js!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

