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
      const { email, password } = action.payload;
      const stored = JSON.parse(localStorage.getItem('registeredUser'));

      if (stored?.email === email && stored?.password === password) {
        state.isLoggedIn = true;
        state.user = { email, password };
        localStorage.setItem('user', JSON.stringify({ email, password }));
        console.log('logged on as:', stored);

      } else {
        alert('Invalid credentials');
      }
    },
    register: (state, action) => {
      const { email, password } = action.payload;
      const user = { email, password };
      localStorage.setItem('registeredUser', JSON.stringify(user));
        console.log('Registered user stored:', user);

      state.isLoggedIn = false;
      state.user = { email };
      localStorage.setItem('user', JSON.stringify({ email }));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('user');
    },
    setCalculation(state, action) {
      state.income = action.payload.income;
      state.goal = action.payload.goal;
      state.isCalculated = true;
    },
  },
});

export const { login, logout,register,setCalculation } = authSlice.actions;
export default authSlice.reducer;
