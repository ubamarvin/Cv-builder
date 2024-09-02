import PersonalInfo from "./PersonalEdit/PersonalEdit";
import EducationInfo from "./EducationEdit/EducationInfo";
import ExperienceInfo from "./ExperienceEdit/ExperienceEdit";
import SkillsEdit from "./SkillsEdit/SkillsEdit";

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
}

export default CvInfo;