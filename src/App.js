import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
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

        </Routes>
      </Router>
    </div>
  );
}

export default App;
