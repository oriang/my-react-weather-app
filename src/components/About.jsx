var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
      I created this weather web app with 'the complete react web app developer' course,
      you can find that course on udemy.com
      </p>
      <p>Here are some tools i used:</p>
      <ul>
        <li>
          <a href="https://nodejs.org/en/">Node.js</a>
        </li>
        <li>
          <a href="http://expressjs.com/">Express.js</a>
        </li>
        <li>
          <a href="https://facebook.github.io/react/">React.js</a>
        </li>
        <li>
          <a href="https://webpack.github.io/">Webpack</a>
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation</a>
        </li>
        <li>
          <a href="https://openweathermap.org/">Open Weather Map</a>
        </li>
      </ul>
    </div>
  );
};

module.exports = About;


// <div>
//   <h3>About</h3>
//   <p>Welcome to About page</p>
// </div>
