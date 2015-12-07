var React = require('react'),
    ReactDOM = require('react-dom'),
    Widget = require('./widgets.jsx');

var users = ["nancy", "frank", "narcy", "francis"];
document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Widget users={users}/>, document.getElementById('root'));
});
