import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState} from "react"
import {v4 as uuidv4} from "uuid"

import Header from "./components/Header/Header"
import CvBuilderContainer from './components/CvBuilderContainer/CvBuilderContainer'


import CvInfo from './components/CvBuilderContainer/CvEdit/CvEdit'
import CvPreview from './components/CvBuilderContainer/CvPreview/CvPreview'
import PersonalInfo from './components/CvBuilderContainer/CvEdit/PersonalEdit/PersonalEdit'
import ExperienceInfo from './components/CvBuilderContainer/CvEdit/ExperienceEdit/ExperienceEdit'
import EducationInfo from './components/CvBuilderContainer/CvEdit/EducationEdit/EducationInfo'
import SkillsEdit from './components/CvBuilderContainer/CvEdit/SkillsEdit/SkillsEdit'


import "./index.css";

//function Header() {
//
//  return (
//    <div className="header">
//      <p>This is the Header</p>
//    </div>
//  )
//}

/*
function CvBuilderContainer() {
  //tabs for switching beetween inputs are buttons

  //transform into obsject?
  const [fullNameText, setFullNameText] = useState("")

  //jobs? Array of obsjects?
  const [jobs, setJobs] = useState([{id: uuidv4(), jobTitle: "burger", jobCompany: "crustykrab"}, {id: uuidv4(), jobTitle: "pizza", jobCompany : "PizzaHut"}])

  const [education, setEducation] = 
  useState([{id: uuidv4(),
            institution: "PokemonSchool",
            degree: "PokemonMastah",
            location: "Alabasta",
            graduationYear: new Date("2024-03-23")} ])

  const [skills, setSkills] = useState([ {id: uuidv4(), 
            skillName: "For loops",
              description: "proficient in the art of 4 loops"}])

  return (
    <div className="cv-builder-container">
      <CvInfo
       fullNameText={fullNameText}
       setFullNameText={setFullNameText}

       jobs={jobs}
       setJobs={setJobs}

       education={education}
       setEducation={setEducation}

       skills={skills}
       setSkills={setSkills}


      />
      <CvPreview
       fullNameText={fullNameText}
       jobs = {jobs}
       education={education}
       skills={skills}

      />
    </div>
  )

} // Comped
/*
function CvInfo({fullNameText, setFullNameText, jobs, setJobs, education, setEducation, skills, setSkills}) {

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
    <EducationInfo
     education={education}
     setEducation={setEducation}
    />

    <SkillsEdit
     skills={skills}
     setSkills={setSkills}
    />

    

    </div>
  )
}// comped

/*
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
} */ // comped and in tree

// A button that appends another Experience Info
// by adding a empty object to the jobs state
/*
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
}*/// comped

/*
function AddExperienceButton({jobs, setJobs}){
  function buttonClickHandler() {
    const newJobs = [...jobs, {id: uuidv4(), jobTitle: "", jobCompany: ""}]
    setJobs(newJobs)
  }
  return (
    <button
     onClick={()=> buttonClickHandler() }
    >
      Add Experience</button>
  )
}*/// comped in tree



/*
function EducationInfo({education, setEducation}) {

  
  const handleInstitutionChange = (id, e) => {
    const newEdu = education.map((edu) =>
      edu.id === id ? { ...edu, institution: e.target.value} : edu)
    setEducation(newEdu)
  }
    
  
  const handleDegreeChange = (id, e) => {
    const newEdu = education.map((edu) => 
      edu.id === id ? { ...edu, degree: e.target.value} : edu
    )
    setEducation(newEdu)
  }


  /*
  // This is bad, leaves a null entry causing a nullpointer error
  const handleDeleteJobCardClickDontUse = (id) => {
    const newJobs = jobs.map((job) => {
      return job.id === id ? null : job
    })
    setJobs(newJobs)
  }
  

  
  const handleDeleteEducationCardClick = (id) => {
    const newEdu = education.filter((edu) => edu.id !== id)
    setEducation(newEdu)
  }
 


  const cards = education.map((edu) => {
    return (
      <div key={edu.id} className='education-info-form'>
      <form>

        <div>
          <label htmlFor='institution'>Institution</label>
          <input
           type='text'
           id='institution'
           value={edu.institution}
           onChange = {(e) => handleInstitutionChange(edu.id, e)}
           
           />
        </div>

        <div>
          <label htmlFor='degree'>Degree earned</label>
          <input
           type='text'
           id='degree'
           value={edu.degree}
           onChange = {(e) => handleDegreeChange(edu.id, e)}
           />
        </div>


      </form>
      
      <button
      type='button'
      onClick={() => handleDeleteEducationCardClick(edu.id)}>
        Delete
        </button>
    </div>
  )
  })
 
  //what about keys? 
  return (
    <div className='education-info'>
      <p>Education</p>
      {cards}
      <AddEducationButton
      education={education}
      setEducation={setEducation}/>
      
      
    </div>
  )

}*//// comped

