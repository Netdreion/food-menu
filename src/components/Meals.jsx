import { useGlobalContext } from "../context";
import { IoThumbsUpSharp } from "react-icons/io5";

const Meals = () => {
  const { loading, meals, selectMeal } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (meals.length < 1) {
    return (
      <section>
        <h4> no meals matched your search term, please try again.</h4>
      </section>
    );
  }

  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
        return (
          <article key={idMeal} className="single-meal">
            <img
              src={image}
              alt="food-img"
              className="img"
              onClick={() => selectMeal(idMeal)}
            />
            <h5 className="">{title}</h5>
            <button className="like-btn">
              {" "}
              <IoThumbsUpSharp />{" "}
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
