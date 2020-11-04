/** @format */

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
    user: userReducer,
});

const persistConfig = {
    key: 'eudocia',
    storage: storage,
    whitelist: ['user'],
};

export default persistReducer(persistConfig, rootReducer);
