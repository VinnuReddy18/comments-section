import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/Store';  // Ensure 'store' is in lowercase
import CommentList from './components/CommentList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Comments Section</h1>
        <CommentList />
      </div>
    </Provider>
  );
}

export default App;
