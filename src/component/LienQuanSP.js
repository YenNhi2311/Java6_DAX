import React, { Component } from 'react';
import $ from 'jquery';
// import 'slick-carousel';
import '../assets/css/slick.min.css';
import '../assets/css/slick-theme.css';
import '../assets/css/slick-theme.min.css';

export default class LienQuanSP extends Component {


  render() {
    return (
      <div id="carousel-related-product">
        <div className="p-2 pb-3">
          <div className="product-wap card rounded-0">
            <div className="card rounded-0">
              <img className="card-img rounded-0 img-fluid" src={require('../assets/img/shop_08.jpg')} alt="Product" />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul className="list-unstyled">
                  <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart" /></a></li>
                  <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye" /></a></li>
                  <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus" /></a></li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <a href="shop-single.html" className="h3 text-decoration-none">Red Clothing</a>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>M/L/X/XL</li>
                <li className="pt-2">
                  <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-center mb-1">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
              </ul>
              <p className="text-center mb-0">$20.00</p>
            </div>
          </div>
        </div>
        {/* Add more product items similarly */}
      </div>
    );
  }
}

