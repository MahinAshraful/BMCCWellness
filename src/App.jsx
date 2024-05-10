import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { SignUp, Login, Homepage } from './pages';
import { useState, useEffect } from 'react';
import Landing from './pages/Landing';


function App() {

  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])
  

  return (
    
    <Router>
      <Routes>
        <Route path={'/signup'} element={ <SignUp />} />
        <Route path={'/login'} element={ <Login setToken={setToken}/>} />
        {token?<Route path={'/homepage'} element={ <Homepage token={token} />} />:""}
        <Route path={'/'} element={ <Landing />} />
      </Routes>
    </Router>

    
  );
}

export default App;
