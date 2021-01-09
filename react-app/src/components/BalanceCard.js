import React, { useEffect, useState } from "react";
import axios from "axios";

function Story() {
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "http://127.0.0.1:5000/api/savings_account/"
      );
      setBalance(data);
    })();
    console.log("hi");
  }, [story]);

  console.log(story);

  return <h1>test</h1>;
}

export default Story;
