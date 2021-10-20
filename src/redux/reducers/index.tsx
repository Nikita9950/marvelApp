import { combineReducers } from 'redux';
import { charactersReducer, ICharacterState } from './charactersReducer';
import { comicsReducer, IComicsState } from './comicsReducer';

export interface IRootState {
  charactersReducer: ICharacterState;
  comicsReducer: IComicsState;
}

export const rootReducer = combineReducers({
  charactersReducer,
  comicsReducer,
});
