import { useSelector, useDispatch } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/review";
import { Review } from "./component";
import { useEffect } from "react";
import { getReviews } from "../../redux/entities/review/get-reviews";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  if (!review) {
    return null;
  }

  const { userId, rating, text } = review;

  return <Review userId={userId} rating={rating} text={text} />;
};
