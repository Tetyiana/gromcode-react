import React from 'react';
import Clock from "./Clock";


const App = () => {
  return (
  <>
      <Clock location={'NEW YORK'} ofset={-5} /> 
      <Clock location={'KYIV'} ofset={+2} /> 
      <Clock location={'LONDON'} ofset={0} /> 
  </>
   
  );
};

export default App;