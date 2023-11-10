import React, {useState} from "react";
import "./CourseInput.css";

const CourseInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const [isValid, setIsValid] = useState(true);

    function goalInputHandler(event) {
      if(event.target.value.trim().length > 0) {
        setIsValid(true)
      }
        setEnteredGoal(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();

        if(enteredGoal.trim().length === 0) {
            setIsValid(false)
            return;
        }

        props.onSetGoal(enteredGoal);
        setEnteredGoal('')
        
    }


  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-control ${!isValid ? 'inValid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredGoal} onChange={goalInputHandler}/>
      </div>
      <div className="form-control__action">
        <button>Add Goal</button>
      </div>
    </form>
  );
};

export default CourseInput;
