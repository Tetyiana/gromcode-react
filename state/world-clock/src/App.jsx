import React from 'react';
import Clock from "./Clock";


const App = () => {
  return (
  <>
      <Clock location={'NEW YORK'} start={-5} /> 
      <Clock location={'KYIV'} start={+2} /> 
      <Clock location={'LONDON'} start={0} /> 
  </>
   
  );
};

export default App;