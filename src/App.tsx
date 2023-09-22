import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { mainrouter } from './Router/Mainrouter';


function App() {
  return (
    <div>
      <RouterProvider router = {mainrouter}/>
    </div>
  );
}

export default App;
