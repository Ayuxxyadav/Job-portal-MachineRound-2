import { Request , Response } from "express"



const fetchJobs = (req :Request , res:Response) => {
   res.send("hello")
}

export default fetchJobs;