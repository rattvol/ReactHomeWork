import { DishList } from "../dish-list/component";
import { ReviewList } from "../review-list/component";
import { ReviewForm } from "../reviewForm/reviewForm";

export const Restaurant = ({ name, dishIds, reviewIds }) => {
  return (
    <div>
      <h2>
        Restaurant: <i>{name}</i>
      </h2>
      <h3>MENU</h3>
      <DishList dishIds={dishIds} />
      <h3>REVIEWS</h3>
      <ReviewList reviewIds={reviewIds} />
      <ReviewForm />
      <hr></hr>
    </div>
  );
};
