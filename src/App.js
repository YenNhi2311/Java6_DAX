import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Shop from './page/users/Shop';
import TrangChu from './page/users/TrangChu';
import Login from './page/account/Login';
import Register from './page/account/Register'
import ShopSingle from './page/users/ShopSingle';
import ProfileKh from './page/users/profileKH';
import GioHang from './page/users/giohang';
import ThanhToan from './page/users/ThanhToan';
import HoanThanh from './page/users/HoanThanh';

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
          <Route path="/giohang" element={<GioHang />} />
          <Route path="/thanhtoan" element={<ThanhToan/>} />
          <Route path="/hoanthanh" element={<HoanThanh />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;

