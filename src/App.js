
import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateBook from './components/CreateBook';
import UpdateBook from './components/UpdateBook';
import TbrList from './components/TbrList';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/tbrlist' element={<TbrList/>}/>
          <Route path='/createbook' element={<CreateBook/>}/>
          <Route path='/updatebook' element={<UpdateBook/>}/>

        </Routes>
      </Router>
    </div>
  );

}

export default App;
