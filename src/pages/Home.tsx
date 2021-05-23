import React, { useState } from 'react';
import {TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  const [theme, setTheme] = useState<boolean>(false)
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
    <View style={{backgroundColor:theme? '#191622' : '#ffffff' ,flex:1}} >
      <Header  theme={theme} />
      <TodoInput addTask={handleAddTask} theme={theme}  />
      <TouchableOpacity style={{marginHorizontal: 24,marginVertical:15}} onPress={()=>setTheme(!theme)} >
        <Icon name={theme? 'toggle-switch-outline' : 'toggle-switch-off-outline'} size={50} color={theme? '#FF79C6' : '#3D3D4D'} />
      </TouchableOpacity>
      <MyTasksList 
        theme={theme}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}