import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  theme:boolean;
}

export function TodoInput({ addTask,theme }: TodoInputProps) {
  const [task, setTask] = useState('');
  function handleAddNewTask() {
    addTask(task)
    setTask("")
  }

  return (
    <View style={[styles.inputContainer,{backgroundColor: theme? '#34313D' : '#F5F4F8' }, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={[styles.input,{backgroundColor: theme? '#34313D' : '#F5F4F8',color:'#A09CB1' }]} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={'#A09CB1'}
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton,{backgroundColor: theme? '#988BC7' : '#3FAD27' }]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});