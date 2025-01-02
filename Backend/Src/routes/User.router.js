import { Router } from "express";
import { Signupuser } from "../controllers/User.controller.js";
const router=Router()

router.route("/signup").post(Signupuser)


export {router}