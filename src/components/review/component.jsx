import { UserContainer } from "../user/container";

export const Review = ({ userId, rating, text }) => {
  return (
    <div>
      <b>
        <UserContainer userId={userId} /> ({rating}):{" "}
      </b>
      {text}
    </div>
  );
};
