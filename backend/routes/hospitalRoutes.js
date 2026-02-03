import express from "express";
import { createHospital } from "../controllers/hospital.controller.js";

const router = express.Router();

router.post("/hospital", createHospital);

export default router;
