var React = require('react');

var Tabs = React.createClass({
  getInitialState: function(){
    return {focused: 0};
  },
  setFocused: function(index){
    this.setState({focused: index});
  },
  render: function(){
    var self = this;
    return(
      <ul>{
        this.props.tabs.map(function(header, index){
          if (self.state.focused === index){
            return <b key={header.id}>
                    <li onClick={self.setFocused.bind(null, index)}>
                      {header.title}</li>
                  </b>;
          } else {
            return <li key={header.id}
              onClick={self.setFocused.bind(null, index)}>
              {header.title}</li>;
          }
        })
      }
      </ul>
    );
  }
});

module.exports = Tabs;
