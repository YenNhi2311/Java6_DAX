import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../assets/css/sidebar.css";

export default class HeadID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  render() {
    return (
      <section id="sidebar" style={{ color: "black" }}>
        <Nav className="flex-column vh-100">
          <Nav.Item className="mb-4">
            <Nav.Link href="#" className="d-flex align-items-center">
              <span className="h5 mb-0">ADMIN</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/main"
              className="d-flex align-items-center text-dark hover-menu"
            >
              <span className="hover-menu">Trang chủ</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={this.toggleDropdown}
              className="d-flex align-items-center text-dark dropdown-toggle"
            >
              <span className="hover-menu">Quản lý hóa đơn</span>{" "}
            </Nav.Link>
            {this.state.open && (
              <div className="bg-item-menu">
                <Nav className="flex-column text-dark">
                  <div className="item-menu">
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        to="/hoadon/quanly"
                        className="text-dark"
                      >
                        Quản lý hóa đơn
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                  <div className="item-menu">
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        to="/hoadon/quanly"
                        className="text-dark"
                      >
                        Quản lý hóa đơn
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                  <div className="item-menu">
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        to="/hoadon/quanly"
                        className="text-dark"
                      >
                        Quản lý hóa đơn
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </Nav>
              </div>
            )}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/sanpham"
              className="d-flex align-items-center text-dark"
            >
              <span className="hover-menu">Quản lý sản phẩm</span>{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/account"
              className="d-flex align-items-center text-dark"
            >
              <span className="hover-menu">Quản lý tài khoản</span>{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/category"
              className="d-flex align-items-center text-dark"
            >
              <span className="hover-menu">Quản lý loại sản phẩm</span>{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mt-auto">
            <Nav.Link
              as={Link}
              to="/settings"
              className="d-flex align-items-center text-dark"
            >
              <span className="hover-menu">Cài đặt</span>{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/logout"
              className="d-flex align-items-center text-dark"
            >
              <span className="hover-menu">Đăng xuất</span>{" "}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </section>
    );
  }
}
