import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>React-Redux course</h1>
        <p>React, redux demo app in ES6.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;