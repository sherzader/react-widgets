var React = require('react'),
    ReactDOM = require('react-dom'),
    Widget = require('./widgets.jsx');
    
var users = [ {name: "nancy", id: 0 },
              {name: "frank", id: 1 },
              {name: "narcy", id: 2},
              {name: "francis", id: 3}
            ];
var tabs = [  {title: "Home", content: "Hi User!", id: 0},
              {title: "Trees", content: "Redwood, Pine, Douglas Fir", id: 1},
              {title: "Cacti", content: "Pereskioideae, Cactoideae", id: 2}
            ];
document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <Widget users={users} tabs={tabs}/>,
    document.getElementById('root')
  );
});
