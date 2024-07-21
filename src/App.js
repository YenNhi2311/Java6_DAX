import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrangChu from './page/users/TrangChu';
import Shop from './page/users/Shop';
import Footer from './component/Footer';
import HeadID from './component/HeadID';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function App() {
  return (
    <Router>
      <div>
        <HeadID/>
        
        <main>
          <Routes>
            <Route path="/" element={<TrangChu />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>

        <footer className="bg-dark" id="tempaltemo_footer">
          <Footer/>
        </footer>
      </div>
    </Router>

  );
}

export default App;
