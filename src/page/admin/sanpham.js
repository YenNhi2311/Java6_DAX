import React, { Component } from 'react';
import '../../assets/style.css';

export default class SanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenSanPham: '',
      moTa: '',
      gia: '',
      soLuong: '',
      hinhAnh: '',
      loai: '',
      ngayTao: '',
      ngayCapNhat: '',
      sanPhams: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Khởi tạo một số sản phẩm mẫu
    const sampleSanPhams = [
      {
        id: 1,
        tenSanPham: 'Sản phẩm 1',
        moTa: 'Mô tả sản phẩm 1',
        gia: 100000,
        soLuong: 10,
        hinhAnh: 'link-to-image-1.jpg',
        loai: 'Loại 1',
        ngayTao: '2024-01-01',
        ngayCapNhat: '2024-01-02',
      },
      {
        id: 2,
        tenSanPham: 'Sản phẩm 2',
        moTa: 'Mô tả sản phẩm 2',
        gia: 200000,
        soLuong: 20,
        hinhAnh: 'link-to-image-2.jpg',
        loai: 'Loại 2',
        ngayTao: '2024-02-01',
        ngayCapNhat: '2024-02-02',
      },
      {
        id: 3,
        tenSanPham: 'Sản phẩm 3',
        moTa: 'Mô tả sản phẩm 3',
        gia: 300000,
        soLuong: 30,
        hinhAnh: 'link-to-image-3.jpg',
        loai: 'Loại 3',
        ngayTao: '2024-03-01',
        ngayCapNhat: '2024-03-02',
      },
    ];

    this.setState({ sanPhams: sampleSanPhams });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newSanPham = {
      id: this.state.sanPhams.length + 1,
      tenSanPham: this.state.tenSanPham,
      moTa: this.state.moTa,
      gia: this.state.gia,
      soLuong: this.state.soLuong,
      hinhAnh: this.state.hinhAnh,
      loai: this.state.loai,
      ngayTao: this.state.ngayTao,
      ngayCapNhat: this.state.ngayCapNhat,
    };
    this.setState((prevState) => ({
      sanPhams: [...prevState.sanPhams, newSanPham],
      tenSanPham: '',
      moTa: '',
      gia: '',
      soLuong: '',
      hinhAnh: '',
      loai: '',
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
               
                <label htmlFor="tenSanPham">Tên sản phẩm:</label>
                
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="tenSanPham"
                  name="tenSanPham"
                  value={this.state.tenSanPham}
                  onChange={this.handleChange}
                />
              </div>
             
              <div className="form-group mb-3">
                <label htmlFor="gia">Giá:</label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="gia"
                  name="gia"
                  value={this.state.gia}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="soLuong">Số lượng:</label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="soLuong"
                  name="soLuong"
                  value={this.state.soLuong}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="hinhAnh">Hình ảnh:</label>
                <input
                  type="file"
                  className="form-control form-control-sm"
                  id="hinhAnh"
                  name="hinhAnh"
                  value={this.state.hinhAnh}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="loai">Loại:</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="loai"
                  name="loai"
                  value={this.state.loai}
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
                <label htmlFor="moTa">Mô tả:</label>
                <textarea
                  className="form-control form-control-sm"
                  id="moTa"
                  name="moTa"
                  value={this.state.moTa}
                  onChange={this.handleChange}
                  rows="2"
                />
              </div>
              <button type="submit" className="btn  btn-sm">Thêm sản phẩm</button>
            </form>
          </div>
          
          </div>
          <div className="row text-center mt-4">
            <div className='col-1'></div>
          <div className="col-10">
          <table className="table table-striped table-border-black">
  <thead>
    <tr>
      <th>ID</th>
      <th>Tên sản phẩm</th>
      <th>Mô tả</th>
      <th>Giá</th>
      <th>Số lượng</th>
      <th>Hình ảnh</th>
      <th>Loại</th>
      <th>Ngày tạo</th>
      <th>Ngày cập nhật</th>
    </tr>
  </thead>
  <tbody>
    {this.state.sanPhams.map((sanPham) => (
      <tr key={sanPham.id}>
        <td>{sanPham.id}</td>
        <td>{sanPham.tenSanPham}</td>
        <td>{sanPham.moTa}</td>
        <td>{sanPham.gia}</td>
        <td>{sanPham.soLuong}</td>
        <td>{sanPham.hinhAnh}</td>
        <td>{sanPham.loai}</td>
        <td>{sanPham.ngayTao}</td>
        <td>{sanPham.ngayCapNhat}</td>
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
