import { useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import User from "../User/User";

const List = () => {
  const { users, loadUsers } = useUsers();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <>
      <h2>All users:</h2>
      <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            image={user.image}
            bio={user.bio}
            age={user.age}
          />
        ))}
      </ul>
    </>
  );
};

export default List;
