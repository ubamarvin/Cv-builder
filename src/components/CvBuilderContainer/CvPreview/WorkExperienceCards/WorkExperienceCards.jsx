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

export default WorkExperienceCard