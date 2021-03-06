import { ActionTypesComics } from './actionsTypes';
import { IComics } from '../../interfaces';

export interface ILoadComics {
  type: ActionTypesComics.LOAD_COMICS;
  payload: string;
}

export interface IGetComics {
  type: ActionTypesComics.GET_COMICS;
  payload: Array<IComics>;
}

export interface IErrorGetComics {
  type: ActionTypesComics.ERROR_GET_COMICS;
  payload: string;
}

export type ComicsAction = ILoadComics | IGetComics | IErrorGetComics;

export const loadComics = (characterId: string): ILoadComics => {
  return {
    type: ActionTypesComics.LOAD_COMICS,
    payload: characterId,
  };
};

export const getComics = (data: Array<IComics>): IGetComics => {
  return {
    type: ActionTypesComics.GET_COMICS,
    payload: data,
  };
};

export const errorGetComics = (error: string): IErrorGetComics => {
  return {
    type: ActionTypesComics.ERROR_GET_COMICS,
    payload: error,
  };
};
