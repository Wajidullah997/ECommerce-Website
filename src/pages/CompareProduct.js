import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Color from '../components/Color';
const CompareProduct = () => {
    return (
        <>
            <Meta tite={"Compare Products"} />
            <BreadCrumb tite='Compare Products' />
            <div className="compare-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='compare-product-card position-relative'>
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />    
                                <div className="product-carg-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Honor T1 7.1 1GB RAM 8 GB ROM 7 Inch With Wi-fI+3G Tablet
                                    </h5>                                  
                                        <h6 className='price mb-3 mt-3'>$100.00</h6>
                                  <div>
                                    <div className="product-detail ">
                                        <h6>Brand:</h6>
                                            <p>Havells</p>
                                        </div>
                                        <div className="product-detail ">
                                        <h6>Type</h6>
                                            <p>Tablet Computers</p>
                                        </div>
                                        <div className="product-detail ">
                                        <h6>SKU</h6>
                                            <p>SKUO33</p>
                                        </div>
                                        <div className="product-detail ">
                                        <h6>Availability</h6>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail ">
                                        <h6>Color</h6>
                                        <Color/>
                                        </div>
                                        <div className="product-detail ">
                                        <h6>Size</h6>
                                            <p>S M L</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className='compare-product-card position-relative'>
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />    
                                <div className="product-carg-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Honor T1 7.1 1GB RAM 8 GB ROM 7 Inch With Wi-fI+3G Tablet
                                    </h5>                                  
                                        <h6 className='price mb-3 mt-3'>$100.00</h6>
                                  <div>
                                    <div className="product-detail ">
                                        <h6>Brand:</h6>
                                            <p>Havells</p>
                                        </div>
                                        <div className="product-detail ">
                                        <h6>Type</h6>
                                            <p>Tablet Computers</p>
                                        </div>
                                        <div className="product-detail ">
                                        <h6>SKU</h6>
                                            <p>SKUO33</p>
                                        </div>
                                        <div className="product-detail ">
                                        <h6>Availability</h6>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail ">
                                        <h6>Color</h6>
                                        <Color/>
                                        </div>
                                        <div className="product-detail ">
                                        <h6>Size</h6>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                                <p>L</p>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </>     
    );
};
export default CompareProduct;