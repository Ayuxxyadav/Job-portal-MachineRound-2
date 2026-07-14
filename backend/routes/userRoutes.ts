import express from "express"
import fetchJobs from "../controller/fetchJobs";


const router = express.Router();


router.get("/jobs",fetchJobs)

export default router;