import { configureStore} from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { authReducer } from './reducers/authReducer';


const reducers = {
auth: authReducer,
}
//add reducers here
const middleware = [thunk];

const initialState = {

}

const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(middleware),
  devTools:true
});

export default store 