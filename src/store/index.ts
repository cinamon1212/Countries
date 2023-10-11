import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';

const store = configureStore({
	reducer: {
		countries: countriesReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
