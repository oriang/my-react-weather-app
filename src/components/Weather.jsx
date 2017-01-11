var React = require('react');

var WeatherForm = require('./WeatherForm.jsx');
var WeatherMessage = require('./WeatherMessage.jsx');

var openWeatherMap = require('../../api/openWeatherMap.jsx');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false});
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center callout">Loading...</h3>
      }else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}  className="text-center"/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
