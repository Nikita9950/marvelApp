import { LOAD_COMICS, GET_COMICS, ERROR_GET_COMICS } from './actionsTypes';

export const loadComics = (characterId: string) => {
  return {
    type: LOAD_COMICS,
    payload: characterId,
  };
};

export const getComics = (data: any) => {
  return {
    type: GET_COMICS,
    payload: data,
  };
};

export const errorGetComics = (error: any) => {
  return {
    type: ERROR_GET_COMICS,
    payload: error.message,
  };
};
