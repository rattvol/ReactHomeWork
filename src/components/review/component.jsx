export const Review = ({ userName, rating, text }) => {
  return (
    <div>
      <b>
        {userName} ({rating}):{" "}
      </b>
      {text}
    </div>
  );
};
