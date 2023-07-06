import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from './components/Navbar';

function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to='/login'/>} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/'/>} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
