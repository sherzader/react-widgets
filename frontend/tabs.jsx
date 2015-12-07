var React = require('react');

var Tabs = React.createClass({
  getInitialState: function(){
    return {focused: 0};
  },
  selected: function(event){
    this.setState({focused: event.currentTarget.id});
  },
  render: function(){
    var self = this;
    return(
      <ul>{
        this.props.tabs.map(function(header, index){
          var style = '';
          if (self.state.focused === index){
            style = "focused";
            return <b>
                    <li key={header.id} onClick={this.selected}
                    className={style}>{header.title}
                  </li></b>;
          }
          return <li key={header.id} onClick={this.selected}
                  className={style}>{header.title}</li>;
        })
      }
      </ul>
    );
  }
});

module.exports = Tabs;
