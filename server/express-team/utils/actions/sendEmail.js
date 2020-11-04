const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (receiver, url, teamname) => {
  const mailOptions = {
    from: process.env.INVITATION_EMAIL,
    to: receiver,
    subject: `Join LiveMD workspace "${teamname}"`,
    html:
      "<p><h1>LiveMD</h1></p>" +
      "<p>Confirm and join to copy and paste the URL into your browser.</p>" +
      `<a href=${url}>${url}</a>` +
      "<p>This invitation link will expire in 1 days</p>",
  };

  const sender = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.INVITATION_EMAIL,
      pass: process.env.INVITATION_PW,
    },
  });
  try {
    const result = await sender.sendMail(mailOptions);
    if (!result) {
      console.log(err);
      return -1;
    }
    console.log("Email sent: " + result.response);
    return 1;
  } catch (e) {
    console.log("Cannot Send Email");
    return -1;
  }
};

module.exports = sendEmail;
