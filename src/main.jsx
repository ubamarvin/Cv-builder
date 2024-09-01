import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState} from "react"
import {v4 as uuidv4} from "uuid"

import "./index.css";

function Header() {

  return (
    <div className="header">
      <p>This is the Header</p>
    </div>
  )
}

function CvBuilderContainer() {
  //tabs for switching beetween inputs are buttons

  //transform into obsject?
  const [fullNameText, setFullNameText] = useState("")

  //jobs? Array of obsjects?
  const [jobs, setJobs] = useState([{id: uuidv4(), jobTitle: "burger", jobCompany: "crustykrab"}, {id: uuidv4(), jobTitle: "pizza", jobCompany : "PizzaHut"}])

  return (
    <div className="cv-builder-container">
      <CvInfo
       fullNameText={fullNameText}
       setFullNameText={setFullNameText}

       jobs={jobs}
       setJobs={setJobs}
      />
      <CvPreview
       fullNameText={fullNameText}
       jobs = {jobs}
      />
    </div>
  )

}

function CvInfo({fullNameText, setFullNameText, jobs, setJobs}) {

  return (
    <div className="cv-info">

    <PersonalInfo
     fullNameText={fullNameText}
     setFullNameText={setFullNameText}
    />
    <ExperienceInfo
     jobs={jobs}
     setJobs={setJobs}
    />
    <EducationInfo/>
    

    </div>
  )
}

function PersonalInfo({fullNameText, setFullNameText}) {

  return (
    <div className='personal-info'>
      <p>Personal Info..</p>
      <form>
        <div>
         <label htmlFor="fullName">Full Name </label>
         <input
          type="text"
          id="fullName"
          value={fullNameText}
          onChange={(e) => setFullNameText(e.target.value)}
          />
        </div>

        <div>
         <label htmlFor="email">Email </label>
         <input type="email" id="email"/>
        </div>

        <div>
         <label htmlFor="phoneNumber">PhoneNumber </label>
         <input type="tel" id="phoneNumber"/>
        </div>

      

      </form>
    </div>
  )
}

// A button that appends another Experience Info
// by adding a empty object to the jobs state
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
    </div>
  )
  })
 
  //what about keys? 
  return (
    <div className='experience-info'>
      <p>Work Experience</p>
      {cards}
 
      
      
    </div>
  )
}




function EducationInfo() {
  return (
    <div className='education-info'>
      <p>Education Info..</p>
    </div>
  )
}




function CvPreview({fullNameText, jobs}) {
  
  return (
    <div className="cv-preview">
      <p>cv preview</p>
      <p>Your name is: <span>{fullNameText}</span></p>
      <p>Work Experience:</p>
      <WorkExperienceCard jobs={jobs}/>

      
    </div>
  )
}

function WorkExperienceCard({jobs}) {

    const card = jobs.map((job)=> {
      return (
        <div key={job.id} className='work-experience-card'>
        <p>{job.jobTitle} at {job.jobCompany}</p>
      </div>
    )
  });
  return (
    <div className='work-experience-card-container'>
      {card}
    </div>
  )

  
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <CvBuilderContainer/>
  </StrictMode>,
)
