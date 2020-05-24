const INITIAL_STATE = {
  searchBarInput: '',
  userIsSearching: false,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_USER_SB_INPUT': {
      return { ...state, searchBarInput: action.payload };
    }
    case 'USER_IS_SEARCHING': {
      return { ...state, userIsSearching: action.payload };
    }
    default:
      return state;
  }
}
