import { Router } from "express";
import { Signupuser,Loginuser,Logout } from "../controllers/User.controller.js";
import jwtverify from "../middleware/jwtverify.middleware.js";
const router=Router()

router.route("/signup").post(Signupuser)
router.route("/login").post(Loginuser,jwtverify)
router.route("/logout").post(Logout)
export {router}