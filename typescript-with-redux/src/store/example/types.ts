export const ADD_DOGS = 'ADD_DOGS';

export interface DogBreed {
  id: number;
  name: string;
}
export interface DogState {
  list: Array<DogBreed>;
}

export interface AddDogAction {
  type: typeof ADD_DOGS;
  payload: Array<DogBreed>;
}


/**
 * NOTE: If other actions are added then below statement shall be :
 * 
 * export type DogActionTypes = AddDogAction | DeleteDogAction
 */
export type DogActionTypes = AddDogAction;
