
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

export default EducationCard