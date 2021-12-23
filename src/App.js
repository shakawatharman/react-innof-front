import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Service from './Components/Service/Service';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Landing from './Pages/Homepage/Landing/Landing';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/home" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/services"
              element={
                <PrivateRoute>
                  <Services />
                </PrivateRoute>
              }
            />
            <Route path="/service/:id" element={<Service />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
