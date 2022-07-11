import React from 'react';
import Category from './components/Category';
import AllPages from './pages/AllPages';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import { Navbar } from './components/Navbar';
import { Logo } from './components/Logo';
import { GiKnifeFork } from 'react-icons/gi';

interface AppProps{}

const App: React.FC<AppProps> = () => { 
  return (
    <div>
      <BrowserRouter>
        <Navbar>
          <Logo to={'/'}>
            Ready
            <GiKnifeFork />
            Eats
          </Logo>
        </Navbar>
        <Search />
        <Category />
        <AllPages />
      </BrowserRouter>
    </div>
  );
}

export default App;
