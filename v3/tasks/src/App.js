import { Fragment, useCallback, useEffect, useState } from "react";

import "./App.css";

import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

import useHttp from "./hooks/use-http";

/**
 * @author dougdb
 * @returns
 */
const App = () => {
  const [tasks, setTasks] = useState([]);

  

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  useEffect(() => {

    const transfTasks = (taskObj) => {
      const loadedTasks = [];
      //
      for (const taskKey in taskObj)
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
  
      setTasks(loadedTasks);
    };

    fetchTasks({
      // {YOUR_FIREBASE_URL_HERE}
      url: ""},
      transfTasks,
    );
  }, [fetchTasks]);

  return (
    <Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </Fragment>
  );
};

export default App;
