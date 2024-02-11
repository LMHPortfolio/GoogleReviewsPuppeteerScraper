const nodeCron = require("node-cron");
const { start } = require("./googleReviewsCrawl");
const { start2 } = require("./googleReviewsCrawl2");
const { transporter, mailOptions1, mailOptions2 } = require("./emailResult");

const job = nodeCron.schedule(
  "*/30 * * * *",
  start,
  {
    scheduled: true,
    timezone: "America/New_York",
  }
  /* transporter.sendMail(mailOptions1, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent", mailOptions1.attachments.filename);
    }
  }) */
);

const job2 = nodeCron.schedule(
  "*/30 * * * *",
  start2,
  {
    scheduled: true,
    timezone: "America/New_York",
  }

  /* transporter.sendMail(mailOptions2, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent", mailOptions2.attachments.filename);
    }
  }) */
);

console.log("Chron jobs 1 and 2 scheduled to run every 30mins");

/* const job3 = nodeCron.schedule(
  "10,40 * * * *",
  () =>
    transporter.sendMail(mailOptions1, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent", mailOptions1.attachments.filename);
      }
    }),
  {
    scheduled: true,
    timezone: "America/New_York",
  }
);

const job4 = nodeCron.schedule(
  "10,40 * * * *",
  () =>
    transporter.sendMail(mailOptions2, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent", mailOptions2.attachments.filename);
      }
    }),
  {
    scheduled: true,
    timezone: "America/New_York",
  }
);

console.log("Chron jobs 3 and 4 scheduled to run every 30mins"); */
