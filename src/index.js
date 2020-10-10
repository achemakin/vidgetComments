import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import VidgetCommentsApp from './containers/vidgetCommentsApp';
import  doVidgetComments from './reducers/doVidgetComments';

let initialState = {
  comments: [],
  newName: '',
  newText: '',
}

if (localStorage.getItem('commentsList') && localStorage.getItem('commentsList') !== "[]") {
  initialState.comments = JSON.parse(localStorage.getItem('commentsList'));  
};

const store = createStore(doVidgetComments, initialState);

ReactDOM.render(
  <React.StrictMode>
    <VidgetCommentsApp store={ store } />
  </React.StrictMode>,
  document.getElementById('root')
);