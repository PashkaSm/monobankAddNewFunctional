import date from "../../data/date.json"
import CardItem from "./CardItem";
function CardList() {

  return (
    <>
      {/* Із обєкта cardDate через метод map() проходимося по масиву карточок і передаємо у компоненту 
        cardItem наступні значення
        key - айдішник карточки
        item - дані про карточку
      */}
      {date.cardData.map((item) => (<CardItem key={item.id} cardDate={item} />))}
    </>
  );
}

export default CardList;
