import { User } from "./component";
import { useGetUserByIdQuery } from "../../redux/services/api";

export const UserContainer = ({ userId }) => {
  const { data: user } = useGetUserByIdQuery(userId);

  if (!user) {
    return null;
  }

  return <User userName={user.name} />;
};
