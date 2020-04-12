import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {

  return (
    <BrowserRouter>
      <div className="page">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs'
              render={() => <DialogsContainer store={props.store} />} />
            <Route path='/profile'
              render={() => <Profile store={props.store} />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
