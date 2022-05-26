import { useEffect } from "react";

const useCreateUser = (url) => {
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
};
