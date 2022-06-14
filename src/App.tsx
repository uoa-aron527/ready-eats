import React from 'react';
import Homepage from './pages/Homepage';

interface AppProps{}

const App: React.FC<AppProps> = () => { 
  return (
    <div>
      Ready Eats is developing
      <Homepage />
    </div>
  );
}

export default App;
