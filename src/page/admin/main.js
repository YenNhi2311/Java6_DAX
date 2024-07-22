import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style.css";

const Main = () => {
  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="main">Dashboard</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <Link to="main">Home</Link>
            </li>
          </ul>
        </div>
        <Link className="btn-download">
          <i className="bx bxs-cloud-download"></i>
          <span className="text">Tải về PDF</span>
        </Link>
      </div>

      <ul className="box-info">
        <li>
          <i className="bx bxs-calendar-check"></i>
          <span className="text">
            <h3>102</h3>
            <p>Hóa đơn</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-group"></i>
          <span className="text">
            <h3>2834</h3>
            <p>Sản phẩm</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle"></i>
          <span className="text">
            <h3>63</h3>
            <p>Tài khoản</p>
          </span>
        </li>
      </ul>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Thống kê hóa đơn</h3>
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Mã hóa đơn</th>
                <th>Khách hàng</th>
                <th>Ngày đặt</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img src="img/people.png" alt="User" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
              </tr>
              <tr>
              <td>1</td>
                <td>
                  <img src="img/people.png" alt="User" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
              <td>1</td>
                <td>
                  <img src="img/people.png" alt="User" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status process">Process</span>
                </td>
              </tr>
              <tr>
              <td>1</td>
                <td>
                  <img src="img/people.png" alt="User" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
              <td>1</td>
                <td>
                  <img src="img/people.png" alt="User" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="todo">
          <div className="head">
            <h3>Thống kê theo loại</h3>
            <i className="bx bx-plus"></i>
            <i className="bx bx-filter"></i>
          </div>
          <ul className="todo-list">
            <li className="completed">
              <p>Laptop</p>
              <i className="bx bx-dots-vertical-rounded"></i>
            </li>
            <li className="completed">
              <p>Smartphone</p>
              <i className="bx bx-dots-vertical-rounded"></i>
            </li>
            <li className="not-completed">
              <p>Đồng hồ</p>
              <i className="bx bx-dots-vertical-rounded"></i>
            </li>
            <li className="completed">
              <p>Máy giặt</p>
              <i className="bx bx-dots-vertical-rounded"></i>
            </li>
            <li className="not-completed">
              <p>Máy lạnh</p>
              <i className="bx bx-dots-vertical-rounded"></i>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
