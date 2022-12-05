import React from "react";
import { useEffect } from "react";
import {} from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter";
import { getStudent } from "./redux/student";

function App() {
  const counter = useSelector((store) => store.counter);
  const store = useSelector((store) => store.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudent());
  }, []);

  return (
    <div>
      <h1>Abdulxoliq {counter.data}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement({ a: 5 }))}>Decrement</button>
      {store.student.map((val) => {
        return (
          <h1 key={val.id}>
            {val.id}. {val.name}
          </h1>
        );
      })}
    </div>
  );
}

export default App;
