import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require('axios').default;
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (values, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", values);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${id}`);
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)


export const signupUser = createAsyncThunk(
    'users/login',
    async (user, thunkAPI) => {
        try {
            const response = await axios.post(`/users/login`, {
                name: user.name,
                email: user.name,
                password: user.password,
            });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)








