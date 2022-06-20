import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore} from 'redux';
import { rootReducer } from './rootReducer.js';
// import thunk from 'redux-thunk';

// redux saga 

// const middleware = [thunk];

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(rootReducer, composeWithDevTools());

export default store;