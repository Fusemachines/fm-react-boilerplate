import { DogState, ADD_DOGS, DogActionTypes } from './types';

const initialState: DogState = {
  list: []
};
/**
 * Dog reducer.
 * @param {DogState} state 
 * @param {DogActionTypes} action 
 * @return {DogState} dog state after certain action.
 */
export function DogReducer(state = initialState, action: DogActionTypes): DogState {
  switch (action.type) {
    case ADD_DOGS:
      const listOfDogBreeds = action.payload;
      return {
        list: listOfDogBreeds
      };

    default:
      return state;
  }
}
