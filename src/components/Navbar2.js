'use client';
import { useState } from 'react';
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
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const Academics = [
  { name: 'Faculties', href: '#',  },
  { name: 'Academic Calender',  href: '#',},
  { name: 'Affiliated Colleges',  href: '#' },
  { name: 'Agenda(AC/EC/Court/FC)',href: '#',  },
  { name: 'Cells', href: '#', icon: ArrowPathIcon },
  { name: 'Ch. Ranbir Singh Institute of Social and Economic Change', href: '#'},
  { name: 'Chairs/Centre',  href: '#' },
  { name: 'Courses of other Universities Equivalent to MDU Courses', href: '#'},
  { name: 'Date-Ph.D. Scholars',  href: '#'},
  { name: 'Department of Alumni Relations',href: '#'},
  { name: 'Departments',  href: '/Departments'}, 
];


export default function Navbar2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Navigation Bar */}
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-blue-500 hover:bg-gray-200 p-2 rounded-lg">
            Home
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 hover:text-blue-500 hover:bg-gray-200 p-2 rounded-lg">
              Academics
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute top-full z-10 mt-3 w-64 rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {Academics.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-4 rounded-lg p-3 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-blue-500 hover:bg-gray-200 p-2 rounded-lg">
            University Profile
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-blue-500 hover:bg-gray-200 p-2 rounded-lg">
            Administration
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-blue-500 hover:bg-gray-200 p-2 rounded-lg">
            Central Facilities
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-blue-500 hover:bg-gray-200 p-2 rounded-lg">
            Admissions
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-blue-500 hover:bg-gray-200 p-2 rounded-lg">
            Examinations
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-blue-500 hover:bg-gray-200 p-2 rounded-lg">
            Library
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-blue-500 hover:bg-gray-200 p-2 rounded-lg">
            Har Ghar Tiranga
          </Link>
        </PopoverGroup>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
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
                    Academics
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {Academics.map((item) => (
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
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  University Profile
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Administration
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Central Facilities
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Admissions
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Examinations
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Library
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Har Ghar Tiranga
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}