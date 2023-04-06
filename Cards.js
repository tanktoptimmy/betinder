import SwipeCards from 'react-native-swipe-cards';
import Card from "./Card";
import NoMoreCards from './NoMoreCards';

const Cards = ({data}) => (
  <SwipeCards
    cards={data}
    renderCard={(cardData) => <Card card={cardData} />}
    renderNoMoreCards={() => <NoMoreCards />}
  />
);

export default Cards;