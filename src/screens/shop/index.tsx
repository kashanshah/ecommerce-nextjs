import {PageWrapper} from '../../layouts/page-wrapper';
import {Header} from "../../layouts/header/header";
import {trans} from "../../utils/trans";
import {constants} from "../../utils/constants";
import {Footer} from "../../layouts/footer";
import {SubscribeToNewsletter} from "../../components/subscribe-to-newsletter";
import React, {useState} from "react";
import {Select} from "antd";
import {ProductCard} from "../../components/product/card";
import {Breadcrumb} from "../../components/breadcrumb";
import {products} from "../../utils/data";

export const ShopScreen = () => {

  const [isGrid, setIsGrid] = useState(true);

  return (
    <PageWrapper>
      <Header title={trans(constants?.seo?.title)}/>
      <div className="shop_section shop_reverse pt-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                <Breadcrumb routes={[
                  {
                    path: '/home',
                    breadcrumbName: 'Home',
                  },
                  {
                    path: 'shop',
                    breadcrumbName: 'Shop',
                  },
                ]}/>

              <div className="shop_banner d-flex align-items-center" style={{background: 'url("/assets/img/bg/shop_bg.jpeg")', backgroundSize: 'cover'}}>
                <div className="shop_banner_text">
                  <h2>essential <br/> wears</h2>
                  <p>The collections basic items <br/> essential for all girls</p>
                </div>
              </div>
              <div className="shop_toolbar_wrapper d-flex justify-content-between align-items-center">
                <div className="page_amount">
                  <p><span>1.260</span> Products Found</p>
                </div>
                <div className=" sorting_by d-flex align-items-center">
                  <span style={{marginInlineEnd: 15}}>SORT BY :</span>
                  <form className="select_option" action="#">
                    <Select id="short" style={{minWidth: 170}} defaultValue={'popularity'}>
                      <Select.Option value='popularity'>Popularity</Select.Option>
                      <Select.Option value='price-asc'>Price: Low to High</Select.Option>
                      <Select.Option value='price-desc'>Price: High to Low</Select.Option>
                    </Select>
                  </form>
                </div>
                <div className="toolbar_btn_wrapper d-flex align-items-center">
                  <div className="view_btn">
                    <a className="view" href="#">VIEW</a>
                  </div>
                  <div className="shop_toolbar_btn">
                    <ul className="d-flex align-items-center">
                      <li>
                        <a onClick={() => setIsGrid(true)} className={`btn-grid-3 ${isGrid && ' active'}`}>
                          <i className="ion-grid"/>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => setIsGrid(false)} className={`btn-list ${!isGrid && ' active'}`}>
                          <i className="ion-navicon"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`row shop_wrapper ${isGrid ? 'grid_3' : 'grid_list'}`}>
                <div className="row">
                  {
                    products?.map((product, index) => {
                      return <div key={`shop-product-${index}`} className={isGrid ? 'col-lg-4 col-md-4 col-sm-6' : 'col-12'}>
                        <ProductCard product={product}/>
                      </div>
                    })
                  }
                </div>
              </div>
              <div className="pagination_style pagination justify-content-center">
                <ul className="d-flex">
                  <li><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                  <li><a href="#">1</a></li>
                  <li><a className="current" href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <SubscribeToNewsletter/>
      <Footer/>
    </PageWrapper>
  );
};
