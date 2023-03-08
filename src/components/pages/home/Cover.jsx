import React from 'react';
import banner from "../../../assets/Home-Page/Banner/banner.png"

const Cover = () => {
    return (
        <div className='my-2' style={{
            background: ` url(${banner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "450px",
            padding: "1px",



        }}>
            <div>
                <h2 className='text-3xl text-white text-center p-60 font-semibold'>DEVELOPING EACH CHILD TO THEIR POTENTIAL</h2>
            </div>

        </div>
    );
};

export default Cover;