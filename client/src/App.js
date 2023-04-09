import './App.css';
import { BrowserRouter as  Router, Routes,Route } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Navbar2 from './components/Navbar2';
import Product from './screens/Product';
function App() {
  return (
   <>

    <Router>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Products' element={<Product/>}/>
      </Routes>

    </Router>
    </>
  );
}

export default App;
