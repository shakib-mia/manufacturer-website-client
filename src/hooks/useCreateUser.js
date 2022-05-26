import { useEffect } from "react";

const useCreateUser = (url) => {
  useEffect(() => {
    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: user.user.email,
        name: user.user.displayName,
        password: password,
      }),
    });
  }, []);
};

export default useCreateUser;
