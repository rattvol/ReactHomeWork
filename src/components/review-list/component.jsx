import { ReviewContainer } from "../review/container";

export const ReviewList = ({ reviewIds }) => {
  if (!reviewIds.length) {
    return null;
  }

  return (
    <div>
      <ul>
        {reviewIds.map((id) => (
          <li key={id}>
            <ReviewContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
