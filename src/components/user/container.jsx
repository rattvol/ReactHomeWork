import { useSelector, useDispatch } from "react-redux";
import { selectUserById } from "../../redux/entities/user/user";
import { User } from "./component";
import { useEffect } from "react";
import { getUsers } from "../../redux/entities/user/get-users";

export const UserContainer = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (!user) {
    return null;
  }

  return <User userName={user.name} />;
};
