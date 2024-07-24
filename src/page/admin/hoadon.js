import React, {Component} from "react";
import "../../assets/css/fontawesome.css";
import "../../assets/css/fontawesome.min.css";
import "../../assets/css/slick-theme.css";
import "../../assets/css/slick-theme.min.css";
import "../../assets/css/slick.min.css";
import "../../assets/css/templatemo.css";
import "../../assets/css/templatemo.min.css";
import "../../assets/css/login.css";
import "../../assets/style.css";


export default class Quanlitaikhoan extends Component {
  constructor(props) {
      super(props);
      this.state = {
          trangThai: '',

          hoaDons: [],
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      // Khởi tạo một số sản phẩm mẫu
      const samplehoaDons = [
          {
              id: 1,
              trangThai: 'Hoàn Thành',
              diaChi: 'Cà mau',
              tongTien: 100000,
              tenTaiKhoan: 'TheAnh',
              phone: '0123456789',
              tienShip: 30000,
              ngayTao: '2024-01-01',
              ngayCapNhat: '2024-01-02',
          },
          {
              id: 2,
              trangThai: 'Hoàn Thành',
              diaChi: 'Cà mau',
              tongTien: 200000,
              tenTaiKhoan: 'TheAnh',
              phone: '0123456789',
              tienShip: 30000,
              ngayTao: '2024-02-01',
              ngayCapNhat: '2024-02-02',
          },
          {
              id: 3,
              trangThai: 'Chờ Giao Hàng',
              diaChi: 'Cà mau',
              tongTien: 300000,
              tenTaiKhoan: 'TheAnh',
              phone: '0123456789',
              tienShip: 30000,
              ngayTao: '2024-03-01',
              ngayCapNhat: '2024-03-02',
          },
      ];

      this.setState({ hoaDons: samplehoaDons });
  }

  handleChange(event) {
      const { name, value } = event.target;
      this.setState({
          [name]: value,
      });
  }

  handleSubmit(event) {
      event.preventDefault();
      const newTaiKhoan = {
          id: this.state.hoaDons.length + 1,
          trangThai: this.state.trangThai,
          diaChi: this.state.diaChi,
          tienShip: this.state.tienShip,
          tongTien: this.state.tongTien,
          tenTaiKhoan: this.state.tenTaiKhoan,
          phone: this.state.phone,
          ngayTao: this.state.ngayTao,
          ngayCapNhat: this.state.ngayCapNhat,
      };
      this.setState((prevState) => ({
          hoaDons: [...prevState.hoaDons, newTaiKhoan],
          trangThai: '',
          diaChi: '',
          tienShip: '',
          tongTien: '',
          tenTaiKhoan: '',
          phone: '',
          ngayTao: '',
          ngayCapNhat: '',
      }));
  }

  render() {
      return (
        <div>
          <div className="container">
              <div className="row">
                  
                  <div className="col-5">
                      <form onSubmit={this.handleSubmit}>
                          <div className="form-group mb-2 mt-4 pb-3">
                              <label style={{fontWeight: 'bold'}} className="pb-2" htmlFor="trangThai">Trạng thái:</label>
                              <select
                                  className="form-control form-control-sm"
                                  id="trangThai"
                                  name="trangThai"
                                  value={this.state.trangThai}
                                  onChange={this.handleChange}
                              >
                                  <option value="option1">Hoàn Thành</option>
                                  <option value="option2">Chờ giao hàng</option>
                              </select>
                          </div>
                          <p></p>
                          <button type="submit" className="btn  btn-sm">Cập Nhật</button>
                      </form>
                  </div>

              </div>
              <div className="row text-center mt-4">
                  
                  <div className="col-9">
                      <table className="table table-striped table-border-black">
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>Tên tài khoản</th>
                                  <th>Số điện thoại</th>
                                  <th>Địa chỉ</th>
                                  <th>Phí ship</th>
                                  <th>Tổng tiền</th>
                                  <th>Trạng thái</th>
                                  <th>Ngày tạo</th>
                                  <th>Ngày cập nhật</th>
                              </tr>
                          </thead>
                          <tbody>
                              {this.state.hoaDons.map((taiKhoan) => (
                                  <tr key={taiKhoan.id}>
                                      <td>{taiKhoan.id}</td>
                                      <td>{taiKhoan.tenTaiKhoan}</td>
                                      <td>{taiKhoan.phone}</td>
                                      <td>{taiKhoan.diaChi}</td>
                                      <td>{taiKhoan.tienShip}</td>
                                      <td>{taiKhoan.tongTien}</td>
                                      <td>{taiKhoan.trangThai}</td>
                                      <td>{taiKhoan.ngayTao}</td>
                                      <td>{taiKhoan.ngayCapNhat}</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>

                  </div>
              </div>
          </div>
          </div>
      );
  }
}
