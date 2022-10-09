export const selectContactsArr = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilter = state => state.contacts.filter;
export const selectError = state => state.contacts.error;
export const selectToken = state => state.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;