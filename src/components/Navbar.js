'use client';
import logoImg from '../../public/mdulogo.png';
import youtubeImg from '../../public/youtube.png';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection1 from './HeroSection1';
import Navbar2 from './Navbar2';

const webPortal = [
  { name: 'Samarth Univ. Employee Login', href: "#" },
  { name: 'iLMS (Inflibnet)', href: "#" },
  { name: 'LMS Portal', href: "#" },
  { name: 'College Portal', href: "#" },
  { name: 'e-Rishi ERP', href: "#" },
  { name: 'Centre for Distance and Online Education', href: "#" },
  { name: 'mduonline.net (for College/UTD only)', href: "#" },
  { name: 'preexam.mdurtk.in (for College/UTD only)', href: "#" },
  { name: 'Department of Alumni Relations', href: "#" },
  { name: 'Admission Portal', href: "#" },
  { name: 'Student Portal', href: "#" },
  { name: 'Employee Portal', href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const getGreeting = (hours) => {
      if (hours >= 5 && hours < 12) return "Good Morning";
      if (hours >= 12 && hours < 17) return "Good Afternoon";
      if (hours >= 17 && hours < 21) return "Good Evening";
      return "Good Night";
    };
    return getGreeting(hours);
  };

  return (
    <header className="bg-white">
      {/* Navigation Bar */}
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 bg-gray-200">
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-4 lg:items-center">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-2 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-lg hover:text-blue-700">
              Web Portals
              <ChevronDownIcon aria-hidden="true" className="size-5 text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute top-full left-0 z-10 mt-2 w-72 rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 hover:shadow-lg">
              <div className="p-4 space-y-2">
                {webPortal.map((item) => (
                  <div key={item.name} className="group flex items-center gap-x-4 rounded-lg px-3 py-2">
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="#" className="px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-lg hover:text-blue-700">
            Centre for Distance and Online Education
          </Link>
          <Link href="#" className="px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-lg hover:text-blue-700">
            E-contents
          </Link>
          <Link href="#" className="px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-lg hover:text-blue-700">
            MDU eLibrary
          </Link>
          <Link href="#" className="px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-lg hover:text-blue-700">
            Pay Fee Online through SB Collect
          </Link>
          <button className="flex bg-green-600 items-center gap-x-2 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800 rounded-lg">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
            </span>
            Ph.D Admissions 2024-2025
          </button>
          <Link href="https://www.youtube.com/channel/UC_LJ29unRvGdR9MTyMa-55Q" className="px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-lg">
            <Image src={youtubeImg} alt="youtube-logo" width={50} />
          </Link>
        </PopoverGroup>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={logoImg} alt="logo" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Web Portals
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {webPortal.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Centre for Distance and Online Education
                </Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  E-contents
                </Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  MDU eLibrary
                </Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Pay Fee Online through SB Collect
                </Link>
                <button className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                  </span>
                  Ph.D Admissions 2024-2025
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Header Section */}
      <hr className="border-t-4 border-blue-600" />
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <div className="flex items-center">
          <Image src={logoImg} alt="mduposter" width={130} height={200} className="mx-1 mr-4" />
          <div className="flex flex-col">
            <h2 className="text-violet-900 text-2xl md:text-3xl font-bold">MAHARASHI DAYANAND UNIVERSITY</h2>
            <p className="text-violet-900 text-lg font-bold">Rohtak-124001, Haryana (INDIA)</p>
            <p className="text-green-700 text-sm font-bold">(A State University established under Haryana Act No. XXV of 1975)</p>
            <p className="text-blue-500 text-sm font-bold">'A+' Grade University Accredited by NAAC</p>
          </div>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 md:mr-8 gap-1">
          <h1 className="text-xl md:text-2xl text-gray-800">{formatTime(currentTime)}</h1>
          <h2 className="text-gray-800">{currentTime.toLocaleDateString("en-GB", { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}</h2>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t-4 border-green-600" />
      <p className="p-5">Some text inside this</p>
      <hr className="border-t-2 border-gray-500" />

      {/* Hero Section */}
      <HeroSection1 />
      <Navbar2 />
    </header>
  );
}