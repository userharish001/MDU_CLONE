"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Courses = [
  {
    course_name: "Bachelor of Arts (BA)",
    duration: "3 years",
    level: "Undergraduate",
    description: "A program offering various specializations in humanities and social sciences."
  },
  {
    course_name: "Bachelor of Science (BSc)",
    duration: "3 years",
    level: "Undergraduate",
    description: "A course providing specializations in fields like Physics, Chemistry, Mathematics, and more."
  },
  {
    course_name: "Bachelor of Commerce (BCom)",
    duration: "3 years",
    level: "Undergraduate",
    description: "A program focusing on commerce, finance, and accounting subjects."
  },
  {
    course_name: "Bachelor of Technology (BTech)",
    duration: "4 years",
    level: "Undergraduate",
    description: "An engineering program with specializations such as Computer Science, Mechanical, Civil, etc."
  },
  {
    course_name: "Bachelor of Laws (LLB)",
    duration: "3 years",
    level: "Undergraduate",
    description: "A professional law degree covering various aspects of legal studies."
  },
  {
    course_name: "Master of Business Administration (MBA)",
    duration: "2 years",
    level: "Postgraduate",
    description: "A program designed to develop managerial skills across various business domains."
  },
  {
    course_name: "Master of Science (MSc)",
    duration: "2 years",
    level: "Postgraduate",
    description: "An advanced science program specializing in research and technical knowledge."
  },
  {
    course_name: "Master of Commerce (MCom)",
    duration: "2 years",
    level: "Postgraduate",
    description: "A course focused on advanced concepts in commerce, business, and finance."
  },
  {
    course_name: "Doctor of Philosophy (PhD)",
    duration: "Varies",
    level: "Doctorate",
    description: "A research-based program leading to expertise in a specialized field of study."
  }
];

export default function ProgramOffers() {
  return (
    <>
      <h2 className="text-center px-3 py-7 text-2xl sm:text-3xl font-semibold">Programmes Offered</h2>
      <Swiper
        slidesPerView={1} // 1 slide on mobile
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        loop={false} // Disable loop mode to prevent slide duplication
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 2, // 2 slides on tablets
          },
          1024: {
            slidesPerView: 3, // 3 slides on desktops
          },
        }}
      >
        {Courses.map((course, index) => (
          <SwiperSlide key={index} className="course-slide">
            <div className="w-full sm:w-64 bg-white shadow-lg p-4 sm:p-6 space-y-3 relative overflow-hidden rounded-lg">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-violet-500 rounded-full absolute -right-4 sm:-right-5 -top-4 sm:-top-7 flex items-center justify-center">
                <p className="text-white text-xl sm:text-2xl font-bold">{index + 1}</p>
              </div>
              <div className="fill-violet-500 w-8 sm:w-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M24,6.928V20H12.5v3h5v1H6.5v-1h5v-3H0V4.5C0,3.122,1.122,2,2.5,2h12.98c-.253.295-.54.631-.856,1H2.5C1.673,3,1,3.673,1,4.5V19h22V8.007L24,6.928ZM11.251,10.022c7.807-9.059,7.842-9.095,7.859-9.112,1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281H5.909l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378C12.878,16,14,14.879,14,13.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg sm:text-xl">{course.course_name}</h3>
              <p className="text-sm text-gray-600 leading-6">
                <strong>Duration:</strong> {course.duration}
              </p>
              <p className="text-sm text-gray-600 leading-6">
                <strong>Level:</strong> {course.level}
              </p>
              <p className="text-sm text-gray-600 leading-6">{course.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}