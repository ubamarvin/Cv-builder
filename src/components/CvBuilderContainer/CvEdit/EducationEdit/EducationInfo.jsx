import AddEducationButton from "./AddEducationButton"

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
    */
  
    
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
  
  }

export default EducationInfo;