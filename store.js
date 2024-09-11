import { configureStore } from '@reduxjs/toolkit';
import devtoolsEnhancer from 'redux-devtools-expo-dev-plugin';
import expenseReducer from './features/expense/expenseSlice';

const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
  devTools: false,
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(devtoolsEnhancer()),
});

export default store;
