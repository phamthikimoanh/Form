import {combineReducers,createStore,compose, applyMiddleware} from 'redux';
import storeReducer from './reducers/store';
import thunk from 'redux-thunk';


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const rootReducer=combineReducers({
    store : storeReducer
})

export type StateInit = ReturnType<typeof rootReducer>

export const configStore =()=>{
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
    return store;
  }
// export const configStore =()=>{
//     const store =createStore(rootReducer);
//     return store;
// }
// export const configStore =()=>{
//   const middleware =[thunk,sagaMiddleware];
//   const enhancers = [applyMiddleware(...middleware)];
//   const store =createStore(rootReducer,...enhancers);
//   sagaMiddleware.run(rootSaga);
//   return store;
// }