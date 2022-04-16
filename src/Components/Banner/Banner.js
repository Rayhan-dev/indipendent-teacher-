import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container banner '>
            <div className="row ">
                <div className="col-md-5 my-auto">
                    <h1 className='text-primary text-start'>Best Tutor Focused on your Success</h1>
                </div>
                <div className="col-md-7 my-auto">
                    <img className='img-fluid' src="/images/bannerImage.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;