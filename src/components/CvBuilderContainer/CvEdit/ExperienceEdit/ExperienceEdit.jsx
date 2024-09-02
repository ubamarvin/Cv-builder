//ExperienceEdit.jsx

import AddExperienceButton from "./AddExperienceButton"

function ExperienceInfo({jobs, setJobs}) {

    const handleJobTitleChange = (id, e) => {
      const newJobs = jobs.map((job) =>
        job.id === id ? { ...job, jobTitle: e.target.value} : job)
      setJobs(newJobs)
    }
    
    const handleJobCompanyChange = (id, e) => {
      const newJobs = jobs.map((job) => {
        return job.id === id ? { ...job, jobCompany: e.target.value} : job
      })
      setJobs(newJobs)
    }
  
   
    const handleDeleteJobCardClick = (id) => {
      const newJobs = jobs.filter((job) => job.id !== id)
      setJobs(newJobs)
    } 
  
  
    const cards = jobs.map((job) => {
      return (
        <div key={job.id} className='experience-info-form'>
        <form>
  
          <div>
            <label htmlFor='jobTitle{n}'>JobTitle</label>
            <input
             type='text'
             id='jobTitle'
             value={job.jobTitle}
             onChange = {(e) => handleJobTitleChange(job.id, e)}
             
             />
          </div>
  
          <div>
            <label htmlFor='JobCompany{n}'>JobCompany</label>
            <input
             type='text'
             id='jobCompany'
             value={job.jobCompany}
             onChange = {(e) => handleJobCompanyChange(job.id, e)}
             />
          </div>
  
  
        </form>
        <button
        type='button'
        onClick = {() => handleDeleteJobCardClick(job.id)}
  
        >Delete</button>
      </div>
    )
    })
   
    //what about keys? 
    return (
      <div className='experience-info'>
        <p>Work Experience</p>
        {cards}
        <AddExperienceButton
        jobs={jobs}
        setJobs={setJobs}
        />
        
        
      </div>
    )
  }


  export default ExperienceInfo;