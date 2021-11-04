import { ICharacter } from '../../interfaces';
import { ActionTypesCharacters } from '../actions/actionsTypes';

export interface ILoadCharacters {
  type: ActionTypesCharacters.LOAD_CHARACTERS;
  payload: {
    currentPage: number;
    characterQueryName: string | undefined;
  };
}

export interface IGetCharacters {
  type: ActionTypesCharacters.GET_CHARACTERS;
  payload: {
    characters: Array<ICharacter>;
    totalCharacter: number;
  };
}

export interface IErrorGetCharacters {
  type: ActionTypesCharacters.ERROR_GET_CHARACTERS;
  payload: string;
}

interface IGetCharactersData {
  count: number;
  limit: number;
  offset: number;
  results: Array<ICharacter>;
  total: number;
}

export type CharactersAction = ILoadCharacters | IGetCharacters | IErrorGetCharacters;

export const loadCharacters = (currentPage: number, characterQueryName?: string | undefined): ILoadCharacters => {
  return {
    type: ActionTypesCharacters.LOAD_CHARACTERS,
    payload: {
      currentPage: currentPage,
      characterQueryName: characterQueryName,
    },
  };
};

export const getCharacters = (data: IGetCharactersData): IGetCharacters => {
  return {
    type: ActionTypesCharacters.GET_CHARACTERS,
    payload: {
      characters: data.results,
      totalCharacter: data.total,
    },
  };
};

export const errorGetCharacters = (error: string): IErrorGetCharacters => {
  return {
    type: ActionTypesCharacters.ERROR_GET_CHARACTERS,
    payload: error,
  };
};
