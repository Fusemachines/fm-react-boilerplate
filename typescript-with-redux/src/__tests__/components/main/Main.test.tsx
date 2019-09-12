import * as React from 'react';
import { Main } from '../../../components/main/Main';
import { shallow } from 'enzyme';

import { createMemoryHistory, createLocation } from 'history';
import { match as Match } from 'react-router';


describe('Component:Main', () => {
    it('loads without crashing', () => {
        /**
         * creating all necessary mock data. For this you could make seperate mock file where all mock data exist.
         */
        const path = `/route/:id`;
        const history = createMemoryHistory();
        const match: Match<{ id: string }> = {
            isExact: false,
            path,
            url: path.replace(':id', '1'),
            params: { id: "1" }
        };
        const location = createLocation(match.url);

        const mockProps = {
            fetchDogBreed: jest.fn(),
            dogs: { list: [] },
            history,
            match,
            location
        }
        expect(shallow(<Main {...mockProps} />).length).toEqual(1);
    })
})
