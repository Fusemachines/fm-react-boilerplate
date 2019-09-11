import { DogReducer } from '../../../store/example/reducers';
import { DogState } from '../../../store/example/types';

describe('Reducer: Eaxmple', () => {
    let initialState: DogState;
    beforeEach(() => {
        initialState = {
            list: []
        }
    });

    it('CASE : ADD_DOGS', () => {
        const mockreducer = DogReducer(initialState, {
            type: 'ADD_DOGS',
            payload: [{ id: 1, name: 'woofwoof' }]
        });
        expect(mockreducer).toEqual({
            list: [{ id: 1, name: 'woofwoof' }]
        });
    })
})