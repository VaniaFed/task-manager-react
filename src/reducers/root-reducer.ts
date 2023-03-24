import { combineReducers } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks-reducer';

export const rootReducer = combineReducers({ tasks: tasksReducer });
