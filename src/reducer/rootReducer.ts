import {AnyAction, Reducer, combineReducers, createSlice} from '@reduxjs/toolkit'

import {skillSlice} from './skill'
import { PersistedState, persistReducer } from 'redux-persist';


const isClient = () => typeof window !== "undefined";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();



const persistConfig = {
    key: 'root',
    storage,
    version: 1,
  };
  

  const rootReducer = combineReducers({
    skill: skillSlice.reducer
  })


const persistedReducer = persistReducer(persistConfig, rootReducer)


export default persistedReducer