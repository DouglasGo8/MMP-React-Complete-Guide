import React, { useState } from "react";

import "./App.css";

import GoalList from "./components/CourseGoals/GoalList/GoalList";
import CourseInput from "./components/CourseGoals/GoalInput/GoalInput";
/**
 *
 * @returns
 */
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);
  const addGoalHandler = (text) => {
    setCourseGoals((prevGoals) => {
      const updGoals = [...prevGoals];
      updGoals.unshift({ text, id: Math.random().toString() });
      return updGoals;
    });
  };
  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((g) => g.id !== goalId);
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );
  if (courseGoals.length > 0) {
    content = <GoalList items={courseGoals} onDeleteItem={deleteItemHandler} />;
  }
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
