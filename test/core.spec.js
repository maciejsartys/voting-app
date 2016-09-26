import {
    List,
    Map
}
from 'immutable';
import {
    expect
}
from 'chai';

import {
    setEntries,
    next
}
from '../src/core';

describe('appication logic', () => {
    describe('setEntries', () => {
        it('add the entries to the state', () => {
            const state = Map();
            const entries = List.of('Trainspotting', '28 days later');
            const nextState = setEntries(state, entries);

            expect(nextState).to.equal(Map({
                entries: List.of('Trainspotting', '28 days later')
            }));
        });
    });
    describe('next', () => {
        it('takes next two entries under vote', () => {
            const state = Map({
                entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
            });
            const nextState = next(state);
            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Trainspotting', '28 Days Later')
                }),
                entries: List.of('Sunshine')
            }));
        });
    });
});