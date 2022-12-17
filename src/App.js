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
<<<<<<< Updated upstream
import DeleteAcc from './components/DeleteAcc';
import ChangePass from './components/ChangePass';
=======
>>>>>>> Stashed changes

function App() {

  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/deleteacc' element={<DeleteAcc/>}/>
          <Route path='/changepass' element={<ChangePass/>}/>
          <Route path='/tbrlist' element={<TbrList/>}/>
          <Route path='/createbook' element={<CreateBook/>}/>
          <Route path='/updatebook/:id' element={<UpdateBook/>}/>
          <Route path='/review' element={<ReviewPage/>}/>
          <Route path='/updatebook' element={<UpdateBook/>}/>
<<<<<<< Updated upstream
          <Route path='/reviewpage' element={<ReviewPage/>}/>
=======
          <Route path='/review' element={<ReviewPage/>}/>
>>>>>>> Stashed changes
          <Route path='/writeareview' element={<WriteAReview/>}/>
          <Route path='/updateareview' element={<UpdateAReview/>}/>
        </Routes>
      </Router>
    </div>
  );

}

export default App;