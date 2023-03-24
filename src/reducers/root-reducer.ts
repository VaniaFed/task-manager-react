import { filterReducer } from './filter-reducer';
import { combineReducers } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks-reducer';

export const rootReducer = combineReducers({ tasks: tasksReducer, filter: filterReducer });
