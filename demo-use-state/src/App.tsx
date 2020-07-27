import React, { useState, useEffect } from "react";
import "./App.css";

const getInitialCount = () : number => {
  console.log('initial state');
  return 100;
}

export const App: React.FC = () => {
  const [count, setCount] = useState(() => getInitialCount());
  const [reverseCount, setReverseCount] = useState(() => getInitialCount());

  useEffect(() => {
    console.log("useEffect with empty dependency -- Only run when component did mount")
    return () => {
      console.log("useEffect with empty dependency -- only run when component will un-mount")
    }
  }, [])

  useEffect(() => {
    console.log("useEffect with count -- Run after each render finished")
    return () => {
      console.log("useEffect with count -- Run before each useEffect");
    }
  }, [count])

  useEffect(() => {
    console.log("useEffect with reverseCount -- Run after each render finished")
    return () => {
      console.log("useEffect with reverseCount -- Run before each useEffect");
    }
  }, [reverseCount])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //setTimeout(() => {
      setReverseCount((prevCount) => {
        console.log(`setReverseCount count = prevCount(${prevCount}) - 1`);
        return prevCount - 1;
      });
    //}, 0.01);
    setCount((prevCount) => {
      console.log(`setCount count = prevCount(${prevCount}) + 1`);
      return prevCount + 1;
    });
  };

  console.log('render...')

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Count: {count}</label>
        </div>
        <div>
          <label htmlFor="name">Reverse Count: {reverseCount}</label>
        </div>
        <div>
          <button type="button" onClick={handleClick}>Increment count</button>
        </div>
      </form>
    </div>
  );
}

export default App;
