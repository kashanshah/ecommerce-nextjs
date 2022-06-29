import {RatingStars} from "../rating-stars";
import React from "react";

export const ProductCard = (props: { product }) => {
  const {product} = props;
  return <div className="single_product">
    <div className="product_thumb">
      <a href="product-gallery-left.html">
        <img className="primary_img" src="assets/img/product/product1.jpg" alt="consectetur" />
      </a>
      <div className="product_action">
        <ul>
          <li className="wishlist"><a href="wishlist.html" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                      data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-heart icons"></i></a></li>

          <li className="quick_view"><a data-bs-toggle="modal" data-bs-target="#modal_box" data-tippy="Quick View" href="#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i
            className="icon-size-fullscreen icons"></i></a></li>
          <li className="compare"><a data-tippy="Compare" href="compare.html" data-tippy-inertia="true" data-tippy-delay="50"
                                     data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-refresh icons"></i></a></li>
        </ul>
      </div>
      <div className="product_label">
        <span>-18%</span>
      </div>
    </div>
    <div className="product_content grid_content text-center">
      <div className="product_ratting">
        <ul className="d-flex justify-content-center">
          <li><a href="#"><i className="ion-android-star"></i></a></li>
          <li><a href="#"><i className="ion-android-star"></i></a></li>
          <li><a href="#"><i className="ion-android-star"></i></a></li>
          <li><a href="#"><i className="ion-android-star"></i></a></li>
          <li><a href="#"><i className="ion-android-star"></i></a></li>
          <li><span>(2)</span></li>
        </ul>
      </div>
      <h4 className="product_name"><a href="product-gallery-left.html">Basic Joggin Shorts</a></h4>
      <div className="price_box">
        <span className="current_price">$43.00</span>
        <span className="old_price">$46.00</span>
      </div>
      <div className="add_to_cart">
        <a className="btn btn-primary" href="#" data-tippy="Add To Cart" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</a>
      </div>
    </div>
    <div className="product_list_content">
      <h4 className="product_name"><a href="product-gallery-left.html">Basic Joggin Shorts</a></h4>
      <p><a href="#">shows</a></p>
      <div className="price_box">
        <span className="current_price">$43.00</span>
        <span className="old_price">$46.00</span>
      </div>
      <div className="product_desc">
        <p>Morbi pulvinar mollis metus, vel tempus orci convallis ut. Vestibulum finibus posuere orci, sed venenatis sem eleifend et. Vivamus vitae risus vitae orci vestibulum faucibus condimentum sit amet eros. Sed mattis ligula in tempus
          pharetra. Nullam quis augue ac tellus tempor congue</p>
      </div>
      <div className="add_to_cart">
        <a className="btn btn-primary" href="#" data-tippy="Add To Cart" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</a>

      </div>
    </div>
  </div>
}
