import {v4 as uuidv4} from "uuid"

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
  }
  
export default AddSkillsButton;