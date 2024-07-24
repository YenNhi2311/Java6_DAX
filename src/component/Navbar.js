import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <i className='bx bx-menu'></i>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Tìm kiếm..." />
          <button type="submit" className="search-btn">
            <i className='bx bx-search'></i>
          </button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden />
      <label htmlFor="switch-mode" className="switch-mode"></label>
      <a href="#" className="notification">
        <i className='bx bxs-bell'></i>
        <span className="num">8</span>
      </a>
      <a href="#" className="profile">
        <img src={require('../assets/img/shop_06.jpg')} alt="Tài khoản" />
      </a>
    </nav>
  );
}

export default Navbar;
