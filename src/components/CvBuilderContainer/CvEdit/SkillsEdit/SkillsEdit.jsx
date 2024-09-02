import AddSkillsButton from "./AddSkillsButton";

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
  }

export default SkillsEdit;