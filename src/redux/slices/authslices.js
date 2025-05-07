import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    setCalculation(state, action) {
      state.income = action.payload.income;
      state.goal = action.payload.goal;
      state.isCalculated = true;
    },
  },
});

export const { login, logout,setCalculation } = authSlice.actions;
export default authSlice.reducer;
