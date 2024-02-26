
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { useEffect, useState } from 'react';
import {auth} from './firebase';

function App() {
  const [username,setusername] = useState("");

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setusername(user.displayName);
      }else setusername("")
      console.log(user);
    });
   }
    )
  return <div className="App">
  <Router>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Home name ={username}/>} />
    </Routes>
  </Router>
  </div>
}

export default App;
