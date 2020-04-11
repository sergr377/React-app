import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {

  return (
    <BrowserRouter>
      <div className="page">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs'
              render={() => <Dialogs
                dialogs={props.appState.dialogsPage.dialogs}
                messageData={props.appState.dialogsPage.messageData} 
                dispatch={props.dispatch} />} />
            <Route path='/profile'
              render={() => <Profile
                posts={props.appState.profilePage.posts}
                profilePage={props.appState.profilePage}
                dispatch={props.dispatch} />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
//testimg git
export default App;
