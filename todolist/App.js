import { StatusBar } from 'expo-status-bar';
import { StatusBar as StatusBarComponent } from './components/statusBar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>

      </View>
      {/* <StatusBar style="auto" /> */}
      <StatusBarComponent taskQuantity={5}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: flex,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  taskContainer: {
    padding: "5px"
  }
});
