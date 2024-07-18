import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review";
import { Review } from "./component";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  if (!review) {
    return null;
  }

  const { userId, rating, text } = review;

  return <Review userId={userId} rating={rating} text={text} />;
};
