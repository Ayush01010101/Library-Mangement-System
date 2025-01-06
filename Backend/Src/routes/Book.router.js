import { Router } from "express";
import jwtverify from "../middleware/jwtverify.middleware.js";
import { Addbook,Getbooks,Updatebook,Deletebook,Updatestatus } from "../controllers/Book.controller.js";

const router=Router()



router.route("/addbook").post(jwtverify,Addbook)
router.route("/getbooks/:limit?").get(Getbooks)
router.route("/updatebook/:id").put(jwtverify,Updatebook)
router.route("/deletebook/:id").delete(jwtverify,Deletebook)
router.route("/updatestatus/:id").patch(jwtverify,Updatestatus)

export {router}