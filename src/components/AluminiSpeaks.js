import Image from "next/image";

const AluminiSpeaks = () => {
  return (
    <div className="p-5">
      <div className="flex justify-center flex-col">
        {/* First Alumni */}
        <div className="flex flex-col md:flex-row px-4 md:px-7 py-4">
          <div className="flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
            <Image
              src="/Yuvraj.jpg"
              alt="Lt Col Yuvraj Malik"
              className="rounded-lg border border-gray-200"
              width={100}
              height={100}
            />
          </div>
          <p className="px-2 text-sm md:text-base text-gray-700">
            It gives me immense pride to affiliate with MDU, Rohtak as my alma mater. I owe my success and professional accomplishments to the strong value system and professionals serving at the university. There is no exaggeration to say that it’s one of the finest cradles of academic excellence, world-class infrastructure, and diversified professional institutes under one umbrella. I convey my heartfelt gratitude and best wishes to the MDU fraternity.
            <span className="block mt-3 text-right text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="inline-block w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                />
              </svg>
              Lt Col Yuvraj Malik, Instructor at Indian Military Academy
            </span>
          </p>
        </div>

        {/* Second Alumni */}
        <div className="flex flex-col md:flex-row px-4 md:px-7 py-4">
          <div className="flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
            <Image
              src="/Monika.jpg"
              alt="Monica IAS"
              className="rounded-lg border border-gray-200"
              width={100}
              height={100}
            />
          </div>
          <p className="px-2 text-sm md:text-base text-gray-700">
            I thank the University English Department Faculty and the Environment of the campus for shaping me and leading me to the position where I am today. I had done my Masters Programme in English from 1988 to 1990 from this university. I feel very happy and elated to be associated with this esteemed University. I am going to perform duties at such a level that all that I have learnt from here will be used to the best. I wish to thank all those who have been a part of my educational journey and influenced my life in every way. The way I have been prepared for my life here will take me a long way. Seeking your blessings for future endeavours! With best wishes.
            <span className="block mt-3 text-right text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="inline-block w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                />
              </svg>
              Monica Malik, I.A.S
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AluminiSpeaks;