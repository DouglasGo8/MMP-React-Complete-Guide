import { useState } from "react";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

import useHttp from "../../hooks/use-http";

/**
 * @author dougdb
 * @returns
 */
const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTask } = useHttp();

  const enterTaskHandler = async (taskText) => {
    sendTask(
      {
        // {YOUR_FIREBASE_URL_HERE}
        url: "",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { text: taskText },
      },
      (data) => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };
        props.onAddTask(createdTask);
      }
    );
  };

  return (
    <Section>
      <TaskForm loading={isLoading} onEnterTask={enterTaskHandler} />
      {error && <p>{error}</p>}
    </Section>
  );
};
export default NewTask;
