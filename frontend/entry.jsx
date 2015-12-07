var React = require('react'),
    ReactDOM = require('react-dom'),
    Widget = require('./widgets.jsx');

var users = [ {name: "nancy", id: 1 },
              {name: "frank", id: 2 },
              {name: "narcy", id: 3},
              {name: "francis", id: 4}
            ];
var tabs = [  {title: "Home", content: "Hi User!", id: 1},
              {title: "Trees", content: "Redwood, Pine, Douglas Fir", id: 2},
              {title: "Cacti", content: "Pereskioideae, Cactoideae", id: 3}
            ];
document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <Widget users={users} tabs={tabs}/>,
    document.getElementById('root')
  );
});
