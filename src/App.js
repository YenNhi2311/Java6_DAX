import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Shop from './page/users/Shop';
import TrangChu from './page/users/TrangChu';
import Login from './page/account/Login';
import Register from './page/account/Register'
import ShopSingle from './page/users/ShopSingle';
import ProfileKh from './page/users/profileKH';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<TrangChu />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/chitiet" element={<ShopSingle />} />
          <Route path="/ttkhachhang" element={<ProfileKh />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;

