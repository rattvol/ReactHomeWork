import { Review } from "./component";

export const ReviewContainer = ({ review }) => {
  const { id, userId, rating, text } = review;

  return <Review key={id} userId={userId} rating={rating} text={text} />;
};
