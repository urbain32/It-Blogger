// import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BlogDetail from './component/content/BlogDetail';
import Create from './component/content/Create';
import Home from './component/content/Home';
import NavBar from './component/layout/NavBar';

function App() {
  return (
    <Router>
      <div className='container'>
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetail/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
