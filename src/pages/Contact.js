import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { FaHome } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { MdOutgoingMail } from 'react-icons/md'
import {BiInfoCircle} from 'react-icons/bi'


const Contact = () => {
  return (
    <>
      <Meta tite={"Contact Us"} />
      <BreadCrumb tite='Contact Us' />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d342.69276816966067!2d71.49646447994351!3d34.00067418346028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9172bce246329%3A0x201696d920518b0d!2sApptex%20Software%20Solutions!5e0!3m2!1sen!2s!4v1691745229273!5m2!1sen!2s"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrpper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">
                    Contact
                  </h3>
                  <form action="">
                    <div >
                      <input type="text" placeholder='Name' className="form-control" />
                    </div>
                    <div>
                      <input type="text" placeholder='Email' className="form-control" />
                    </div>
                    <div>
                      <input type="text" placeholder='Phone number' className="form-control" />
                    </div>
                    <div>
                      <textarea name="" placeholder='Comment' className='form-control w-100' id="" cols="645" rows="5">
                      </textarea>
                    </div>
                  </form>
                  <div>
                    <button className='button border-0'>Send</button>
                  </div>
                </div>
                <div>
                  <h3 className="contact-title">Get into touch with us</h3>
                  <div>
                    <ul className="ps-0 ">
                      <li className='mb-3 d-flex align-items-center gap-15'> <FaHome className='fs-5' />
                        <address className='mb-0'>
                          33 New Montgomery St.Ste 750 San Francisco, CA, USE 94105
                      </address> </li>
                      <li className='mb-3 d-flex align-items-center gap-15'> <IoIosCall className='fs-5' />
                        <a href="tel-(+92) 3450303902">tel-(+92) 3450303902</a>
                    </li>
                      <li className='mb-3 d-flex align-items-center gap-15'> <MdOutgoingMail className='fs-5' />
                      <a href="wajidullahutk997@gmail.com">wajidullahutk997@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-15'> <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>
                          Monday - Friday 10AM - 8PM
                        </p>
                      </li>
                    </ul>
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
export default Contact;