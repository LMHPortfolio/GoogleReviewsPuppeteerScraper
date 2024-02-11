const nodemailer = require("nodemailer");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lmhreports@gmail.com",
    pass: "Sudo apt-get reports",
  },
});

const mailOptions1 = {
  from: "lmhreports@gmail.com",
  to: "laurenhansbury@gmail.com",
  subject: "Your google score report",
  attachments: [
    {
      filename: "GoogleReviewCount.csv",
      path: "./GoogleReviewCount.csv",
    },
  ],
};

const mailOptions2 = {
  from: "lmhreports@gmail.com",
  to: "laurenhansbury@gmail.com",
  subject: "Your google score report",
  attachments: [
    {
      filename: "GoogleReviewCount2.csv",
      path: "./GoogleReviewCount2.csv",
    },
  ],
};

module.exports = { transporter, mailOptions1, mailOptions2 };
