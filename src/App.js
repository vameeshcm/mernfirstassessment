import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Addblog from './components/Addblog';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
            <Route path='/home' element={<Home/>}/>
              <Route path='/bl' element={<Addblog/>}/>
          
           </Routes>
      
    </div>
  );
}

export default App;