import Image from "next/image";
import React from "react";

const images = [
  { id: 1, imgPath: "/gallery1.jpg" },
  { id: 2, imgPath: "/gallery2.jpg" },
  { id: 3, imgPath: "/gallery4.jpg" },
  { id: 4, imgPath: "/gallery5.jpg" },
  { id: 5, imgPath: "/gallery6.jpg" },
  { id: 6, imgPath: "/gallery7.jpeg" },
  { id: 7, imgPath: "/gallery8.jpg" },
  { id: 8, imgPath: "/gallery9.jpg" },
  { id: 9, imgPath: "/gallery10.jpeg" },
  { id: 10, imgPath: "/gallery11.jpg" },

];

const Gallery = () => {
  return (
   <>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0 pb-5">
      {images.map((image) => (
        <div key={image.id} className="w-80 h-48 md:h-60 lg:h-80 overflow-hidden">
          <img 
            src={image.imgPath}
            alt={`Gallery Image ${image.id}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
    </div>
    <hr className="border border-gray-700"/>
   </>
  );
};

export default Gallery;
