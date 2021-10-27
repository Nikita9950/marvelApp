import { ICharacter } from '../../interfaces';
import { ActionTypesCharacters } from '../actions/actionsTypes';

export interface ILoadCharacters {
  type: ActionTypesCharacters.LOAD_CHARACTERS;
  payload: string | any;
}

export interface IGetCharacters {
  type: ActionTypesCharacters.GET_CHARACTERS;
  payload: Array<ICharacter>;
}

export interface IErrorGetCharacters {
  type: ActionTypesCharacters.ERROR_GET_CHARACTERS;
  payload: string;
}

export type CharactersAction = ILoadCharacters | IGetCharacters | IErrorGetCharacters;

export const loadCharacters = (characterQueryName?: string): ILoadCharacters => {
  return {
    type: ActionTypesCharacters.LOAD_CHARACTERS,
    payload: characterQueryName,
  };
};

export const getCharacters = (characters: Array<ICharacter>): IGetCharacters => {
  return {
    type: ActionTypesCharacters.GET_CHARACTERS,
    payload: characters,
  };
};

export const errorGetCharacters = (error: string): IErrorGetCharacters => {
  return {
    type: ActionTypesCharacters.ERROR_GET_CHARACTERS,
    payload: error,
  };
};
