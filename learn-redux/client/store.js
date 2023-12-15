import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';


// create an object for the default data

const defaultStore = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultStore);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
