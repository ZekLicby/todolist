import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as StatusBarComponent } from './components/statusBar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TaskList } from './components/taskList';
import { useState } from 'react';

export default function App() {

  const [inputValue, setInputValue] = useState("")
  const [taskList, setTaskList] = useState([])

  const handleInputValueChange = (text) => {
    setInputValue(text);
  }

  const handleClick = () => {
    setTaskList([...taskList, inputValue]);
    setInputValue('');
  }

  return (
    <SafeAreaView style={{flex: 1,}}>
      <View style={styles.container}>
      <StatusBar style='dark' />
        <View style={styles.taskContainer}>
          <View style={styles.taskContainer}>
            <TextInput style={styles.input} value={inputValue} placeholder="Insira aqui uma task" placeholderTextColor="#000000" onChangeText={handleInputValueChange} />
            <TouchableOpacity style={styles.button}><Button title="Adicionar" onPress={handleClick} /></TouchableOpacity>
          </View>
        </View>
          <TaskList taskList={taskList} />
        <View style={styles.statusContainer}>
          <StatusBarComponent taskQuantity={taskList?.length}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  
  taskContainer: {
    padding: 5,
    flexDirection: 'row',
    gap: 5,
  },
  button:{
    height: 50,
    justifyContent: 'flex-start',
  },
  input:{
    width: "70%",
    height: 25,
    backgroundColor: "#eee",
    justifyContent: 'flex-end',
  },
  statusContainer: {
    flex: 6,
    flexDirection: "column-reverse",
  }
});
