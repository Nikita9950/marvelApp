import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';
import { comicsReducer } from './comicsReducer';

export const rootReducer = combineReducers({
  charactersReducer,
  comicsReducer,
});
