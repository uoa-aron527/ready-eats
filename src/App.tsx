import React from 'react';
import AllPages from './pages/AllPages';
import Homepage from './pages/Homepage';

interface AppProps{}

const App: React.FC<AppProps> = () => { 
  return (
    <div>
      Ready Eats is developing
      <AllPages />
    </div>
  );
}

export default App;
