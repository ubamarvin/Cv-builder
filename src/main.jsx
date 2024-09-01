import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState} from "react"

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
  const [jobs, setJobs] = useState([{jobTitle: "burger", jobCompany: "crustykrab"}])

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
  const theForms = jobs.map((job) => {
    return (
    <ExperienceInfoForm
    job={job}
    setJobs={setJobs}

    />
  )
  })
 
  //what about keys? 
  return (
    <div className='experience-info'>
      <p>Work Experience</p>
 
      {theForms}
      
    </div>
  )
}


//add delete button ( kicks itself off props passed list)
function ExperienceInfoForm({job, setJobs}) {
  const n = 1;
  return (
    <div className='experience-info-form'>
      <form>

        <div>
          <label htmlFor='jobTitle{n}'>JobTitle</label>
          <input
           type='text'
           id='jobTitle{n}'
           value={job.jobTitle}
           />
        </div>

        <div>
          <label htmlFor='JobCompany{n}'>JobCompany</label>
          <input
           type='text'
           id='jobCompany{n}'
           value={job.company}
           />
        </div>


      </form>
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




function CvPreview({fullNameText}) {

  return (
    <div className="cv-preview">
      <p>cv preview</p>
      <p>Your name is: <span>{fullNameText}</span></p>
      
    </div>
  )
}

function previewExperienceInfo({job}) {
  // render this shit and return stuff
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <CvBuilderContainer/>
  </StrictMode>,
)
