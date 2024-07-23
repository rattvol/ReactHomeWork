import { Review } from "./component";

export const ReviewContainer = ({ review }) => {
  const { userId, rating, text } = review;

  return <Review userId={userId} rating={rating} text={text} />;
};
