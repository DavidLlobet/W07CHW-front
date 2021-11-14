import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersThunk } from "../redux/thunks/userThunk";

const useUsers = () => {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  const loadUsers = useCallback(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  return { users, dispatch, loadUsers };
};

export default useUsers;
