import React from 'react';

type BannerSectionProps = {
  type?: string;
  title?: string;
}

export const BannersSection = (props: BannerSectionProps) => {
  const {type = 'one', title} = props;
  switch (type) {
    case 'two' : {
      return (<section className="banner_section pt-75 pb-100">
        <div className="container">
          {title && <div className="section_title mb-45">
            <h2>{title}</h2>
          </div>
          }
          <div className="banner_container d-flex">
            <figure className="single_banner position-relative me-xs-30 mb-xs-30">
              <img src="/assets/img/bg/bg3.jpg" alt=""/>
              <figcaption className="banner_text position-absolute">
                <h3>Zara Pattern <br/> backpacks</h3>
                <p>Learn How To Make More Money <br/> With Cloth.</p>
                <a className="btn btn-primary" href="shop.html">Shop Now</a>
              </figcaption>
            </figure>
            <figure className="single_banner position-relative">
              <img src="/assets/img/bg/bg4.jpg" alt=""/>
              <figcaption className="banner_text position-absolute">
                <h3>Basic Color Caps</h3>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>);
    }

    default : {
      return <section className="banner_section banner_style2 pt-2">
        <div className="container">
          {title && <div className="pt-75 section_title mb-45">
            <h2>{title}</h2>
          </div>
          }
        </div>
        <div className="container-fluid p-0 overflow-hidden">
          <div className="row g-0">
            <div className="col-lg-6 col-md-6 pe-2 mb-2 mb-md-0">
              <figure className="single_banner position-relative h-100">
                <img className="img-full" src="/assets/img/bg/bg1.jpg" alt=""/>
                <div className="banner_text position-absolute">
                  <h3>Minimalist <br/> sneaker</h3>
                  <p>Stretch, fresh-cool help you alway <br/> comfortable</p>
                  <a className="btn btn-primary" href="shop.html">Shop Now</a>
                </div>
                <div className="banner_tag">
                  <span>new arrivals <br/> men</span>
                </div>
              </figure>
            </div>
            <div className="col-lg-6 col-md-6">
              <figure className="single_banner position-relative">
                <img className="img-full" src="/assets/img/bg/bg2.jpg" alt=""/>
                <div className="banner_text position-absolute text__style2">
                  <h3><span>50%</span> OFF <br/> for Autumn</h3>
                  <p>Shoes Will Make You Tons Of Cash. <br/> Heres How!</p>
                  <a className="btn btn-primary" href="shop.html">Shop Now</a>
                </div>
                <div className="banner_tag">
                  <span>mega sale</span>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
    }
  }
}
