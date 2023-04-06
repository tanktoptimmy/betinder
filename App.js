import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cards from "./Cards";
export default function App() {

  const data = [
    { id: 1, name: 'Card 1', image: require('./images/argentina_vxnisn.png') },
    { id: 2, name: 'Card 2', image: require('./images/belgium_zxnh0r.png') },
    { id: 3, name: 'Card 3', image: require('./images/stevenage_kim6as.png') },
    // Add as many cards as you want here...
  ];
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! BOOM</Text>
      <Cards data={data}/>
      <StatusBar style="auto" />
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
