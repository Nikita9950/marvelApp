const initialState = {
  comics: [],
  loading: false,
  error: null,
};

export const comicsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOAD_COMICS': {
      return {
        ...state,
        comics: [],
        loading: true,
        error: null,
      };
    }

    case 'GET_COMICS': {
      return {
        ...state,
        comics: action.payload.data.data.results,
        loading: false,
        error: null,
      };
    }

    case 'ERROR_GET_COMICS': {
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
