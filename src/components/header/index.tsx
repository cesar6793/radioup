/* eslint-disable react/display-name */
"use client";

import { forwardRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "./index.scss";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const MyCustomButton = forwardRef(function (props, ref) {
    return (
      <p
        className="text-[28px] hover:text-[#F180D9] cursor-pointer hidden md:block"
        // ref={ref}
        {...props}
      />
    );
  });

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isSidebarOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <header className="md:h-[84px] sticky top-0 z-50 bg-white">
        <div className="max-w-screen-xl flex justify-between items-center py-2 px-4 h-full md:px-20">
          <div className="flex items-center">
            <div
              className="cursor-pointer mr-5 md:mr-8"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 25"
                fill="none"
                className="w-6 md:w-9"
              >
                <path
                  d="M20.05 11.5H3.95C3.42533 11.5 3 11.9253 3 12.45V12.55C3 13.0747 3.42533 13.5 3.95 13.5H20.05C20.5747 13.5 21 13.0747 21 12.55V12.45C21 11.9253 20.5747 11.5 20.05 11.5Z"
                  fill="#F1557D"
                />
                <path
                  d="M20.05 16.5H3.95C3.42533 16.5 3 16.9253 3 17.45V17.55C3 18.0747 3.42533 18.5 3.95 18.5H20.05C20.5747 18.5 21 18.0747 21 17.55V17.45C21 16.9253 20.5747 16.5 20.05 16.5Z"
                  fill="#F1557D"
                />
                <path
                  d="M20.05 6.5H3.95C3.42533 6.5 3 6.92533 3 7.45V7.55C3 8.07467 3.42533 8.5 3.95 8.5H20.05C20.5747 8.5 21 8.07467 21 7.55V7.45C21 6.92533 20.5747 6.5 20.05 6.5Z"
                  fill="#F1557D"
                />
              </svg>
            </div>

            <Link href="/">
              <Image
                src="/logo-blue2.svg"
                width={132}
                height={100}
                alt="logo"
                className="w-20 md:w-32"
              />
            </Link>

            {/* text */}
            <div className="text-xs self-end ml-4 hidden lg:block">
              <span>RadioUPC2024</span>
              <Link
                href="/#metodologia"
                className="text-[#2344C4] underline ml-2"
              >
                siempre <strong>a la vanguardia de la tecnologia</strong>
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <a
              className="bg-eusebio-rojo-300 flex rounded-full text-white p-2 items-center bg-eusebio-red-400 hover:bg-eusebio-red-500"
              href="/admision"
            >
              <span className="w-7 h-7 border-white border-2 rounded-full flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M10.693 6.69297L7.34193 10.044C7.23701 10.149 7.09471 10.2079 6.94632 10.2079C6.79794 10.2079 6.65563 10.149 6.55071 10.044C6.44579 9.93911 6.38684 9.7968 6.38684 9.64842C6.38684 9.50004 6.44579 9.35773 6.55071 9.25281L8.94812 6.85633H2.10636C1.95824 6.85633 1.81618 6.79749 1.71144 6.69275C1.60669 6.58801 1.54785 6.44595 1.54785 6.29782C1.54785 6.1497 1.60669 6.00764 1.71144 5.9029C1.81618 5.79816 1.95824 5.73931 2.10636 5.73931H8.94812L6.55164 3.34144C6.44672 3.23652 6.38777 3.09421 6.38777 2.94583C6.38777 2.79745 6.44672 2.65514 6.55164 2.55022C6.65656 2.4453 6.79887 2.38635 6.94725 2.38635C7.09564 2.38635 7.23794 2.4453 7.34286 2.55022L10.6939 5.90128C10.746 5.95324 10.7873 6.01497 10.8155 6.08294C10.8436 6.1509 10.8581 6.22376 10.858 6.29732C10.8579 6.37088 10.8433 6.4437 10.815 6.5116C10.7866 6.5795 10.7452 6.64114 10.693 6.69297Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p className="font-black text-[13px] font-eusebio-title">
                Admisiones
              </p>
            </a>
          </div>
        </div>
      </header>

      {/* overlay */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } fixed w-full h-full bg-black bg-opacity-50 top-0 left-0 z-50`}
        onClick={toggleSidebar}
      ></div>
      {/* sidebar */}
      <div
        className={`flex flex-wrap ${
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-96 lg:-translate-x-[800px]"
        }  bg-eusebio-blue-200 max-w-sm w-full h-full z-50 top-0 left-0 overflow-auto transition-transform duration-300 ease-in-out fixed lg:max-w-3xl`}
      >
        <div className="px-4 hidden md:block absolute w-full h-100 inset-0">
          <img
            className="w-full h-full object-fill"
            src="/general/linear.svg"
            alt=""
          />
        </div>

        <div className="z-10 w-full lg:w-1/2">
          <div className="px-4 py-8 flex justify-between items-center">
            <Image src="/logo.svg" width={115} height={100} alt="logo" />
            <span onClick={toggleSidebar} className="lg:absolute lg:right-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4132 9.0867C11.0341 8.73342 10.5327 8.5411 10.0145 8.55024C9.49639 8.55938 9.00203 8.76928 8.63559 9.13571C8.26916 9.50215 8.05926 9.99651 8.05012 10.5146C8.04097 11.0328 8.2333 11.5342 8.58658 11.9134L13.1732 16.5L8.58658 21.0867C8.2333 21.4658 8.04097 21.9673 8.05012 22.4854C8.05926 23.0036 8.26916 23.4979 8.63559 23.8644C9.00203 24.2308 9.49639 24.4407 10.0145 24.4498C10.5327 24.459 11.0341 24.2667 11.4132 23.9134L15.9999 19.3267L20.5866 23.9134C20.9657 24.2667 21.4672 24.459 21.9853 24.4498C22.5034 24.4407 22.9978 24.2308 23.3642 23.8644C23.7307 23.4979 23.9406 23.0036 23.9497 22.4854C23.9589 21.9673 23.7665 21.4658 23.4132 21.0867L18.8266 16.5L23.4132 11.9134C23.7665 11.5342 23.9589 11.0328 23.9497 10.5146C23.9406 9.99651 23.7307 9.50215 23.3642 9.13571C22.9978 8.76928 22.5034 8.55938 21.9853 8.55024C21.4672 8.5411 20.9657 8.73342 20.5866 9.0867L15.9999 13.6734L11.4132 9.0867Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>

          {/* links */}
          <div className="lg:mt-[77px] flex flex-col">
            <ul className="eusebio-header-ul text-white text-[28px] flex flex-col gap-7 lg:gap-10">
              <li className="min-h-20">
                <Link
                  href="/admision"
                  onClick={toggleSidebar}
                  className="px-4 text-lg font-eusebio-title hover:text-[#F180D9] lg:text-[28px]"
                >
                  Pacientes
                </Link>
                <hr className="mt-7 opacity-40 border-[1.5px] lg:hidden" />
              </li>
              <div className="hidden lg:flex flex-col">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="px-4 flex w-full justify-between text-left items-center">
                        <span className="">Clinicas asociadas</span>
                        <ChevronDownIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-[28px] w-[28px] text-eusebio-red-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-200 mt-4">
                        <ul className="mt-0 text-base flex flex-col gap-4">
                          <li className="hover:text-[#F180D9]">
                            <Link
                              className="px-4 hover:text-[#F180D9]"
                              href="/inicial"
                              onClick={toggleSidebar}
                            >
                              Auna
                            </Link>
                          </li>
                          <Link
                            href="/primaria"
                            onClick={toggleSidebar}
                            className="px-4 hover:text-[#F180D9]"
                          >
                            Internacional
                          </Link>
                          <Link
                            href="/secundaria"
                            onClick={toggleSidebar}
                            className="px-4 hover:text-[#F180D9]"
                          >
                            SAS
                          </Link>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

              <div className="lg:hidden flex-col">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="px-4 flex w-full justify-between text-left items-center">
                        <span className="text-lg hover:text-[#F180D9] lg:text-[28px]">
                          Excelencia académica
                        </span>
                        <ChevronDownIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-[28px] w-[28px] text-eusebio-red-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-200 mt-4">
                        <ul className="mt-0 text-base flex flex-col gap-4">
                          <li>
                            <Link
                              className="px-4 hover:text-[#F180D9]"
                              href="/inicial"
                              onClick={toggleSidebar}
                            >
                              Primeros años
                            </Link>
                          </li>
                          <Link
                            href="/primaria"
                            onClick={toggleSidebar}
                            className="px-4 hover:text-[#F180D9]"
                          >
                            Escuela primaria
                          </Link>
                          <Link
                            href="/secundaria"
                            onClick={toggleSidebar}
                            className="px-4 hover:text-[#F180D9]"
                          >
                            Escuela secundaria
                          </Link>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <hr className="mt-7 opacity-40 border-[1.5px] lg:hidden" />
              </div>
              <li>
                <Link
                  href="/esencial-para-padres"
                  onClick={toggleSidebar}
                  className="px-4 text-lg hover:text-[#F180D9] lg:text-[28px]"
                >
                  Radiologos
                </Link>
                <hr className="mt-7 opacity-40 border-[1.5px] lg:hidden" />
              </li>
              <li>
                <Link
                  href="/nuestros-campus"
                  onClick={toggleSidebar}
                  className="px-4 text-lg hover:text-[#F180D9] lg:text-[28px]"
                >
                  Nuestra empresa
                </Link>
                <hr className="px-4 mt-7 opacity-40 border-[1.5px] lg:hidden" />
              </li>
              <li>
                <Link
                  href="contactanos"
                  onClick={toggleSidebar}
                  className="px-4 text-lg hover:text-[#F180D9] lg:text-[28px]"
                >
                  Contáctanos
                </Link>
                <hr className="px-4 mt-7 opacity-40 border-[1.5px] lg:hidden" />
              </li>
            </ul>

            {/* intranet */}
            <ul className="mt-4 text-white opacity-60 text-base flex flex-col gap-4 pl-4 lg:hidden">
              <li className="hover:text-[#F180D9] hover:opacity-100">
                <a href="">Intranets</a>
              </li>
              {/* <li className='hover:text-[#F180D9]'>
                <a href=''>Intranet para docentes</a>
              </li> */}
              <li className="hover:text-[#F180D9] hover:opacity-1">
                <a href="esencial-para-padres#calendar">Calendario académico</a>
              </li>
              <li className="hover:text-[#F180D9] hover:opacity-1">
                <a href="/#questions">Preguntas frecuentes</a>
              </li>
            </ul>
          </div>

          {/* lienar */}
          {/* <div
            className='bg-no-repeat bg-cover bg-center w-full h-[480px] absolute bottom-0 left-0 z-0 pointer-events-none lg:max-w-[50%]'
            style={{
              backgroundImage: "url('/general/linear.svg')"
            }}
          ></div> */}
        </div>
        <div className="z-10 w-full hidden lg:flex lg:flex-col lg:w-1/2 border-l-2 h-fit border-gray-400/50 px-4 pb-7 lg:mt-[220px]">
          <p className="text-white text-xl pl-4 hidden md:block">
            Enlaces adicionales
          </p>
          <ul className="mt-4 text-white opacity-70 text-base hidden flex-col gap-4 pl-4 lg:flex">
            <li className="hover:text-[#F180D9] hover:opacity-100">
              <a href="">Intranet</a>
            </li>
            {/* <li className='hover:text-[#F180D9]'>
              <a href=''>Intranet para docentes</a>
            </li> */}
            <li className="hover:text-[#F180D9] hover:opacity-1">
              <a href="esencial-para-padres#calendar">Calendario académico</a>
            </li>
            <li className="hover:text-[#F180D9] hover:opacity-1">
              <a href="/#questions">Preguntas frecuentes</a>
            </li>
          </ul>
        </div>
        {/* <div className='h-[90%] w-2 bg-white '></div> */}
      </div>
    </>
  );
};

export default Header;
