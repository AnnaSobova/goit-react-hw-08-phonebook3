import {createSlice} from '@reduxjs/toolkit';
import contactsOperation from './contactsOperation';

export const contactsSlice = createSlice({
    name:'contacts',
    initialState:{
        items:[],
        isLoad:false,
    },
    extraReducers: {
        [contactsOperation.fetchContacts.pending](state) {
          state.isLoad = true;
        },
        [contactsOperation.fetchContacts.rejected](state) {
          state.isLoad = false;
        },
        [contactsOperation.fetchContacts.fulfilled](state, action) {
          state.items = action.payload;
          state.isLoad = false;
        },
        [contactsOperation.addContact.pending](state) {
          state.isLoad = true;
        },
        [contactsOperation.addContact.rejected](state) {
          state.isLoad = false;
        },
        [contactsOperation.addContact.fulfilled](state, action) {
          state.items = [...state.items, action.payload];
          state.isLoad = false;
        },
        [contactsOperation.deleteContact.pending](state) {
          state.isLoad = true;
        },
        [contactsOperation.deleteContact.rejected](state) {
          state.isLoad = false;
        },
        [contactsOperation.deleteContact.fulfilled](state, action) {
          state.items = state.items.filter(item => item.id !== action.payload);
          state.isLoad = false;
        },
      },
});