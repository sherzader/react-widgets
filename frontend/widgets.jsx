var React = require('react'),
    Clock = require('./clock_widget.jsx'),
    Weather = require('./weather_widget.jsx');

var Widget = React.createClass({
  getInitialState: function(){
    return { searchString: "" };
  },

  search: function(event){
    this.setState({searchString: event.currentTarget.value});
  },

  filteredUsers: function(){
    var regex = new RegExp(this.state.searchString);
    return this.props.users.filter(function(user){
      return (user.name.search(regex) > -1);
    });
  },

  render: function(){
    return(
      <div>
        <input type="text"
               onChange = {this.search}
               value={this.state.searchString}>
        </input>

        <ul>{
            this.filteredUsers().map(function(user){
              return <li key={user.id}>{user.name}</li>;
            })
          }
        </ul>
        < Clock />
        < Weather />
      </div>
    );
  }
});

module.exports = Widget;
