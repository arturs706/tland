import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import Home from '../pages/Home';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const App: Component = () => {
  return (
    <div class='maindiv'>
    <Nav />
    <Routes>
      <Route path={"/"} component={Home} />
    </Routes>
    <Footer />
    </div>
  );
};

export default App;
