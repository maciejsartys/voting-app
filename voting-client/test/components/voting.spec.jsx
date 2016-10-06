import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
}
from 'react-addons-test-utils';
import {
  expect
}
from 'chai';

import Voting from '../../src/components/Voting';

describe('Voting', () => {
  it('renders a pair  of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={['Trainspotting', '28 days after']} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equals(2);
    expect(buttons[0].textContent).to.equals('Trainspotting');
    expect(buttons[1].textContent).to.equals('28 days after');
  });
  it('invokes callback function when clicked', () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;

    const component = renderIntoDocument(
      <Voting pair={['Trainspotting', '28 days after']} vote={vote} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);
    expect(votedWith).to.equals('Trainspotting');
  });
  it('disables buttons when user has voted', () => {
    const component = renderIntoDocument(
      <Voting pair={['Trainspotting', '28 days after']} hasVoted = 'Trainspotting' />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(2);
    expect(buttons[0].hasAttribute('disabled')).to.equal(true);
    expect(buttons[1].hasAttribute('disabled')).to.equal(true);
  });
  it('adds label to the voted entry', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]}
            hasVoted="Trainspotting" />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons[0].textContent).to.contain('Voted');
  });
  it('renders just the winner when there is one', () => {
    const component = renderIntoDocument(
      <Voting winner="Trainspotting" />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(0);

    const winner = ReactDOM.findDOMNode(component.refWinner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Trainspotting');
  });
});