import { ICharacter } from '../../interfaces';
import { CharactersAction } from '../actions/charactersActions';
import { ActionTypesCharacters } from '../actions/actionsTypes';

export interface ICharacterState {
  characters: Array<ICharacter>;
  loading: boolean;
  error: null | string;
}

const initialState = {
  characters: [],
  loading: false,
  error: null,
};

export const charactersReducer = (state: ICharacterState = initialState, action: CharactersAction): ICharacterState => {
  switch (action.type) {
    case ActionTypesCharacters.LOAD_CHARACTERS: {
      return {
        ...state,
        characters: [],
        loading: true,
        error: null,
      };
    }

    case ActionTypesCharacters.GET_CHARACTERS: {
      return {
        ...state,
        characters: action.payload,
        loading: false,
        error: null,
      };
    }

    case ActionTypesCharacters.ERROR_GET_CHARACTERS: {
      return {
        ...state,
        characters: [],
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
