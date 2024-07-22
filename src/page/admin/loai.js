import React, { Component } from 'react';
import '../../assets/style.css';

export default class Quanliloai extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenLoai: '',
      
      loais: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Khởi tạo một số sản phẩm mẫu
    const sampleloais = [
      {
        id: 1,
        tenLoai: 'Tài khoản 1',
        
      },
      {
        id: 2,
        tenLoai: 'Tài khoản 2',
        
      },
      {
        id: 3,
        tenLoai: 'Tài khoản 3',
        
      },
    ];

    this.setState({ loais: sampleloais });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newLoai = {
      id: this.state.loais.length + 1,
      tenLoai: this.state.tenLoai,
      
    };
    this.setState((prevState) => ({
      loais: [...prevState.loais, newLoai],
      tenLoai: '',
      
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
         
          <div className="col-5">
            <h3>Loại</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group mb-2 mt-10">
               
                <label htmlFor="tenLoai">Tên loại:</label>
                
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="tenLoai"
                  name="tenLoai"
                  value={this.state.tenLoai}
                  onChange={this.handleChange}
                />
              </div>
             
             
             
              
              
              <button type="submit" className="btn  btn-sm">Thêm loại</button>
            </form>
          </div>
          
          </div>
          <div className="row text-center mt-4">
          <div className="col-8">
          <table className="table table-striped table-border-black">
  <thead>
    <tr>
      <th>ID</th>
      <th>Tên loại:</th>
      
    </tr>
  </thead>
  <tbody>
    {this.state.loais.map((loai) => (
      <tr key={loai.id}>
        <td>{loai.id}</td>
        <td>{loai.tenLoai}</td>
        
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
