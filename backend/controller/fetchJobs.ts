import axios from "axios";
import { Request , Response } from "express"



const fetchJobs = async (req :Request , res:Response) => {
   try {
    const { search } = req.query;

    const response = await axios.get('https://remotive.com/api/remote-jobs', {
        params : {category : 'software-development'}
    })

    let jobs = response.data.jobs;

    if (search) {
        //@ts-ignore
      jobs = jobs.filter(job =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 3. Sirf zaroori fields bhejo frontend ko
    //@ts-ignore
    const result = jobs.map(job => ({
      id: job.id,
      title: job.title,
      company: job.company_name,
      logo: job.company_logo,
      location: job.candidate_required_location,
      type: job.job_type,
      url: job.url
    }));

    res.json(result);


   } catch (error) {
    console.log(error);
    
   }
}

export default fetchJobs;