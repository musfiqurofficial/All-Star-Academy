import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import {
  arrayMove,
  SortableContainer,
  SortableElement,
} from "react-sortable-hoc";
import { photos } from "./photos";
import googleReview from "./review-img/review.webp";

const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));

const HomeReview = () => {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  const currentMonth = new Date().toISOString().slice(0, 7);
  const link = `https://calendly.com/brandysimison/60min?month=${currentMonth}`;
  return (
    <div className="mb-20">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-start items-center gap-10 mb-5">
          <img className="lg:w-1/3" src={googleReview} alt="" />
          <h1 className="text-center text-[32px] font-[600] mb-8">
            Our Google Reviews
          </h1>
        </div>
        <div>
          <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
        </div>
      </div>
      <div className="w-10/12 mx-auto text-center mt-5">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 font-light text-sm border border-[#0170B8] text-[#0170B8] hover:bg-[#0170B8] hover:text-white hover:duration-500 uppercase"
          aria-label="Book a tour"
        >
          Book a tour
        </a>
      </div>
    </div>
  );
};

export default HomeReview;
