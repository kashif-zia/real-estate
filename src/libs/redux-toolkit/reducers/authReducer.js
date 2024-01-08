import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  loggedIn: false,
  authRole: '',
  id: '',
  email: '',
  role: '',
  phone_number: '',
  gender: '',
  birthday: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  bio: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      return (state = { ...state, ...action.payload });
      // state.id = action.payload.id;
      // state.role = action.payload.role;
      // state.name = action.payload.name;
      // state.first_name = action.payload.first_name;
      // state.last_name = action.payload.last_name;
      // state.loggedIn = action.payload.loggedIn;
      // state.authRole = action.payload.authRole;
      // state.address = action.payload.address;
      // state.phone_number = action.payload.phone_number;
      // state.city = action.payload.city;
      // state.state = action.payload.state;
      // state.email = action.payload.email;
      // state.birthday = action.payload.birthday;
    },
  },
});

export const { setAuthUser } = authSlice.actions;
export default authSlice.reducer;
