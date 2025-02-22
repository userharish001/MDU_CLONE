"use client";
import React from 'react';

const newsData = [
  {
    id: 1,
    title: "New Scholarship Program Announced",
    date: "2023-10-15",
    content: "The university has announced a new scholarship program for undergraduate students."
  },
  {
    id: 2,
    title: "Campus Renovation Updates",
    date: "2023-10-20",
    content: "The renovation of the main campus building will begin next month."
  },
  {
    id: 3,
    title: "Admission Deadline Extended",
    date: "2023-10-25",
    content: "The admission deadline for the spring semester has been extended to November 15."
  }
];

const eventsData = [
  {
    id: 1,
    title: "Annual Cultural Fest",
    startDate: "2023-11-10",
    endDate: "2023-11-12",
    content: "Join us for the annual cultural fest featuring music, dance, and food from around the world."
  },
  {
    id: 2,
    title: "Tech Symposium 2023",
    startDate: "2023-11-18",
    endDate: "2023-11-19",
    content: "A two-day event showcasing the latest advancements in technology and innovation."
  },
  {
    id: 3,
    title: "Career Fair",
    startDate: "2023-11-25",
    endDate: "2023-11-26",
    content: "Meet top employers and explore job opportunities at the annual career fair."
  }
];

export default function NewsEvents() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 sm:p-6 bg-gray-100">
      {/* News/Updates Section */}
      <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md hover:[&>*]:animation-pause">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center bg-blue-700 text-white py-2 rounded-t-lg">
          News/Updates
        </h1>
        <div className="h-48 sm:h-64 overflow-hidden relative">
          <div className="absolute bottom-0 w-full animate-marquee-vertical">
            {newsData.map((news) => (
              <div key={news.id} className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base font-semibold text-gray-600 hover:text-blue-700 cursor-pointer">
                  {news.content}
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-blue-300 text-blue-800 text-xs px-2 py-1 rounded">Related News</span>
                  <span className="bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded">{news.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-right text-sm hover:text-blue-400 cursor-pointer mt-2">Read more...</p>
      </div>

      {/* Events Section */}
      <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center bg-blue-700 text-white py-2 rounded-t-lg">
          Events
        </h1>
        <div className="h-48 sm:h-64 overflow-hidden relative">
          <div className="absolute bottom-0 w-full animate-marquee-vertical">
            {eventsData.map((event) => (
              <div key={event.id} className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base font-semibold text-gray-600 hover:text-blue-700 cursor-pointer">
                  {event.content}
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-green-400 text-green-800 text-xs px-2 py-1 rounded">
                    {event.startDate} to {event.endDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-right text-sm hover:text-blue-400 cursor-pointer mt-2">Read more...</p>
      </div>
    </div>
  );
}