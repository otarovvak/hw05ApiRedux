import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./feature/apiSlicer"; // Make sure this path is correct
import { useEffect } from "react";

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error in loading users...</div>;
  }

  console.log(data);

  return (
    <div>
      {data &&
        data.map((userData) => (
          <div key={userData.id}>
            <h2>{userData.name}</h2> <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Website: {userData.website}</p>
            <address>
              Address: {userData.address.street}, {userData.address.suite},
              {userData.address.city}, {userData.address.zipcode}
            </address>
            <p>Company: {userData.company.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Users;
