import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Job from './Job';
import Jobinfo from './Jobinfo';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobl, setJobl] = useState();
  const [jobinfo, setJobinfo] = useState([]);
  const filter = (item) => {
    setJobl(item);
    let newj = jobs.filter((j) => { return j.id == item })
    setJobinfo(newj)
  }

  const fetchJobs = async ()=>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const jobsf = await response.json();
      setLoading(false);
      setJobs(jobsf);
      setJobl(jobsf[0].id);
      setJobinfo([jobsf[0]]);
      console.log(jobsf);
    } catch(e){
      setLoading(false);
      console.log(e)
    }
  }
  useEffect(() => {
    fetchJobs()
  }, []);

  if (loading) {
    return <h2>Loading.....</h2>
  }
  return (

    <main>
      <section className='section'>
        <div className='title'>
          <h2 className=''>Experience</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {jobs.map((job) => <Job key={job.id} id={job.id} company={job.company} active={jobl} filter={filter}/>)}
          </div>
          <div className='job-info'>
            {jobinfo.map((job) => <Jobinfo key={job.id} {...job} />)}
            <button className='btn'>More Info</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
