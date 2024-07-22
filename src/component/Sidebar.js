import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

export default class HeadID extends Component {
  render() {
    return (
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">ADMIN</span>
        </a>
        <ul className="side-menu top">
          <li>
            <i className="bx bxs-dashboard"></i>
            <Link to="/main" className="h3 text-decoration-none">
              Trang chủ
            </Link>
            {/* <span className="text">Dashboard</span> */}
          </li>
          <li>
            <i className="bx bxs-shopping-bag-alt"></i>
            <Link to="/hoadon" className="h3 text-decoration-none">
              Quản lý hóa đơn
            </Link>
            {/* <span className="text">My Store</span> */}
          </li>
          <li>
     
            <i className="bx bxs-dashboard"></i>
            <Link to="/sanpham" className="h3 text-decoration-none">
              Quản lý sản phẩm
            </Link>
            
          </li>
          <li>
            
            <i className="bx bxs-dashboard"></i>
            <Link to="/account" className="h3 text-decoration-none">
              Quản lý tài khoản
            </Link>
            
          </li>
          <li>
           
            <i className="bx bxs-dashboard"></i>
            <Link to="/category" className="h3 text-decoration-none">
              Quản lý loại
            </Link>
           
          </li>
        </ul>
        <ul className="side-menu">
          <li>
           
            <i className="bx bxs-dashboard"></i>
            <Link to="/settings" className="h3 text-decoration-none">
              Cài đặt
            </Link>
            
          </li>
          <li>
            <div href="#" className="logout">
            <i className="bx bxs-dashboard"></i>
            <Link to="/logout" className="h3 text-decoration-none">
              Đăng xuất
            </Link>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
