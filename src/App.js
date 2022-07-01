import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Content from './page/Content';
import Download from './page/Download';
import Home from './page/Home';
import Login from './page/Login';
import Support from './page/Support';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Content' element={<Content />} />
          <Route path='/Download' element={<Download />} />
          <Route path='/Support' element={<Support />} />
          <Route path='/Login' element={<Login />} />
        </Routes>

      </Router>
      

    </div>
  );
}

export default App;
