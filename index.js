import React from 'react'
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './store/storeFile';
import Home from './container/Home';



// view is connected to store
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <Home />
    </Provider>

)