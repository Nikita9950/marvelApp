import { LOAD_CHARACTERS, GET_CHARACTERS, ERROR_GET_CHARACTERS } from './actionsTypes';
import { ICharacter } from '../../interfaces';

export interface ILoadCharacters {
  type: string;
  payload: string;
}

export interface IGetCharacters {
  type: string;
  payload: any;
}

export interface IErrorGetCharacters {
  type: string;
  payload: string;
}

export type CharactersAction = ILoadCharacters | IGetCharacters | IErrorGetCharacters;

export const loadCharacters = (characterQueryName: string): ILoadCharacters => {
  return {
    type: LOAD_CHARACTERS,
    payload: characterQueryName,
  };
};

export const getCharacters = (characters: Array<ICharacter>): IGetCharacters => {
  return {
    type: GET_CHARACTERS,
    payload: characters,
  };
};

export const errorGetCharacters = (error: string): IErrorGetCharacters => {
  return {
    type: ERROR_GET_CHARACTERS,
    payload: error,
  };
};
