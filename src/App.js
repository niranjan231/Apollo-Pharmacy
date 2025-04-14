import './App.css';
import Footer from './Component/Footer';
import Nabvar from './Component/Nabvar';
import Auth from './Component/Auth';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Nabvar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
