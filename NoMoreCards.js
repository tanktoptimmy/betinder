import { Text, View, StyleSheet } from 'react-native';
const NoMoreCards = () => (
  <View style={styles.noMoreCards}>
    <Text>No more cards</Text>
  </View>
);

export default NoMoreCards;

const styles = StyleSheet.create({
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});