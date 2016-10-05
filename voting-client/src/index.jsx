import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 days after'];

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Voting pair={pair} winner="Trainspotting" />
  ,document.getElementById('app')
  );