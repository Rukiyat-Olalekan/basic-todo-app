import React from "react";
import CourseGoalItem from "./CourseGoalItem";

const CourseGoalList = (props) => {
  return (
    <ul>
      {props.lists.map(list => (<CourseGoalItem
          key={list.id}
          id={list.id}>
            {list.goal}
          </CourseGoalItem>))}
    </ul>
  );
};

export default CourseGoalList;
