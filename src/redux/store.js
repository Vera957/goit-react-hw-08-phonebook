import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from 'redux/operations';
import { authReducer } from '../redux/auth/slice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null,
        },
        filter: "",
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
        extraReducers: {
            [fetchContacts.pending](state) {
                state.contacts.isLoading = true;
            },
            [fetchContacts.fulfilled](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = false;
                state.contacts.items = action.payload;
            },
            [fetchContacts.rejected](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            },
            [addContact.pending](state) {
                state.contacts.isLoading = true;
            },
            [addContact.fulfilled](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = false;
                state.contacts.items.push(action.payload);
            },
            [addContact.rejected](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            },
            [deleteContact.pending](state) {
                state.contacts.isLoading = true;
            },
            [deleteContact.fulfilled](state, action) {
                console.log(action.arg)
                state.contacts.isLoading = false;
                state.contacts.error = false;
                const index = state.contacts.items.findIndex(e => e.id === action.meta.arg);
                state.contacts.items.splice(index, 1);
            },
            [deleteContact.rejected](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            },
        },
    },
);

export const { setFilter } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};


export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }), 
});

export const persistor = persistStore(store)











