import { useGetReviewsByRestaurantIdQuery } from "../../redux/services/api";
import { ReviewContainer } from "../review/container";

export const ReviewList = ({ restaurantId }) => {
  const { data: reviews } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (!reviews) {
    return null;
  }

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewContainer review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
