const express = require("express");
const authCntrl = require("../controller/authControl.js");
const authCheck = require("../middlewear/authMiddlewear.js");
const { admin } = require("../middlewear/middleweas.js");

const router = express.Router();

router.post(
  "/create-or-update-user",
  authCheck,
  authCntrl.CreatingOrUpdatingUser
);
router.post("/create-user", authCheck, authCntrl.CurrentUser);
router.post("/create-admin", authCheck, admin, authCntrl.CurrentUser);

// www.groups.com/api/create-or-update-user

// router.post('/hadi', (req, res) => {
//     res.send('hi this is hadi raza')
// })

module.exports = router;
