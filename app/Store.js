import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/root-reducer';
import { getSavedState } from './utils/loadState';

const savedState = getSavedState();

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducers, savedState, enhancer);

export default store;
