import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad $13+ Pro.</h5>
                  <p>Form $999.00 or $ 41.62/mo,</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src="images/catbanner-01.jpg"
                    className='img-fluid rounded-3'
                    alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptop Max</h5>
                    <p>Form $999.00 or <br /> $ 41.62/mo,</p>
              
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-02.jpg"
                    className='img-fluid rounded-3'
                    alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smarwatch 7</h5>
                    <p>Shop the latest band<br />
                      styles and colors.</p>
              
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-03.jpg"
                    className='img-fluid rounded-3'
                    alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad  Air</h5>
                    
                    <p>From $599 or <br />
                      $49.91/mo, for 12 mo.</p>
              
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-04.jpg"
                    className='img-fluid rounded-3'
                    alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    
                    <p>Highly-fidelity playback <br />
                      & ultra-low distortion</p>
              
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hom2-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between ">
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all ordersover $100</p>
                  </div></div>
                <div className='d-flex align-items-center gap-15'><img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily surprise Offers</h6>
                    <p className='mb-0'>Save up tp 25% off</p>
                  </div></div>
                <div className='d-flex align-items-center gap-15'><img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div></div>
                <div className='d-flex align-items-center gap-15'><img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory direct price</p>
                  </div></div>
                <div className='d-flex align-items-center gap-15'><img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex  align-items-center justify-content-between flex-wrap">
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div >
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div >
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart watched</h6>
                    <p>10 items</p>
                  </div >
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div >
                  <img src="images/headphone.jpg" alt="" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div >
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div >
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart watched</h6>
                    <p>10 items</p>
                  </div >
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div >
                  <img src="images/headphone.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Featured Collection
              </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous.png" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo.for 24mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous.png" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>STUDIO DISPLAY</h5>
                  <h6>600 nits of brightness</h6>
                  <p>27 inch 5k Rentina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous.png" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>SMRTPHONES</h5>
                  <h6>Smartphone 13 Pro</h6>
                  <p>Now in Green From $999.00 or <br />
                    $41.00/mo for 24/mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous.png" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>HOME SPEAKERS</h5>
                  <h6>Room-filling</h6>
                  <p>From $399 or $11</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Special Products
              </h3>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our popular product
              </h3>
            </div>
          </div>
          <div className="row">
             
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marquee-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'><img src="images/brand-01.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-02.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-03.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-04.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-05.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-06.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-07.png" alt="brand" /></div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our Latest Blogs
              </h3>
            </div>
              
       
          </div>
          <div className="row">
            <div className="col-3">
              
              <BlogCard />
            
            </div>
            <div className="col-3">
   
              <BlogCard />
            </div>
            <div className="col-3">
              
              <BlogCard />
            </div>
            <div className="col-3">
              
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
      
    </>

  );
};
export default Home;