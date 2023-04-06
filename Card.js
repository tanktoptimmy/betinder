import {Image, Text, View, StyleSheet } from 'react-native';

const Card = ({ card }) => (
  <View style={styles.card}>
    <Image source={card.image} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{card.name}</Text>
  </View>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});