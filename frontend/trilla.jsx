import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            },
            entities: {
                users: {[window.currentUser.id]: window.currentUser }
            }
        };
      store = createStore(preloadedState);
    delete window.currentUser;
    } else {
   
      store = createStore();
    }

    ReactDOM.render(<Root store={store} />, root);

    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

})


