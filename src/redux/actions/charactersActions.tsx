import { LOAD_CHARACTERS, GET_CHARACTERS, ERROR_GET_CHARACTERS } from './actionsTypes';

export const loadCharacters = (characterQueryName: any) => {
  return {
    type: LOAD_CHARACTERS,
    payload: characterQueryName,
  };
};

export const getCharacters = (data: any) => {
  return {
    type: GET_CHARACTERS,
    payload: data,
  };
};

export const errorGetCharacters = (error: any) => {
  return {
    type: ERROR_GET_CHARACTERS,
    payload: error.message,
  };
};
