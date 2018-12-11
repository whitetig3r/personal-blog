import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './containers/Home/Home.js';
import BlogPost from './containers/BlogPost/BlogPost';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact render={()=><Home />} />
          <Route path= {`/post/:id`} exact component={BlogPost}/>
        </div>
      </Router>
    );
  }
}

export default App;
