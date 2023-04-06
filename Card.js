const Card = ({ card }) => (
  <View style={styles.card}>
    <Image source={card.image} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{card.name}</Text>
  </View>
);

export default Card;