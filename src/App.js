import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AsyncComponent from './containers/HOCs/AysncComponent';
import Home from './containers/Home/Home';
import ScrollToTop from './ScrollToTop';

import './App.scss';

const BlogPost = AsyncComponent(() => import('./containers/BlogPost/BlogPost')); //CODE SPLITTING \m/


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