/*
//refactor this with the addExbtn
function AddEducationButton({education, setEducation}) {

  function buttonClickHandler () {

    const newEducation = [ ...education, {id: uuidv4,
      institution: "",
      degree: "",
      graduationYear: new Date()}]
      setEducation(newEducation)
    }

    return (
      <button
        type='button'
        onClick={buttonClickHandler}
      >
        Add Education
        </button>
    )
}*///comped


/*
function SkillsEdit({skills, setSkills}) {

  const handleSkillNameChange = (id, e) => {
    const newSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, skillName: e.target.value} : skill)
    setSkills(newSkills)
  }
    
  
  const handleSkillDescriptionChange = (id, e) => {
    const newSkills = skills.map((skill) => 
      skill.id === id ? { ...skill, description: e.target.value} : skill
    )
    setSkills(newSkills)
  }


  /*
  // This is bad, leaves a null entry causing a nullpointer error
  const handleDeleteJobCardClickDontUse = (id) => {
    const newJobs = jobs.map((job) => {
      return job.id === id ? null : job
    })
    setJobs(newJobs)
  }
  */
 /*

  
  const handleDeleteSkillCardClick = (id) => {
    const newSkills = skills.filter((skill) => skill.id !== id)
    setSkills(newSkills)
  }
 


  const cards = skills.map((skill) => {
    return (
      <div key={skill.id} className='skill-info-form'>
      <form>

        <div>
          <label htmlFor='skill-name'>SkillName</label>
          <input
           type='text'
           id='skill-name'
           value={skill.skillName}
           onChange = {(e) => handleSkillNameChange(skill.id, e)}
           
           />
        </div>

        <div>
          <label htmlFor='skill-description'>Skill Description</label>
          <input
           type='text'
           id='skill-description'
           value={skill.description}
           onChange = {(e) => handleSkillDescriptionChange(skill.id, e)}
           />
        </div>


      </form>
      
      <button
      type='button'
      onClick={() => handleDeleteSkillCardClick(skill.id)}>
        Delete
        </button>
    </div>
  )
  })
 
  //what about keys? 
  return (
    <div className='skills-info'>
      <p>Skills</p>
      {cards}
      <AddSkillsButton
      skills={skills}
      setSkills={setSkills}/>
      
    </div>
  )
}*/

/*
function AddSkillsButton({skills, setSkills}) {
  function handleButtonClick(){
    const newSkills = [ ...skills, {id: uuidv4(), skillName: "", description: ""}]
    setSkills(newSkills)
  }

  return (
    <button
    type='button'
    onClick={()=> handleButtonClick()}
    >
    Add Skills
    </button>
  )
}*/



/*
function CvPreview({fullNameText, jobs, education, skills}) {
  
  return (
    <div className="cv-preview">
      <p>cv preview</p>
      <p>Your name is: <span>{fullNameText}</span></p>
      <p>Work Experience:</p>
      <WorkExperienceCard jobs={jobs}/>
      <p>Education</p>
      <EducationCard education={education}/>
      <p>Skills</p>
      <SkillsCards skills={skills}/>
      
    </div>
  )
}
  */
/*
function SkillsCards({skills}) {
  const cards = skills.map((skill) => 
    <div key={skill.id} className='skill-card'>
      <p>{skill.skillName} : {skill.description}</p>
    </div>
  )
  
  return (
    <div className='skill-card-container'>
      {cards}
    </div>
  )
}
*/
/*
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
/*
function EducationCard({education}) {
  const card = education.map((edu) => {
    return (
      <div key={edu.id} className='education-card'>
        <p>{edu.institution}</p>
        <p>{edu.degree}</p>
      </div>
    )
  });
  return (
    <div className='education-card-container'>
      {card}
    </div>
  )
}
  */


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <CvBuilderContainer/>
  </StrictMode>,
)
