import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';


import Voting from '../../src/components/voting';

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
});