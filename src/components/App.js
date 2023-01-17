import React,{useState} from 'react'
import '../styles/App.css';
import { BrowserRouter as Router ,Route,Routes ,Navigate,NavLink,Link} from 'react-router-dom' ;
import Login from './Login.js'
import Register from './Register.js'
import Dashboard from './Dashboard';


const App = () => {

//code for  Route path="/" , Route path="/dashboard" 

  const [loggedIn,setLoggedIn]=useState(false)
 const [navigate,setNavigate]=useState(false)
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  return (

<div id='App'>
  <Router>
    
    <Routes>
      <Route path="/" exact element={<Login email={email} password={password} setLoggedIn={setLoggedIn} setNavigate={setNavigate}/>} />
      
      <Route path="/Register" exact element={navigate? <Navigate to="/" /> : <Register  emailChange={setEmail}  passwordChange={setPassword} setNavigate={setNavigate} />} />

      <Route path="/dashboard" exact element={<Dashboard setLoggedIn={setLoggedIn}/> } />
    </Routes>
  </Router>
</div>
  )
}


export default App;
