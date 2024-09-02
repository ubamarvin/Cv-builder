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
export default SkillsCards