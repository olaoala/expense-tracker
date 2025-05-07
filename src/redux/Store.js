import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authslices';
import transactionReducer from './slices/transactionslice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
  },
});


