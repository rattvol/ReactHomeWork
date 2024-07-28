import { useGetReviewsByRestaurantIdQuery } from "../../redux/services/api";
import { ReviewContainer } from "../review/container";
import { ReviewForm } from "../reviewForm/reviewForm";
import { useParams } from "react-router-dom";
import { useCreateReviewMutation } from "../../redux/services/api";

export const ReviewList = () => {
  const { restaurantId } = useParams();

  const { data: reviews } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const [onCreateReview, { isLoading: isReviewUploading }] =
    useCreateReviewMutation();

  if (!reviews) {
    return null;
  }

  return (
    <div>
      <h3>REVIEWS</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewContainer review={review} />
          </li>
        ))}
      </ul>
      <ReviewForm
        onCreateReview={(review) => onCreateReview({ review, restaurantId })}
        isReviewUploading={isReviewUploading}
      />
    </div>
  );
};
