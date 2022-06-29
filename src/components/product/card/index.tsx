import {RatingStars} from "../rating-stars";
import React from "react";
import Link from "next/link";
import {slugify} from "../../../utils/string";
import {Image} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

export const ProductPrice =(props: {prices: {price: string | number; salePrice?: string | number}}) => {
  const {prices} = props;

  return <>{
    prices?.salePrice ?
      <>
        <span className="current_price">{prices?.salePrice}</span>
        <span className="old_price">{prices?.price}</span>
      </>
      :
      <span className="current_price">{prices?.price}</span>
  }</>
}

export const ProductCard = (props: { product }) => {
  const {product} = props;

  if(!product) {
    return null;
  }

  return <div className="single_product">
    <div className="product_thumb">
      <Link href={`/product/${slugify(product.title)}`}>
        <Image
          width='100%'
          height={300}
          src={product.image}
          preview={false}
          placeholder={
            <div style={{minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <LoadingOutlined
              style={{ fontSize: 24 }} spin />
            </div>
          }
            fallback={'/assets/img/fallback.png'}
          // loading='https://tm.hasthemes.com/edon-preview/edon/assets/img/product/big-product/product1.png'
        />
      </Link>
      <div className="product_action">
        <ul>
          <li className="wishlist"><a href="wishlist.html" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                      data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-heart icons"/></a></li>

          <li className="quick_view"><a data-bs-toggle="modal" data-bs-target="#modal_box" data-tippy="Quick View" href="#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i
            className="icon-size-fullscreen icons"/></a></li>
          <li className="compare"><a data-tippy="Compare" href="compare.html" data-tippy-inertia="true" data-tippy-delay="50"
                                     data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-refresh icons"/></a></li>
        </ul>
      </div>
      <div className="product_label">
        <span>-18%</span>
      </div>
    </div>
    <div className="product_content grid_content text-center">
      <RatingStars rating={product.ratings?.rating} noOfRatings={product.ratings?.noOfRatings}/>
      <h4 className="product_name"><a href={`/product/${slugify(product.title)}`}>{product.title}</a></h4>
      <div className="price_box">
        <ProductPrice prices={product.prices} />
      </div>
      <div className="add_to_cart">
        <a className="btn btn-primary" href="#" data-tippy="Add To Cart" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</a>
      </div>
    </div>
    <div className="product_list_content">
      <h4 className="product_name"><Link href={`/product/${slugify(product.title)}`}>{product.title}</Link></h4>
      <p><a href="#">shows</a></p>
      <ProductPrice prices={product.prices} />
      <div className="product_desc">
        <p>{product.description}</p>
      </div>
      <div className="add_to_cart">
        <a className="btn btn-primary" href="#" data-tippy="Add To Cart" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</a>
      </div>
    </div>
  </div>
}
