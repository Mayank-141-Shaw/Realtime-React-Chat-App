import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Chat from './components/Chat'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={ <Register /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/' element={ <Chat /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
