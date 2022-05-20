import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatComponent from './src/components/CatComponent'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text> 
      <CatComponent nombre="garfield" raza="albino" foto="https://reactnative.dev/docs/assets/p_cat1.png"></CatComponent>
      <CatComponent nombre="garfield1" raza="albino1" foto="https://reactnative.dev/docs/assets/p_cat2.png"></CatComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
