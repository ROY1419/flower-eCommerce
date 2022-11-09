import './App.css';
// import Register from './components/Register';
import SignUp from './components/Sign-up';
import Login from './components/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import Shop from './components/Shop';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Toaster position="top-right top-fixed" />
        <Routes>
          <Route element={<Navigate to="/home" />} path="/" />
          <Route element={<Home />} path='home' />
          <Route element={<Shop />} path='shop' />
          <Route element={<SignUp />} path='signup' />
          <Route element={<Login />} path='login' />
          {/* <Route element={<Contact />} path='contact' />
          <Route element={<About />} path='about' /> */}
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
