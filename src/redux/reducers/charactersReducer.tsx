const initialState = {
  characters: [],
  loading: false,
  error: null,
};

export const charactersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOAD_CHARACTERS': {
      return {
        ...state,
        characters: [],
        loading: true,
        error: null,
      };
    }

    case 'GET_CHARACTERS': {
      return {
        ...state,
        characters: action.payload.data.data.results,
        loading: false,
        error: null,
      };
    }

    case 'ERROR_GET_CHARACTERS': {
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
