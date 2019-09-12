import configureStore from 'redux-mock-store';
/**
 *  A key library here is the redux-mock-store library,
 *  which will help us mock the Redux store but also to test Redux async action creators and middleware. 
 *  We’re initialising as normal, passing any middleware that we need.
 *  We need thunk (so we can return promises as our value in our payload property in our actions) and 
 *  
 */
import thunk from 'redux-thunk';
import axios from 'axios';

import { fetchDogBreed } from '../../../store/example/actions';
import { DogActionTypes } from '../../../store/example/types';

jest.mock('axios');
/**
 * Now, in order to test this method without actually hitting the API (and thus creating slow and fragile tests),
 *  we can use the jest.mock(...) function to automatically mock the axios module.
 */
const middlewares = [thunk]
const mockStore = configureStore(middlewares);


describe('Action:example', () => {
    let store;

    beforeEach(() => {
        store = mockStore();
    });

    it('creates ADD_DOGS when fetching has been done', () => {
        const listOfDogs = [{ name: 'mockdata' }];
        const resp = { data: listOfDogs };
        axios.get.mockResolvedValue(resp);

        const expectedActions = ['ADD_DOGS'];
        const store = mockStore();

        return store.dispatch(fetchDogBreed()).then(() => {
            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map((action: DogActionTypes) => action.type);
            expect(actionTypes).toEqual(expectedActions);
        });
    })
})