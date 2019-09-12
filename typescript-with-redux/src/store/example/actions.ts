import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ReduxState } from '../rootReducer';
import Axios, { AxiosResponse } from 'axios';

import { ADD_DOGS, DogBreed, AddDogAction } from './types';
import { Dispatch } from 'react';

/**
 * ActionCreator.
 * @param {Array<DogBreed>} listOfDogBreeds - List of Dog breeds.
 * @return {AddDogAction} action to dispatch ADD_DOGS action.
 */
export function addDogs(listOfDogBreeds: Array<DogBreed>): AddDogAction {
  return {
    type: ADD_DOGS,
    payload: listOfDogBreeds
  };
}

/**
 * Download a list of dog breeds.
 * @return {ThunkAction} thunkAction consist of dispatch, getstate properties. 
 * @param {Dispatch<AddDogAction>} dispatch - function to dispatch actions
 * @returns {void}
 */
export const fetchDogBreed = (): ThunkAction<void, ReduxState, null, Action<string>> => (
  dispatch: Dispatch<AddDogAction>
): Promise<void> => {
  return Axios.get('https://api.thedogapi.com/v1/breeds?limit=10&page=0')
    .then(function (response: AxiosResponse) {
      dispatch(addDogs(response.data));
    })
};
