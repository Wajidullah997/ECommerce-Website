import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    const props = {
        width: 400,
        height: 500,
        zoomWidth: 500,
        img: "https://www.imperialhomes.pk/cdn/shop/products/5_7a98c3d7-abb6-43d1-b94c-2cb47f2d795f.png?v=1649395880"
    };

    const [orderProduct, setorderProduct] = useState(true)
    return (
        <> <Meta tite={"Product Name"} />
            <BreadCrumb tite='Product Name' />
            <div className="policy-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-prodduct-image">
                                <div><ReactImageZoom {...props} /></div>
                                <div className="other-product-images d-flex flex-wrap gap-15">
                                    <div><img src="https://www.imperialhomes.pk/cdn/shop/products/5_7a98c3d7-abb6-43d1-b94c-2cb47f2d795f.png?v=1649395880" className='img-fluid' alt="" /></div>
                                    <div><img src="https://www.imperialhomes.pk/cdn/shop/products/5_7a98c3d7-abb6-43d1-b94c-2cb47f2d795f.png?v=1649395880" className='img-fluid' alt="" /></div>
                                    <div><img src="https://www.imperialhomes.pk/cdn/shop/products/5_7a98c3d7-abb6-43d1-b94c-2cb47f2d795f.png?v=1649395880" className='img-fluid' alt="" /></div>
                                    <div><img src="https://www.imperialhomes.pk/cdn/shop/products/5_7a98c3d7-abb6-43d1-b94c-2cb47f2d795f.png?v=1649395880" className='img-fluid' alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className='border-bottom bor'>
                                    <h3 className='title'>Kids Headphones Bulk 10 pack multi colored for students</h3>
                                </div>
                                <div className="border-bottom">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10 mt-0">
                                        <ReactStars edit={false} count={5} size={24} value={3} activeColor="#ffd700" />
                                        <p className='mb-0'>2 Reviews</p>
                                    </div>
                                    <div className='bor mb-2'>
                                        
                                        <a href="" className='mt-2 '>Write a review</a>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <h4 className='type'>
                                            Type
                                        </h4>
                                        <p className='mb-0'> : Havells</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <h4 className='type'>
                                            Brand
                                        </h4>
                                        <p className='mb-0'> : Havells</p>
                                    </div>
                                    <div className=''>
                                        <h4 className='type'>
                                            Categories :
                                        </h4>
                                        <p className='mb-0'>aiprod, camera's, computers & laptop, headphones, mini speaker, our store, potable speakers, smart Television ,Smartwatches</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 mt-2'>
                                        <h4 className='type'>
                                            Tags :
                                        </h4>
                                        <p className='mb-0 '> headphones  laptops    mobile    oppo   speaker </p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 mt-2'>
                                        <h4 className='type'>
                                            SKU:
                                        </h4>
                                        <p className='mb-0 '> SKU027</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 mt-2'>
                                        <h4 className='type'>
                                            Availability
                                        </h4>
                                        <p className='mb-0 '> 541 In Stock</p>
                                    </div>
                                    <div className=' gap-10 mt-2'>
                                        <h4 className='type'>
                                            Size
                                        </h4>
                                        <div className='d-flex flex-row align-items-center gap-30'>
                                            <p className='mt-2 size mb-0 text-center'> S</p>
                                            <p className='mt-2 sizea mb-0 text-center '> L </p>
                                        </div>
                                    </div>
                                    <div className=' gap-10 mt-2'>
                                        <h4 className='type mt-3'>
                                            Color
                                        </h4>
                                        <div className='d-flex flex-row align-items-center gap-30'>
                                            <span className='badge rounded-circle p-3 bg-danger'>1</span>:


                                        </div>
                                        
                                    </div>
                                    <div className=' gap-15 mt-2 d-flex flex-row align-items-center'>
                                        <h3 className='type'>
                                            Quality
                                        </h3>
                                        <div className='quality gap-30 '>
                                            <input type="number" min={1} max={10} id='' style={{ width: "70px" }} className='form-control' />
                                        </div>
                                        <div className='gap-15 ms-5 d-flex  align-items-center'>
                                        
                                            <button className='button border-0'>ADD TO CART</button>
                                            <button to='/signup' className='button signup border-0 mb-0 gap-30'>Buy It Now</button>
                                     
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex align-items-center gap-15"></div>
                                    <div><a href=""><img src='images/wishlist.svg' alt='wishlist' /> Add To Wishlist</a></div>
                                    {/* <div><a href="">Add To Compare</a></div> */}
                                    <Link>
                                        <img src="images/prodcompare.svg" alt="compare" />
                                    </Link>
                               </div>                                    
                            </div>
                        </div>
                    </div>      
                </div>
            </div>           
            <div className="descrption-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">                           
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Consequuntur illo ratione
                                    eos nobis libero? Adipisci aperiam earum vitae,
                                    tenetur dicta et doloremque repudiandae quos
                                    maiores magnam quidem, laborum voluptatem
                                    eveniet praesentium quas doloribus facere
                                    veritatis enim? Atque architecto rerum illo?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">                           
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars edit={false} count={5} size={24} value={3} activeColor="#ffd700" />
                                            <p className='mb-0'> Based on 2 Review</p>
                                        </div>
                                    </div>
                                    <div>
                                        {orderProduct && (
                                            <div>
                                                <a href="#" className='text-dark text-decoration-underline'>Write a Review</a>
                                            </div>
                                        )}
                                    </div>                                   
                                </div>
                                <div className="review-form py-4 ">
                                    <form action="">
                                        <h4>Write a Review </h4>
                                        <div >
                                            <ReactStars edit={true} count={5} size={24} value={3} activeColor="#ffd700" />
                                        </div>
                                        <div>
                                            <textarea name="" placeholder='Comment' className='form-control w-100' id="" cols="645" rows="5">
                                            </textarea>
                                        </div>
                                    </form>
                                    <div className="bord d-flex justify-content-end">
                                        <button className='button mt-4 ' >Submit Review</button>
                                    </div>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className='mb-0'>Vavdeep</h6>
                                            <ReactStars edit={false} count={5} size={24} value={3} activeColor="#ffd700" />
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae sit suscipit, at molestias perferendis nemo similique odit totam iusto numquam voluptates quod corporis. Non quas dicta esse dolorum fugiat odit!</p>       
                                    </div>
                                </div>
                            </div>
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
          
                    </div>
                </div>
            </section>
            
                        
        </>
    );
};

export default SingleProduct;
