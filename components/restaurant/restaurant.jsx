import { Menu } from "./menu";
import { Review } from "./review";
import { ReviewForm } from "../../components/reviewForm/reviewForm";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) return null;
  return (
    <div>
      <h2>
        Restaurant: <i>{restaurant.name}</i>
      </h2>
      <h3>MENU</h3>
      {restaurant.menu?.length ? (
        restaurant.menu.map(({ id, name, price, ingredients }) => (
          <Menu key={id} name={name} price={price} ingredients={ingredients} />
        ))
      ) : (
        <div>-</div>
      )}
      <h3>REVIEWS</h3>
      {restaurant.reviews?.length ? (
        restaurant.reviews.map(({ id, user, rating, text }) => (
          <Review key={id} user={user} rating={rating} text={text} />
        ))
      ) : (
        <div>-</div>
      )}
      <ReviewForm />
      <hr></hr>
    </div>
  );
};
