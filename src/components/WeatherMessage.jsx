var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div className="text-center callout">
      <h3>it's {temp} ℃ in {location}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
