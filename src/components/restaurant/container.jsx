import { Restaurant } from "./component";
import {
  useCreateReviewMutation,
  useGetRestaurantByIdQuery,
} from "../../redux/services/api";

export const RestaurantContainer = ({ id }) => {
  const {
    data: restaurant,
    isLoading,
    isFetching,
  } = useGetRestaurantByIdQuery(id);

  const [onCreateReview, { isLoading: isReviewUploading }] =
    useCreateReviewMutation();

  if (isLoading || isFetching) return "loading";

  if (!restaurant) {
    return null;
  }

  const { id: restaurantId, name } = restaurant;

  return (
    <Restaurant
      restaurantId={restaurantId}
      name={name}
      onCreateReview={(review) => onCreateReview({ review, restaurantId })}
      isReviewUploading={isReviewUploading}
    />
  );
};
