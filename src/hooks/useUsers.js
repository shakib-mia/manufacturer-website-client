import { useEffect, useState } from "react";

const useUsers = (url) => {
  const [users, getUsers] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return [users, getUsers];
};

export default useUsers;
