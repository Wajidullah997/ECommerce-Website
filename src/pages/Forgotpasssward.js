import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
const Forgotpasssward = () => {
    return (
        <>
            <Meta tite={"Forgot Password"} />
            <BreadCrumb tite='Forgot Password' />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Reset Your Passward</h3>
                         <p className='text-center mt-2 mb-3'> we will send you an email to reset your passward</p>
                                <form action="" className='d-flex flex-column gap-30'>
                                    <div>
                                        <input name='email' type="email" className='form-control' placeholder='Email' />
                                    </div>
                                    <div>
                                     
                                        <div className=' d-flex gap-15 flex-column align-items-center justify-content-center mt-3'>
                                            <button type='submit' className='button border-0'>Submit</button>
                                        
                                            <Link to='/login'>Cancel</Link>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Forgotpasssward;