import {v4 as uuidv4} from "uuid"

function AddExperienceButton({jobs, setJobs}){
    function buttonClickHandler() {
      const newJobs = [...jobs, {id: uuidv4(), jobTitle: "", jobCompany: ""}]
      setJobs(newJobs)
    }
    return (
      <button
       onClick={()=> buttonClickHandler() }
      >
        Add Experience</button>
    )
  }

export default AddExperienceButton;