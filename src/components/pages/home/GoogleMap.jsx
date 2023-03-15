import React from "react";

const GoogleMap = () => {
  return (
    <div className="relative w-full h-96">
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full"
          title="Google Maps"
          src="https://maps.google.com/maps?q=All-Star Academy, Southeast High Point Way, Issaquah, WA, USA&t=&z=10&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <a
          href="https://maps.google.com/maps?q=All-Star Academy, Southeast High Point Way, Issaquah, WA, USA&t=&z=10&ie=UTF8&iwloc=&output=embed"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
