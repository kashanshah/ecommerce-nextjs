import {RatingStars} from "../rating-stars";
import React from "react";

export const ProductCard = (props: { product }) => {
  const {product} = props;
  return <article className="single_product">
    <figure>
      <div className="product_thumb">
        <a href="product-gallery-left.html">
          <img className="primary_img" src={product.image} alt="consectetur"/>
        </a>
        <div className="product_action">
          <ul>
            <li className="wishlist"><a href="wishlist.html" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                        data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-heart icons"/></a></li>

            <li className="quick_view"><a data-bs-toggle="modal" data-bs-target="#modal_box" data-tippy="Quick View" href="#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                          data-tippy-placement="left"><i
              className="icon-size-fullscreen icons"/></a></li>

            <li className="compare"><a data-tippy="Compare" href="compare.html" data-tippy-inertia="true" data-tippy-delay="50"
                                       data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-refresh icons"/></a></li>
          </ul>
        </div>
      </div>
      <figcaption className="product_content text-center">
        <RatingStars rating={product.ratings?.rating} noOfRatings={product.ratings?.noOfRatings}/>
        <h4 className="product_name"><a href="product-gallery-left.html">{product.name}</a></h4>
        <div className="price_box">
          {
            product.prices?.salePrice ?
              <>
                <span className="current_price">{product.prices?.salePrice}</span>
                <span className="old_price">{product.prices?.price}</span>
              </>
              :
              <span className="current_price">{product.prices?.price}</span>
          }
        </div>
        <div className="add_to_cart">
          <a className="btn btn-primary btn-axolotl" href="#" data-tippy="Add To Cart" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</a>
        </div>
      </figcaption>
    </figure>
  </article>
}
