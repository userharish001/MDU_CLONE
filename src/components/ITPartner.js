import React from 'react';

const ITPartner = () => {
  const IT = [
    {
      id: 1,
      img: '/microsoft.png',
      name: 'Microsoft',
      description: 'A global technology company known for software, hardware, and cloud computing solutions.',
    },
    {
      id: 2,
      img: '/cisco.png',
      name: 'Cisco',
      description: 'A leader in networking, cybersecurity, and IT infrastructure solutions.',
    },
    {
      id: 3,
      img: 'dell.png',
      name: 'Dell',
      description: 'A multinational company specializing in computers, servers, and IT services.',
    },
    {
      id: 4,
      img: 'IBM_SPSS.png',
      name: 'SPSS',
      description: 'A software package used for statistical analysis in social sciences and business analytics.',
    },
    {
      id: 5,
      img: 'Fortinet.png',
      name: 'Fortinet',
      description: 'A cybersecurity company providing advanced threat protection and secure networking.',
    },
    {
      id: 6,
      img: 'Vmware.png',
      name: 'VMware',
      description: 'A cloud computing and virtualization technology company enabling digital transformation.',
    },
  ];

  return (
    <div className="bg-white">
      <hr className="border border-gray-700 mb-4" />
      <h2 className="text-center text-2xl font-semibold my-1">IT Technology Partners</h2>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {IT.map((partner) => (
          <div
            key={partner.id}
            className="relative group duration-500 cursor-pointer text-gray-50 h-64 w-72 sm:h-72 sm:w-80 md:h-80 md:w-96 rounded-lg hover:duration-700 overflow-hidden shadow-lg"
          >
            {/* Card Front */}
            <div className="w-full h-full bg-lime-400 text-gray-800 flex flex-col items-center justify-center p-4">
              <img src={partner.img} alt={partner.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-center">{partner.name}</h3>
            </div>

            {/* Card Back (Description) */}
            <div className="absolute bg-gray-50 -bottom-24 w-full p-4 flex flex-col gap-2 group-hover:bottom-0 group-hover:duration-600 duration-500">
              <p className="text-neutral-800 text-sm sm:text-base text-center">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ITPartner;