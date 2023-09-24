import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';

const ShippingPolicy = () => {
  return (
    <>
      <Meta tite={"Shipping Policy"} />
      <BreadCrumb tite='Shipping Policy' />
      <div className="policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
              </div>
            </div>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;