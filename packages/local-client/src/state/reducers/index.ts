/** @format */

import { combineReducers } from 'redux';
import cellsReducer from './cells-reducer';
import bundlesReducer from './bundle-reducer';

const reducers = combineReducers({
  cells: cellsReducer,
  bundles: bundlesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
