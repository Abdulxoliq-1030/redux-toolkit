import React from "react";
import {} from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter";

function App() {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  console.log(counter);

  return (
    <div>
      <h1>Abdulxoliq {counter.data}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
