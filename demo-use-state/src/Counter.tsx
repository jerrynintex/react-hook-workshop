import React, { useEffect, useState, useLayoutEffect } from 'react'

const getInitialCount = () : number => {
    console.log('initial state');
    return 100;
  }
  
  const renderCount = (count: number) => {
    console.log("Inside render");
    return count.toString();
  }

const Counter: React.FC = () => {
    const [count, setCount] = useState(getInitialCount());
  const [reverseCount, setReverseCount] = useState(() => getInitialCount());
  const [neverChangedState, setNeverChangedState] = useState('never changed');

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

  useEffect(() => {
    console.log("useEffect with empty dependency -- Only run when component did mount")
    return () => {
      console.log("useEffect with empty dependency -- only run when component will un-mount")
    }
  }, [])

  useLayoutEffect(() => {
    console.log("useLayoutEffect with count -- Run after each render finished")
    return () => {
      console.log("useLayoutEffect with count -- Run before each useLayoutEffect");
    }
  }, [count])

  useEffect(() => {
    console.log("useEffect with neverChangedState -- Run after each render finished")
    return () => {
      console.log("useEffect with neverChangedState -- Run before each useEffect");
    }
  }, [neverChangedState])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setReverseCount((prevCount: number) => {
      console.log(`setReverseCount count = prevCount(${prevCount}) - 1`);
      return prevCount - 1;
    });
    setCount((prevCount: number) => {
      console.log(`setCount count = prevCount(${prevCount}) + 1`);
      return prevCount + 1;
    });
  };

  console.log('before render...')

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Count: {renderCount(count)}</label>
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

export default Counter
