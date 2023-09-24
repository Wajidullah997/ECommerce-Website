import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={` ${location.pathname == "/store" ? `gr-${grid}`: "col-3" }`}>
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                     <Link>
                        <img src="images/wish.svg" alt="" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" className='img-fluid' alt="product image" />
                    <img src="images/watch-1.png" className='img-fluid' alt="product image" />

               </div>
                <div className="product-details">
                    <h6 className='brand'>Havells</h6>
                    <h5 className='title'>Kids Headphones Bulk 10 <br />
                        Pack Multi Colored For...</h5>
                        <ReactStars edit={false} count={5} size={24} value={3} activeColor="#ffd700" />
                        <p className={`description ${grid== 12 ? "d-block" : "d-none"}`} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Magnam nemo minima molestias optio
                            asperiores sunt dolor aliquam quos. Itaque, modi.
                        </p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column">
                        <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="addcart" />
                        </Link>
                    </div>
                </div>          
            </div>
            </div>
            <div className={` ${location.pathname == "/store" ? `gr-${grid}`: "col-3" }`}>
            <Link to=':id' className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                     <Link>
                        <img src="images/wish.svg" alt="" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" className='img-fluid' alt="product image" />
                    <img src="images/watch-1.png" className='img-fluid' alt="product image" />

               </div>
                <div className="product-details">
                    <h6 className='brand'>Havells</h6>
                    <h5 className='title'>Kids Headphones Bulk 10 <br />
                        Pack Multi Colored For...</h5>
                        <ReactStars edit={false} count={5} size={24} value={3} activeColor="#ffd700" />
                        <p className={`description ${grid== 12 ? "d-block" : "d-none"}`} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Magnam nemo minima molestias optio
                            asperiores sunt dolor aliquam quos. Itaque, modi.
                        </p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column">
                        <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="addcart" />
                        </Link>
                    </div>
                </div>          
            </Link>
            </div>
          
        </>   
    );
};
export default ProductCard