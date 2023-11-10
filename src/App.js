import React, { useState } from "react";
import "./App.css";
import CourseGoalList from "./Components/CourseGoals/CourseGoalList";
import CourseInput from "./Components/NewGoals/CourseInput";

const dynamicCourseGoals = [
  { goal: "Do all exercises!", id: "e1" },
  { goal: "Finish the course!", id: "e2" },
  {goal: "Improve my React knowledge!", id:"e3"}
];
function App() {
  const [goals, setGoals] = useState(dynamicCourseGoals);

  function handleSetGoal(goal) {
    setGoals((prevGoal) => {
      const updatedGoals = [...prevGoal];
      updatedGoals.unshift({ goal: goal, id: Math.random().toString() });
      return updatedGoals;
    });
  }

  return (
    <div className="App">
      <section id="goal-form">
        <CourseInput onSetGoal={handleSetGoal} />
      </section>
      <section id="goals">
        <CourseGoalList lists={goals} />
      </section>
    </div>
  );
}

export default App;
