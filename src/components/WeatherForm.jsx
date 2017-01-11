var React = require('react');

var WeatherForm = React.createClass({
  onFromSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div className="text-center">
        <form onSubmit={this.onFromSubmit}>
          <input type="search" ref="location" placeholder="Search weather by city"/>
          <button className="button expanded">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
