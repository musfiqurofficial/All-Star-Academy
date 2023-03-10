import React from 'react';
import ac from '../../../assets/Admisstios/ac.webp'

const AdmissionsCover = () => {
    return (
        <div className='bg-blue-600'>
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${ac})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "450px",
                }}
            >
                <p className="text-5xl text-start text-white p-32 font-semibold">Admissions <br />
                    <span className='font-medium text-lg'>Open Enrollment</span>
                </p>

            </div>

        </div>
    );
};

export default AdmissionsCover;