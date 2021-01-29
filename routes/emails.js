var express = require("express");
var router = express.Router();

const { subEmail, patchSubEmail, gemtEmailSub } = require("../models/emails");

/*---------Create Event---------*/
router.post("/", async function (req, res) {
  let body = req.body;
  const event = await subEmail(body);
  res.json(event);
});

/*---------Patch Email by User Id---------*/
router.patch("/:uid", async function (req, res) {
  let uid = req.params.uid;
  let body = req.body;
  let email = await patchSubEmail(body, uid);
  res.json({ success: true, payload: email });
});

router.get("/", async function (req, res) {
  let emailSub = await gemtEmailSub();
  res.json({ success: true, payload: emailSub });
});

module.exports = router;
