var React = require('react'),
    ReactDOM = require('react-dom'),
    Widget = require('./widgets.jsx');

var users = [ {name: "nancy", id: 1 },
              {name: "frank", id: 2 },
              {name: "narcy", id: 3},
              {name: "francis", id: 4}
            ];
document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Widget users={users}/>, document.getElementById('root'));
});
