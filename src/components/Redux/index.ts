import {combineReducers,createStore,compose, applyMiddleware} from 'redux';
import storeReducer from './reducers/store';
import thunk from 'redux-thunk';

<<<<<<< HEAD
=======

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

>>>>>>> master
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
<<<<<<< HEAD
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
=======
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
>>>>>>> master
    : compose;

const rootReducer=combineReducers({
    store : storeReducer
})

<<<<<<< HEAD
export type State = ReturnType<typeof rootReducer>

export const configStore =()=>{
    const store =createStore(rootReducer,composeEnhancers([applyMiddleware(thunk)]));
=======
export type StateInit = ReturnType<typeof rootReducer>

export const configStore =()=>{
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
>>>>>>> master
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