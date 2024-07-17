import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review";
import { selectUserById } from "../../redux/entities/user";
import { Review } from "./component";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  if (!review) {
    return null;
  }

  const { userId, rating, text } = review;
  const user = useSelector((state) => selectUserById(state, userId));

  return <Review userName={user.name} rating={rating} text={text} />;
};
