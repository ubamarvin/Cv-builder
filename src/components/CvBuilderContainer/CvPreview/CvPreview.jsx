import WorkExperienceCard from "./WorkExperienceCards/WorkExperienceCards"
import EducationCard from "./EducationCards/EducationCards"
import SkillsCards from "./SkillsCards/SkillsCards"

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

export default CvPreview