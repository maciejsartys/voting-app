import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref={(ref) => this.refWinner = ref} winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});