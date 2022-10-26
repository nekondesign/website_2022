import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <nav className="bg-stone-800 fixed w-full z-10 ">
        <div className="w-full">
          <div className="flex items-center h-12 w-full">
            <div className="flex items-center mx-10  justify-between w-full">
              <div className="pt-1 flex justify-center items-center flex-shrink-0">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/Footer/logo.svg" // Route of the image file
                      height={31.7} // Desired size with correct aspect ratio
                      width={100} // Desired size with correct aspect ratio
                      alt="bcore_logo"
                    />
                  </a>
                </Link>
                <p className="text-white
                 font-ud text-xl pl-4">
                  ビーコア採用サイト
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <Link
                    href="/"
                  >
                    <a className="cursor-pointer hover:bg-lime-500 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  </Link> */}

                </div>
              </div>
            </div>
            <div className="mr-4 flex lg:hidden md:-mt-1">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-rught justify-center rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="bg-white px-2 pt-2 pb-3 sm:px-3 ">
                <Link href="aboutus">
                  <a className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                    ビーコアについて
                  </a>
                </Link>
                <Link href="solutions">
                  <a className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                    提供するソリューション
                  </a>
                </Link>
                <Link href="system">
                  <a className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                    ビーコアを支える仕事
                  </a>
                </Link>
                <Link href="staff">
                  <a className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                    スタッフ紹介
                  </a>
                </Link>
                <Link href="privacy">
                  <a className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                    採用活動における個人情報の取り扱いについて
                  </a>
                </Link>
                <Link href="application">
                  <a className="bg-gray-200 cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                    募集要項
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
