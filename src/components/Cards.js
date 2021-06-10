import ESLCard from "./ESLCard";
import Loader from "./Loader";

const Cards = ({ cards, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <section className="cards">
      {cards.map((item) => (
        <ESLCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Cards;
