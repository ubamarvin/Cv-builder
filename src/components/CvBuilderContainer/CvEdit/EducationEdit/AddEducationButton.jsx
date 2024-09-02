//refactor this with the addExbtn
import {v4 as uuidv4} from "uuid"

function AddEducationButton({education, setEducation}) {

    function buttonClickHandler () {
  
      const newEducation = [ ...education, {id: uuidv4(),
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
  }

export default AddEducationButton