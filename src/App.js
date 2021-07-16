import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import About from './components/About';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import Tutorials from './components/Tutorials';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Switch>
          <Route path="/" exact component={MainSection} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/tutorials" exact component={Tutorials} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
