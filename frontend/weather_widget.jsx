var React = require('react');

var Weather = React.createClass({
  getInitialState: function(){
    return { weather: ""};
  },
  componentWillUnmount: function(){

  },
  getWeather: function(lat, lon){
    var weather_widget = this;
    var request = new XMLHttpRequest();
    request.open('GET',
      'http://api.openweathermap.org/data/2.5/weather?lat=' +
      lat + '&lon=' + lon + '&APPID=645c5d39c7603f17e23fcaffcea1a3c1',
      true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var resp = JSON.parse(request.responseText);
        console.log(resp);
        weather_widget.setState({weather: resp.main.temp});
      } else {
        // We reached our target server, but it returned an error
        console.log("else");
      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
      console.log("no");
    };

    request.send();
  },
  componentDidMount: function(){
    var weather_widget = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      weather_widget.getWeather(position.coords.latitude, position.coords.longitude);
    });
  },
  render: function(){
    return(
      <div>
        {this.state.weather}
      </div>
    );
  }
});

module.exports = Weather;
