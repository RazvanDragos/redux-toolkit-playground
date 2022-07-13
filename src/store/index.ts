import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../store/counter/index';
import wordsReducer from '../store/words/index'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    words: wordsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
