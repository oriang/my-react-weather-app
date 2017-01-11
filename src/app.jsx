var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('./components/Main.jsx');
var Weather = require('./components/Weather.jsx');
var About = require('./components/About.jsx');
var Examples = require('./components/Examples.jsx');

//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Costum CSS
require('style!css!./styles/app.css');

var App = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Route path="about" component={About}/>
          <Route path="examples" component={Examples}/>
          <IndexRoute component={Weather}/>
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
