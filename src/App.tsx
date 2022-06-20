import React from 'react';
import Category from './components/Category';
import AllPages from './pages/AllPages';
import { BrowserRouter } from 'react-router-dom';

interface AppProps{}

const App: React.FC<AppProps> = () => { 
  return (
    <div>
      <BrowserRouter>
        <Category />
        <AllPages />
      </BrowserRouter>
    </div>
  );
}

export default App;
