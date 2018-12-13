import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './containers/Home/Home.js';
import About from './containers/About/About';
import BlogPost from './containers/BlogPost/BlogPost';
import ScrollToTop from './ScrollToTop';

import './App.scss';


class App extends Component {
  render() {
    return (
        <Router>
          <ScrollToTop>
            <Route render = { ( { location } ) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch>
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/about" exact render={() => <About />} />
                    <Route path={`/post/:id`} exact component={BlogPost} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </ScrollToTop>
        </Router>
    );
  }
}

export default App;
