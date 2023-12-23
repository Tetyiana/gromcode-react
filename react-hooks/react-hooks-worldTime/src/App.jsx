import React, { useState, useEffect } from 'react';
import Clock from "./Clock";

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="clock">
      <button onClick={toggle}>Toggle</button>
      {visible && <Clock location={'NEW YORK'} offset={-5} />}
      {visible && <Clock location={'Kyiv'} offset={2} />}
      {visible && <Clock location={'London'} offset={0} />}
    </div>
  );
};

export default App;