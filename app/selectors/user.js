//TODO in feature use 'reselect' for memoization

export const getLoggedUser = (state) => state.user.get('user');
