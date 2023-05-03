import React, { useLayoutEffect, useRef, useState } from "react";
import "./App.css";

const Home = () => {
  const [search, setsearch] = useState("hello");

  const [meaning, setMeaning] = useState([]);
  const [count, setCount] = useState(0);

  const inputval = useRef(null);
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;

  useLayoutEffect(() => {
    const fetchData = async () => {
      const req = await fetch(url);
      const data = await req.json();
      //   console.log(data[0].meanings[1]?.definitions[0].definition);
      setMeaning([...data]);
    };
    fetchData();
  }, [search]);

  const findMeaning = () => {
    setsearch(inputval.current.value);
    inputval.current.value = "";
    inputval.current.focus();
  };
  return (
    <div className="home">
      <h3>Welcome</h3>
      <h5>
        This are the basic use cases of some React-hooks, you can go through the
        code for more Reading
      </h5>
      <div className="dictionary">
        <span> Hey, you can also use Dictionary if you want to</span>
        <input type="text" ref={inputval}></input>
        <button onClick={findMeaning}>Find Meaning</button>
        <h4>{meaning[0]?.meanings[1]?.definitions[0].definition}</h4>
        <button onClick={() => setCount((curr) => curr + 1)}>
          Cliked: {count} Times
        </button>
        <h4>{meaning[0]?.meanings.length}</h4>
      </div>
    </div>
  );
};

export default Home;
