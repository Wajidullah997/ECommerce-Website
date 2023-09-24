import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';

import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'

const SingleBlog = () => {
  return (
    <>
       <Meta tite={"Dynamic Blog Name"} />
            <BreadCrumb tite="Dynamic Blog Name" />   
            <div className="blog-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
              <div className='Single-blog-card mb-3'>
              
                                <h3 className="title"> A Beautiful Sunday Morning Renaissance
                                </h3>
                <img src="images/blog" className='img-fluid w-100 my-4' alt="blog" />
                <p>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Itaque sit magni,
                  distinctio facere molestias minus odit
                  delectus quae id non recusandae assumenda
                  inventore necessitatibus maxime quod
                  veritatis fuga consectetur neque
                  doloremque magnam quam deserunt
                  quibusdam impedit voluptatum. Quod
                  exercitationem rerum, sed voluptatum
                  doloremque iusto
                  illo consectetur, rem sit laudantium voluptates!</p>
                <div>  <Link to='/blog' className='d-flex align-items-center gap-10'><BsArrowLeft/>Go back to Blogs</Link></div>
                          </div>
                          </div>
                      <div className="col-9">
                          
                         
                          </div>
                     
                  </div>
              </div>
           </div>
 </>
  )
}

export default SingleBlog
