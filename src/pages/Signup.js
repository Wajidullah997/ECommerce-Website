import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
const Signup = () => {
    return (
        <>
            <Meta tite={"Sign Up"} />
            <BreadCrumb tite='Sign Up' />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Create Account</h3>
                                <form action="" className='d-flex flex-column gap-30'>
                                    <div>
                                        <input name='name' type="text" className='form-control' placeholder='First name' />
                                    </div>
                                    <div>
                                        <input name='name' type="text" className='form-control' placeholder='Last name' />
                                    </div>
                                    <div>
                                        <input name='email' type="email" className='form-control' placeholder='Email' />
                                    </div>
                                    <div>
                                        <input name='password' type="password" className='form-control' placeholder='Password' />
                                    </div>
                                    <div>
                                     
                                        <div className=' d-flex gap-15 flex-column align-items-center justify-content-center mt-3'>
                                            <button type='submit' className='button border-0'>Create</button>
                                        
                                         
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

export default Signup;