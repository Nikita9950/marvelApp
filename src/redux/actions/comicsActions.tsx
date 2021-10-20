import { LOAD_COMICS, GET_COMICS, ERROR_GET_COMICS } from './actionsTypes';
import { IComics } from '../../interfaces';

export interface ILoadComics {
  type: string;
  payload: string;
}

export interface IGetComics {
  type: string;
  payload: any;
}

export interface IErrorGetComics {
  type: string;
  payload: string;
}

export type ComicsAction = ILoadComics | IGetComics | IErrorGetComics;

export const loadComics = (characterId: string): ILoadComics => {
  return {
    type: LOAD_COMICS,
    payload: characterId,
  };
};

export const getComics = (data: Array<IComics>): IGetComics => {
  return {
    type: GET_COMICS,
    payload: data,
  };
};

export const errorGetComics = (error: string): IErrorGetComics => {
  return {
    type: ERROR_GET_COMICS,
    payload: error,
  };
};
