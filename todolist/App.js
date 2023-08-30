import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as StatusBarComponent } from './components/statusBar';
import { StyleSheet, Text, View } from 'react-native';
import { TaskList } from './components/taskList';
import { useState } from 'react';
import { AddTask } from './components/addTask';

export default function App() {

  const [taskList, setTaskList] = useState([])

  return (
    <SafeAreaView style={{flex: 1,}}>
      <View style={styles.container}>
      <StatusBar style='dark' />
        <View style={styles.taskContainer}>
          <AddTask/>
          <TaskList taskList={taskList} />
        </View>
        
        <StatusBarComponent taskQuantity={5}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  taskContainer: {
    padding: 5,
  }
});
