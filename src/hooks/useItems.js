import { useEffect } from "react";
import { useState } from "react";

const useItems = (url) => {
  const [data, getData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => getData(data));
  }, []);

  return [data, getData];
};

export default useItems;
