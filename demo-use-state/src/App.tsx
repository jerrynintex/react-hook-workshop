import React, { useState, useEffect } from "react";
import "./App.css";

const getName = () : string => {
  console.log('initial state');
  return window.localStorage.getItem('name') || '';
}

export const App: React.FC = () => {
  const [name, setName] = useState(() => getName());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  console.log('render...')

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

export default App;
