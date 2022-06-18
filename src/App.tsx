import React from 'react';
import Category from './components/Category';
import AllPages from './pages/AllPages';
import Homepage from './pages/Homepage';

interface AppProps{}

const App: React.FC<AppProps> = () => { 
  return (
    <div>
      <Category />
      <AllPages />
    </div>
  );
}

export default App;
