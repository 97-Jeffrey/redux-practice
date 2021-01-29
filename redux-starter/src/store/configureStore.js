import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import error from './middleware/error';
import api from './middleware/api';
// import func from './middleware/func';

export default function (){
  return configureStore({
    reducer,
    middleware:[ 
      ...getDefaultMiddleware(),
      logger({destination:'console'}),
      error,
      api
   ]
  });
};