import { ComicsAction } from '../actions/comicsActions';
import { IComics } from '../../interfaces';
import { ActionTypesComics } from '../actions/actionsTypes';

export interface IComicsState {
  comics: Array<IComics>;
  loading: boolean;
  error: null | string;
}

const initialState = {
  comics: [],
  loading: false,
  error: null,
};

export const comicsReducer = (state: IComicsState = initialState, action: ComicsAction): IComicsState => {
  switch (action.type) {
    case ActionTypesComics.LOAD_COMICS: {
      return {
        ...state,
        comics: [],
        loading: true,
        error: null,
      };
    }

    case ActionTypesComics.GET_COMICS: {
      return {
        ...state,
        comics: action.payload,
        loading: false,
        error: null,
      };
    }

    case ActionTypesComics.ERROR_GET_COMICS: {
      return {
        ...state,
        comics: [],
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
