import React, {useState} from "react";
import Link from "next/link";
import {ProductCard} from "../product/card";

export const BestSellerProducts = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allTabs = [
    {
      id: 'all',
      title: 'All',
      products: [
        {
          id: '1',
          name: 'Product One',
          image: '/assets/img/product/product1.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.8,
            noOfRatings: 3,
          },
        },
        {
          id: '2',
          name: 'Product Two',
          image: '/assets/img/product/product2.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.3,
            noOfRatings: 35,
          },
        },
        {
          id: '3',
          name: 'Product Three',
          image: '/assets/img/product/product3.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 5,
            noOfRatings: 2,
          },
        },
        {
          id: '4',
          name: 'Product Four',
          image: '/assets/img/product/product4.jpg',
          prices: {
            salePrice: '$30.00',
            price: '$25.00'
          },
          ratings: {
            rating: 3.7,
            noOfRatings: 101,
          },
        },
        {
          id: '1',
          name: 'Product One',
          image: '/assets/img/product/product1.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.8,
            noOfRatings: 3,
          },
        },
        {
          id: '2',
          name: 'Product Two',
          image: '/assets/img/product/product2.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.3,
            noOfRatings: 35,
          },
        },
        {
          id: '3',
          name: 'Product Three',
          image: '/assets/img/product/product3.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 5,
            noOfRatings: 2,
          },
        },
        {
          id: '4',
          name: 'Product Four',
          image: '/assets/img/product/product4.jpg',
          prices: {
            salePrice: '$30.00',
            price: '$25.00'
          },
          ratings: {
            rating: 3.7,
            noOfRatings: 101,
          },
        },
      ],
    },
    {
      id: 'clothings',
      title: 'Clothings',
      products: [
        {
          id: '1',
          name: 'Product One',
          image: '/assets/img/product/product1.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.8,
            noOfRatings: 3,
          },
        },
        {
          id: '2',
          name: 'Product Two',
          image: '/assets/img/product/product2.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.3,
            noOfRatings: 35,
          },
        },
        {
          id: '3',
          name: 'Product Three',
          image: '/assets/img/product/product3.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 5,
            noOfRatings: 2,
          },
        },
        {
          id: '4',
          name: 'Product Four',
          image: '/assets/img/product/product4.jpg',
          prices: {
            salePrice: '$30.00',
            price: '$25.00'
          },
          ratings: {
            rating: 3.7,
            noOfRatings: 101,
          },
        },
        {
          id: '1',
          name: 'Product One',
          image: '/assets/img/product/product1.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.8,
            noOfRatings: 3,
          },
        },
        {
          id: '2',
          name: 'Product Two',
          image: '/assets/img/product/product2.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.3,
            noOfRatings: 35,
          },
        },
        {
          id: '3',
          name: 'Product Three',
          image: '/assets/img/product/product3.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 5,
            noOfRatings: 2,
          },
        },
        {
          id: '4',
          name: 'Product Four',
          image: '/assets/img/product/product4.jpg',
          prices: {
            salePrice: '$30.00',
            price: '$25.00'
          },
          ratings: {
            rating: 3.7,
            noOfRatings: 101,
          },
        },
      ],
    },
    {
      id: 'bags',
      title: 'Bags',
      products: [
        {
          id: '1',
          name: 'Product One',
          image: '/assets/img/product/product1.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.8,
            noOfRatings: 3,
          },
        },
        {
          id: '2',
          name: 'Product Two',
          image: '/assets/img/product/product2.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.3,
            noOfRatings: 35,
          },
        },
        {
          id: '3',
          name: 'Product Three',
          image: '/assets/img/product/product3.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 5,
            noOfRatings: 2,
          },
        },
        {
          id: '4',
          name: 'Product Four',
          image: '/assets/img/product/product4.jpg',
          prices: {
            salePrice: '$30.00',
            price: '$25.00'
          },
          ratings: {
            rating: 3.7,
            noOfRatings: 101,
          },
        },
        {
          id: '1',
          name: 'Product One',
          image: '/assets/img/product/product1.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.8,
            noOfRatings: 3,
          },
        },
        {
          id: '2',
          name: 'Product Two',
          image: '/assets/img/product/product2.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.3,
            noOfRatings: 35,
          },
        },
        {
          id: '3',
          name: 'Product Three',
          image: '/assets/img/product/product3.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 5,
            noOfRatings: 2,
          },
        },
        {
          id: '4',
          name: 'Product Four',
          image: '/assets/img/product/product4.jpg',
          prices: {
            salePrice: '$30.00',
            price: '$25.00'
          },
          ratings: {
            rating: 3.7,
            noOfRatings: 101,
          },
        },
      ],
    },
    {
      id: 'shoes',
      title: 'Shoes',
      products: [
        {
          id: '1',
          name: 'Product One',
          image: '/assets/img/product/product1.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.8,
            noOfRatings: 3,
          },
        },
        {
          id: '2',
          name: 'Product Two',
          image: '/assets/img/product/product2.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.3,
            noOfRatings: 35,
          },
        },
        {
          id: '3',
          name: 'Product Three',
          image: '/assets/img/product/product3.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 5,
            noOfRatings: 2,
          },
        },
        {
          id: '4',
          name: 'Product Four',
          image: '/assets/img/product/product4.jpg',
          prices: {
            salePrice: '$30.00',
            price: '$25.00'
          },
          ratings: {
            rating: 3.7,
            noOfRatings: 101,
          },
        },
        {
          id: '1',
          name: 'Product One',
          image: '/assets/img/product/product1.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.8,
            noOfRatings: 3,
          },
        },
        {
          id: '2',
          name: 'Product Two',
          image: '/assets/img/product/product2.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.3,
            noOfRatings: 35,
          },
        },
        {
          id: '3',
          name: 'Product Three',
          image: '/assets/img/product/product3.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 5,
            noOfRatings: 2,
          },
        },
        {
          id: '4',
          name: 'Product Four',
          image: '/assets/img/product/product4.jpg',
          prices: {
            salePrice: '$30.00',
            price: '$25.00'
          },
          ratings: {
            rating: 3.7,
            noOfRatings: 101,
          },
        },
      ],
    },
    {
      id: 'accessories',
      title: 'Accessories',
      products: [
        {
          id: '1',
          name: 'Product One',
          image: '/assets/img/product/product1.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.8,
            noOfRatings: 3,
          },
        },
        {
          id: '2',
          name: 'Product Two',
          image: '/assets/img/product/product2.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.3,
            noOfRatings: 35,
          },
        },
        {
          id: '3',
          name: 'Product Three',
          image: '/assets/img/product/product3.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 5,
            noOfRatings: 2,
          },
        },
        {
          id: '4',
          name: 'Product Four',
          image: '/assets/img/product/product4.jpg',
          prices: {
            salePrice: '$30.00',
            price: '$25.00'
          },
          ratings: {
            rating: 3.7,
            noOfRatings: 101,
          },
        },
        {
          id: '1',
          name: 'Product One',
          image: '/assets/img/product/product1.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.8,
            noOfRatings: 3,
          },
        },
        {
          id: '2',
          name: 'Product Two',
          image: '/assets/img/product/product2.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 4.3,
            noOfRatings: 35,
          },
        },
        {
          id: '3',
          name: 'Product Three',
          image: '/assets/img/product/product3.jpg',
          prices: {
            salePrice: '$20.00',
            price: '$26.00'
          },
          ratings: {
            rating: 5,
            noOfRatings: 2,
          },
        },
        {
          id: '4',
          name: 'Product Four',
          image: '/assets/img/product/product4.jpg',
          prices: {
            salePrice: '$30.00',
            price: '$25.00'
          },
          ratings: {
            rating: 3.7,
            noOfRatings: 101,
          },
        },
      ],
    }
  ]

  return <section className="product_section pt-95">
    <div className="container">
      <div className="product_header d-flex justify-content-between mb-45">
        <div className="section_title">
          <h2>best selling items</h2>
        </div>

        <div className="product_tab_btn d-flex">
          <ul className="nav" id="myTab" role="tablist">
            {allTabs.map((tab, index) => {
                return (
                  <li key={`${tab.id}-${index}`}>
                    <a data-bs-toggle="tab" onClick={() => setActiveTab(tab.id)} role="tab" aria-controls={tab.id} aria-selected="false" className={activeTab === tab.id && ' active'}>{tab.title}</a>
                  </li>
                )
              }
            )}
          </ul>
          <div className="all_product">
            <Link href="/shop">All Product</Link>
          </div>
        </div>
      </div>
      <div className="product_container">
        <div className="tab-content">
          {allTabs.map((tab, i) => (
            <div className={`tab-pane ${activeTab === tab.id && ' show active'}`} id={tab.id} role="tabpanel">
              <div className="row">
                {
                  tab.products?.map((product, index) => {
                    return <div key={`${tab.id}-product-${index}`} className="col-md-3">
                      <ProductCard product={product}/>
                    </div>
                  })
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
}
