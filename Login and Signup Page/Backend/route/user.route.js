import express from "express";
import { getUser } from "../controller/User.controller.js";

const router = express.Router();

router.get("/", getUser);

export default router;