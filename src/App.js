import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import ChangePass from './components/ChangePass';
import DeleteAcc from './components/DeleteAcc';
import ForgotPass from './components/ForgotPass';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/changepass' element={<ChangePass/>}/>
          <Route path='/deleteacc' element={<DeleteAcc/>}/>
          <Route path='/forgotpass' element={<ForgotPass/>}/>

        </Routes>
      </Router>
    </div>
  );

}

export default App;