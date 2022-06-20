import { createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from './rootReducer.js';

// redux saga 

const middleware = [thunk];

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(rootReducer, composeWithDevTools());

export default store;