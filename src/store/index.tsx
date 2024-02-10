import { combineReducers, configureStore } from '@reduxjs/toolkit';
import DataConfigSlice from './DataConfigSlice';

const rootReducer = combineReducers({
  dataConfig: DataConfigSlice,
});

export default configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
