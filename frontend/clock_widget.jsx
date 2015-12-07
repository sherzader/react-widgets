var React = require('react');

var Clock = React.createClass({
  getInitialState: function(){
    return { date: new Date()};
  },
  componentDidMount: function(){
    this.id = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function(){
    // this.id
  },
  tick: function(){
    this.setState({ date: new Date() });
  },
  render: function(){
    return(
      <div>
        { this.state.date.toString()}
      </div>
    );
  }
});

module.exports = Clock;
