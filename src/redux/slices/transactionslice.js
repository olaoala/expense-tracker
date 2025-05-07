import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [
    { id: 1, title: 'Salary', amount: 1000 },
    { id: 2, title: 'Groceries', amount: -200 },
  ],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.unshift(action.payload);
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(tx => tx.id !== action.payload);
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
