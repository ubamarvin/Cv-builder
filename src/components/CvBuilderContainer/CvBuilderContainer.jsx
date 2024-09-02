// filename.jsx

import { useState} from "react"
import {v4 as uuidv4} from "uuid"
 
import CvInfo from "./CvEdit/CvEdit"
import CvPreview from "./CvPreview/CvPreview"

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
  
  }

export default CvBuilderContainer