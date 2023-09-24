import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';

const Wishlist = () => {
    return (
        <>
            <Meta tite={"Wishlist"} />
            <BreadCrumb tite='Wishlist' />   
            <div className="compare-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative ">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />    
                                <div className="product-carg-image ">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid w-100' />
                                </div>
                                
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                       Beoplay A1 Portable Bluetooth Speaker With Microphone
                                    </h5>                                  
                                    <span> <h6 className='price '>
                                     $500.00</h6> <strike>$7500.00</strike></span>
                                </div>
                                </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative ">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />    
                                <div className="product-carg-image ">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid w-100' />
                                </div>                            
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                       Beoplay A1 Portable Bluetooth Speaker With Microphone
                                    </h5>                                  
                                    <span> <h6 className='price '>
                                     $500.00</h6> <strike>$7500.00</strike></span>
                                </div>
                                </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative ">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />    
                                <div className="product-carg-image ">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid w-100' />
                                </div>                              
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                       Beoplay A1 Portable Bluetooth Speaker With Microphone
                                    </h5>     
                                   <h6 className='price '>
                                            $500.00</h6>
                                        <p> <strike>$7500.00</strike></p>
                                </div>
                                </div>
                          </div>
                        </div>
                    </div>              
            </div>
        </>
    );
};
export default Wishlist