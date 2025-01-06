import { createSlice, configureStore } from '@reduxjs/toolkit';

const authslice = createSlice({
  name: 'userdata',
  initialState: {
    userdata: null,
    bookdata:{}
  },
  reducers: {
    storedata: (state, action) => {
      state.userdata = action.payload;
    },
    book:(state,action)=>{
      state.bookdata = action.payload
    }
  }
});

const store = configureStore({
  reducer: {
    Reducer: authslice.reducer
  }
});

export const { storedata,book } = authslice.actions;
export default store;
