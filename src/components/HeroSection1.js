'use client';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const imagesData = [
  { id: 1, imgPath: '/poster1.jpg', desc: 'Gujrat Governor Acharya Devvrat urges girl students to come forward to establish natural farming as a mission across the country. Neural Farming : Nourishing Life Sustaining Nature' },
  { id: 2, imgPath: '/poster2.jpg', desc: 'Haryana Governor Sh. Bandaru Dattatreya Inaugurated Sardar Vallabhbhai Patel Cricket Stadium at MDU Sports Complex' },
  { id: 3, imgPath: '/poster3.jpg', desc: 'Swami Vivekananda Jayanti : National Youth Day स्वामी विवेकानंद जयंती : राष्ट्रीय युवा दिवस' },
  { id: 4, imgPath: '/poster4.jpg', desc: 'संविधान गौरव समारोह तथा राष्ट्रीय युवा दिवस समारोह' },
  { id: 5, imgPath: '/poster6.jpg', desc: 'Unifest-2023' },
  { id: 6, imgPath: '/poster7.jpg', desc: 'Running Event' },
  { id: 7, imgPath: '/Secretariat.jpg', desc: 'Secretariat Building' },
  { id: 8, imgPath: '/Library.jpg', desc: 'Vivekananda Library विवेकानंद पुस्तकालय' },
  { id: 9, imgPath: '/dance.jpg', desc: 'Cultural Activities सांस्कृतिक गतिविधियां' },
  { id: 10, imgPath: '/building.jpg', desc: 'Pariksha Sadan परीक्षा सदन' },
  { id: 11, imgPath: '/ActivityCentre.jpg', desc: 'Student Activity Centre छात्र गतिविधि केंद्र' },
  { id: 12, imgPath: '/running.jpg', desc: 'RUN FOR UNITY एक भारत...श्रेष्ठ भारत' },
];

const HeroSection1 = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
    >
      {imagesData.map((image) => (
        <SwiperSlide key={image.id} className="relative">
          <div className="group relative w-full h-full overflow-hidden">
            {/* Image */}
            <img
              src={image.imgPath}
              alt={image.desc}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay with text */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 sm:h-1/4 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center px-4">
                {image.desc}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection1;