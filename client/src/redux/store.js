import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore} from 'redux';
import { rootReducer } from './rootReducer.js';
import thunk from 'redux-thunk';

// redux saga 

//const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;