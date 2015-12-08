var React = require('react'),
    Clock = require('./clock_widget.jsx'),
    Weather = require('./weather_widget.jsx'),
    Tabs = require('./tabs.jsx');

var Widget = React.createClass({
  getInitialState: function(){
    return { searchString: "" };
  },

  handleChange: function(event){
    this.setState({searchString: event.currentTarget.value});
  },

  handleClick: function(event){
    this.setState({searchString: event.currentTarget.innerText});
  },

  filteredUsers: function(){
    var regex = new RegExp(this.state.searchString);
    return this.props.users.filter(function(user){
      return (user.name.search(regex) > -1);
    });
  },

  render: function(){
    var that = this;
    return(
      <div>
        <Tabs tabs={this.props.tabs}/>
        <input type="text"
               onChange = {this.handleChange}
               value={this.state.searchString}>
        </input>

        <ul>{
            this.filteredUsers().map(function(user){
              return <li key={user.id}
                         onClick={that.handleClick}>{user.name}</li>;
            })
          }
        </ul>
        <Clock />
        <Weather />
      </div>
    );
  }
});

module.exports = Widget;
