import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  makeClickHandler: function(entry) {
    return function() {
      this.props.vote(entry);
    }.bind(this);
  },
  render: function()  {
    return (<div className='voting'>
      {this.getPair().map(entry => {
        return (<button key={entry} onClick={this.makeClickHandler(entry)} >
                  <h1>{entry}</h1>
                </button>);
      })}
      </div>)},
})