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
import ReviewPage from './components/ReviewPage';
import WriteAReview from './components/WriteAReview';
import UpdateAReview from './components/UpdateAReview';

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
          <Route path='/review' element={<ReviewPage/>}/>
          <Route path='/writeareview' element={<WriteAReview/>}/>
          <Route path='/updateareview' element={<UpdateAReview/>}/>
        </Routes>
      </Router>
    </div>
  );

}

export default App;