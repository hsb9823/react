import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

//clean up function
function Hello() {
  useEffect(() => {
    console.log("SHOW :)");
    return () => console.log("HIDE :(");
  }, []);

  return <h1>Hello</h1>;
}

function Test() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const setShow = () => setShowing((prev) => !prev);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' change.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' change.");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={setShow}>{showing ? "HIDE" : "SHOW"}</button>
      </div>
    </div>
  );
}

export default Test;
