import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }
    if(data.title !== ''){
      setTasks(oldTasks=> [...oldTasks, data])
    }
  }
  function handleMarkTaskAsDone(id: number){ 
    setTasks(oldTasks => oldTasks.filter(task => {
      
      if(task.id === id ){
        console.log(task)
        if(task.done === false){
          task.done = true
        }else{
          task.done = false
        }
      }
      return [...oldTasks,task]
    }))
  }

  function handleRemoveTask(id: number) {
    setTasks(oldTasks => oldTasks.filter(
      tasks => tasks.id !== id
    ));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}