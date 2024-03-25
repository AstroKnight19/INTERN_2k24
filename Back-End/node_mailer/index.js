const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASS,
  },
});

const mailOptions = {
  from: process.env.USER,
  to: ["greencrystal1975@gmail.com"],
  subject: "Sending email using nodemailer and gmail",
  text: "Hello World",
  html: "<b>What's up</b>",
  attachments: [
    {
      filename: "dummy.pdf",
      path: path.join(__dirname, "dummy.pdf"),
      contentType: "application/pdf",
    },
    {
      filename: "test.png",
      path: path.join(__dirname, "test.png"),
      contentType: "image/png",
    },
    // {
    //   filename: "test1.jpeg",
    //   path: path.join(__dirname, "test1.jpeg"),
    //   contentType: "image/jpeg",
    // },
    {
      filename: "sample.mp4",
      path: path.join(__dirname, "sample.mp4"),
      contentType: "video/mp4",
    },
  ],
};

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent");
  } catch (error) {
    console.error(error);
  }
};
sendMail(transporter, mailOptions);
