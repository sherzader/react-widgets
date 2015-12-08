var React = require('react'),
    Clock = require('./clock_widget.jsx'),
    Weather = require('./weather_widget.jsx'),
    Tabs = require('./tabs.jsx'),
    User = require('./user_widget.jsx');

var Widget = React.createClass({
  render: function(){
    return(
      <div>
        <Tabs tabs={this.props.tabs} />
        <User users={this.props.users} />
        <Clock />
        <Weather />
      </div>
    );
  }
});

module.exports = Widget;
