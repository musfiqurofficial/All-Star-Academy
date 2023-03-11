import React from "react";
import banner from "../../../assets/Home-Page/Banner/cover.webp";
const AboutCover = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "450px",
                }}
            >
                <h4 className="text-5xl text-center text-white p-52 font-semibold">
                    ABOUT US
                </h4>
            </div>
        </div>
    );
};

export default AboutCover;