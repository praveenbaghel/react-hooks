import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [quote, setQuote] = useState({});
  const [gen, setGen] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("https://api.gameofthronesquotes.xyz/v1/random");
      const data = await req.json();
      setQuote({ ...data });
    };
    fetchData();
  }, [gen]);
  return (
    <div>
      <h3>useEffect</h3>
      <h2>{quote.sentence}</h2>
      <p>{quote.character?.name}</p>
      <button onClick={() => setGen(!gen)}>Generator</button>
    </div>
  );
};

export default UseEffect;
