import React, { Component } from 'react';
import '../../assets/style.css';

export default class Quanlitaikhoan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenTaiKhoan: '',
      diaChi: '',
      passWord: '',
      fullName: '',
      phone: '',
      ngayTao: '',
      ngayCapNhat: '',
      taiKhoans: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Khởi tạo một số sản phẩm mẫu
    const sampletaiKhoans = [
      {
        id: 1,
        tenTaiKhoan: 'Tài khoản 1',
        diaChi: 'Cà mau',
        passWord: 100000,
        fullName: 'TheAnh',
        phone: '0123456789',
        ngayTao: '2024-01-01',
        ngayCapNhat: '2024-01-02',
      },
      {
        id: 2,
        tenTaiKhoan: 'Tài khoản 2',
        diaChi: 'Cà mau',
        passWord: 200000,
        fullName: 'TheAnh',
        phone: '0123456789',
        ngayTao: '2024-02-01',
        ngayCapNhat: '2024-02-02',
      },
      {
        id: 3,
        tenTaiKhoan: 'Tài khoản 3',
        diaChi: 'Cà mau',
        passWord: 300000,
        fullName: 'TheAnh',
        phone: '0123456789',
        ngayTao: '2024-03-01',
        ngayCapNhat: '2024-03-02',
      },
    ];

    this.setState({ taiKhoans: sampletaiKhoans });
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
      id: this.state.taiKhoans.length + 1,
      tenTaiKhoan: this.state.tenTaiKhoan,
      diaChi: this.state.diaChi,
      passWord: this.state.passWord,
      fullName: this.state.fullName,
      phone: this.state.phone,
      ngayTao: this.state.ngayTao,
      ngayCapNhat: this.state.ngayCapNhat,
    };
    this.setState((prevState) => ({
      taiKhoans: [...prevState.taiKhoans, newTaiKhoan],
      tenTaiKhoan: '',
      diaChi: '',
      passWord: '',
      fullName: '',
      phone: '',
      ngayTao: '',
      ngayCapNhat: '',
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
         <div className="col-3"></div>
          <div className="col-5">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group mb-2 mt-4">
               
                <label htmlFor="tenTaiKhoan">Tên tài khoản:</label>
                
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="tenTaiKhoan"
                  name="tenTaiKhoan"
                  value={this.state.tenTaiKhoan}
                  onChange={this.handleChange}
                />
              </div>
             
              <div className="form-group mb-3">
                <label htmlFor="passWord">Password:</label>
                <input
                  type="passWord"
                  className="form-control form-control-sm"
                  id="passWord"
                  name="passWord"
                  value={this.state.passWord}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="fullName">Họ và tên:</label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="fullName"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone">Số điện thoại:</label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="ngayTao">Ngày tạo:</label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="ngayTao"
                  name="ngayTao"
                  value={this.state.ngayTao}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="ngayCapNhat">Ngày cập nhật:</label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="ngayCapNhat"
                  name="ngayCapNhat"
                  value={this.state.ngayCapNhat}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="diaChi">Mô tả:</label>
                <textarea
                  className="form-control form-control-sm"
                  id="diaChi"
                  name="diaChi"
                  value={this.state.diaChi}
                  onChange={this.handleChange}
                  rows="2"
                />
              </div>
              <button type="submit" className="btn  btn-sm">Thêm tài khoản</button>
            </form>
          </div>
          
          </div>
          <div className="row text-center mt-4">
          <div className="col-1"></div>
          <div className="col-9">
          <table className="table table-striped table-border-black">
  <thead>
    <tr>
      <th>ID</th>
      <th>Tên tài khoản</th>
      <th>Email</th>
      <th>Họ và tên</th>
      <th>Số điện thoại</th>
      <th>Địa chỉ</th>
      <th>Ngày tạo</th>
      <th>Ngày cập nhật</th>
    </tr>
  </thead>
  <tbody>
    {this.state.taiKhoans.map((taiKhoan) => (
      <tr key={taiKhoan.id}>
        <td>{taiKhoan.id}</td>
        <td>{taiKhoan.tenTaiKhoan}</td>
        <td>{taiKhoan.diaChi}</td>
        <td>{taiKhoan.passWord}</td>
        <td>{taiKhoan.fullName}</td>
        <td>{taiKhoan.phone}</td>
        <td>{taiKhoan.ngayTao}</td>
        <td>{taiKhoan.ngayCapNhat}</td>
      </tr>
    ))}
  </tbody>
</table>

          </div>
          </div>
      </div>
    );
  }
}
