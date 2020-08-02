import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import BlankPage from "./BlankPage";

enum routeEnum { CounterPage, BlankPage }

export const App: React.FC = () => {
  const [route, setRoute] = useState<routeEnum>(routeEnum.CounterPage);

  return (
    <div>
      <div>
        <span><a href="#" onClick={() => setRoute(routeEnum.CounterPage)}>Counter</a></span>
        <span>{"  |  "}</span>
        <span><a href="#" onClick={() => setRoute(routeEnum.BlankPage)}>BlankPage</a></span>
      </div>
      <div>
        {
          route === routeEnum.CounterPage
            ? <Counter />
            : <BlankPage />
        }
      </div>
    </div>
  )

}

export default App;
