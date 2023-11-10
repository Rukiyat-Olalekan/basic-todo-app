import React from "react";
import './CourseGoalItem.css'

const CourseGoalItem = (props) => {
    return (
        <li className="course-goal-list">
            {props.children}
        </li>
    )
} 

export default CourseGoalItem;