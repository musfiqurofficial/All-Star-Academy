import React from 'react';
import banner from '../../../assets/Home-Page/Banner/banner.png'
const AboutCover = () => {
    return (
        <div>
            <div style={{
                background: ` url(${banner})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "450px",
                padding: "1px",



            }}>
                <h4 className='text-5xl text-center text-white p-52 font-semibold'>ABOUT US</h4>
            </div>

        </div>
    );
};

export default AboutCover;