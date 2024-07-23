import { DishList } from "../dish-list/component";
import { ReviewList } from "../review-list/component";
import { ReviewForm } from "../reviewForm/reviewForm";

export const Restaurant = ({
  restaurantId,
  name,
  onCreateReview,
  isReviewUploading,
}) => {
  return (
    <div>
      <h2>
        Restaurant: <i>{name}</i>
      </h2>
      <h3>MENU</h3>
      <DishList restaurantId={restaurantId} />
      <h3>REVIEWS</h3>
      <ReviewList restaurantId={restaurantId} />
      <ReviewForm
        onCreateReview={onCreateReview}
        isReviewUploading={isReviewUploading}
      />
      <hr></hr>
    </div>
  );
};
