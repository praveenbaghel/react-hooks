import React, { useReducer } from "react";
//same as use State but can handle multiple state simoultenously especially if they are dependent on one other.

const reducer = (state, action) => {
    switch (action.type){
        case "INCREAMENT" :{
            return {count: state.count +1, input: state.input}
        }
        case "DECREAMENT" :{
            return {count: state.count -1, input: state.input}
        }
        case "CHANGE":{
            return { count: state.count, input : action.value}
        }
        default: {
            return state
        }
    }
}


const UseReducer = () => {
// Normal code with useState
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState("Change will be here");

//same code using reducer

const [state, dispatch] = useReducer(reducer, {
    count: 0,
    input: "change will be here",
})

  const handleChange = (event) => dispatch({value: event.target.value,type:"CHANGE"});
  return (
    <div className="state">
      <h3>useReducer</h3>
      <input
        type="text"
        placeholder="Start writing here........."
        onChange={handleChange}
      />
      <p>{state.input}</p>
      <button onClick={() => dispatch({type:"INCREAMENT"})}>Increase</button>
      <p>{state.count}</p>
    <button onClick={() => dispatch({type:"DECREAMENT"})}>Decrease</button>
    </div>
  );
};

export default UseReducer;
