import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Logged from './pages/Logged';
import UnLogged from './pages/UnLogged';



function App() {



  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<UnLogged />} />  // Use JSX for element prop
        <Route path="/logged" element={<Logged />} />  // Use JSX for element prop
      </Routes>
    </Router>

    
  );
}

export default App;
