import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './slices/historySlice';
import levelsReducer from './slices/levelsSlice';

export const store = configureStore({
    reducer: {
        history: historyReducer,
        levels: levelsReducer,
    },
});
