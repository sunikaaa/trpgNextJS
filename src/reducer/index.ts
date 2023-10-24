import {AnyAction, combineReducers, configureStore, EnhancedStore} from '@reduxjs/toolkit'

// import {characterSheetAdapter, characterSlice} from './old-coc'
import {skillSlice, SkillState} from './skill'
// import {statusAdapter, statusSlice2} from './status'
// import {descriptionSlice,descriptionType} from './description'
// import {itemSlice} from './items'
// import {chainMiddleware} from './middleware'
// import logger from 'redux-logger'
// import storage from 'redux-persist/lib/storage'
// import { persistStore, persistReducer } from 'redux-persist'
// import {createWrapper, HYDRATE} from 'next-redux-wrapper';
// import { useMemo } from 'react'
// import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'


  const rootReducer = combineReducers({
    skill: skillSlice.reducer
  })
  export type RootState = ReturnType<typeof rootReducer>

  