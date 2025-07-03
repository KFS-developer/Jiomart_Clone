const initialState = {
  searchTerm: '',
};

function reducer (state = initialState, {type, payload}) {
  switch (type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: payload,
      };
    default:
      return state;
  }
};

export default reducer;