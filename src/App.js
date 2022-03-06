import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Instractor from './Components/Instractor/Instractor';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import AuthProvider from './Hooks/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Authentication/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>

      <Router>
        <Header></Header>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
          
          <Route path="/courses" element={<PrivateRoute> <Courses /> </PrivateRoute>} />
          
          <Route path="/instractor" element={<PrivateRoute> <Instractor /> </PrivateRoute>} />

          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

        </Routes>
        <Footer></Footer>
      </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
