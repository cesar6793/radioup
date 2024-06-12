"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Communications: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="bg-eusebio-blue-300">
      {/* Button to open the modal */}
      <button
        type="button"
        onClick={openModal}
        className="z-10 absolute top-7 right-7 md:top-auto md:bottom-64 md:right-0"
      >
        <div className="flex items-center w-fit px-3 py-2 rounded-[32px] md:mt-4 md:px-4 md:py-3">
          <span className="bg-black p-3 rounded-lg md:hidden text-sm font-normal font-eusebio-paragraph">
            Comunicados
          </span>

          <div className="ml-2 md:ml-0 md:mr-2 p-4 bg-black rounded-full">
            <img
              src="/home/icon-park-outline-voice-message.svg"
              alt="communications"
            />
          </div>
        </div>
      </button>

      {/* Modal itself */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center pt-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[360px] transform overflow-hidden rounded-t-3xl bg-eusebio-black-500 text-eusebio-white-100 p-4 text-left align-middle shadow-xl transition-all">
                  {/* Your content here */}
                  <div className="flex justify-between items-center text-white p-4 rounded-lg mb-10">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[20px] h-[20px] mr-2"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_582_13743)">
                          <path
                            d="M9.99984 18.3333C14.6023 18.3333 18.3332 14.6025 18.3332 9.99996C18.3332 5.39746 14.6023 1.66663 9.99984 1.66663C5.39734 1.66663 1.6665 5.39746 1.6665 9.99996C1.6665 14.6025 5.39734 18.3333 9.99984 18.3333Z"
                            stroke="white"
                            stroke-width="1.4"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.08333 10.7917C7.30435 10.7917 7.51631 10.7039 7.67259 10.5476C7.82887 10.3913 7.91667 10.1793 7.91667 9.95833C7.91667 9.73732 7.82887 9.52536 7.67259 9.36908C7.51631 9.2128 7.30435 9.125 7.08333 9.125C6.86232 9.125 6.65036 9.2128 6.49408 9.36908C6.3378 9.52536 6.25 9.73732 6.25 9.95833C6.25 10.1793 6.3378 10.3913 6.49408 10.5476C6.65036 10.7039 6.86232 10.7917 7.08333 10.7917Z"
                            fill="white"
                          />
                          <path
                            d="M9.14551 12.0208C9.41675 11.7502 9.63184 11.4287 9.77842 11.0747C9.92501 10.7208 10.0002 10.3414 9.99967 9.95825C10.0002 9.57514 9.92501 9.19571 9.77842 8.84176C9.63184 8.4878 9.41675 8.16631 9.14551 7.89575M11.208 14.0828C11.7505 13.5417 12.1807 12.8987 12.4738 12.1908C12.767 11.4829 12.9174 10.724 12.9163 9.95783C12.9163 8.347 12.2634 6.88867 11.208 5.83325"
                            stroke="white"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_582_13743">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <Dialog.Title
                        as="h3"
                        className="text-tiny font-eusebio-paragraph font-bold leading-6"
                      >
                        Comunicados
                      </Dialog.Title>
                    </div>

                    <button
                      type="button"
                      className="ml-auto"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[24px] h-[24px]"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.56018 6.44006C8.27583 6.1751 7.89974 6.03085 7.51114 6.03771C7.12253 6.04457 6.75176 6.20199 6.47694 6.47682C6.20211 6.75164 6.04469 7.12241 6.03783 7.51101C6.03097 7.89962 6.17522 8.27571 6.44018 8.56006L9.88018 12.0001L6.44018 15.4401C6.17522 15.7244 6.03097 16.1005 6.03783 16.4891C6.04469 16.8777 6.20211 17.2485 6.47694 17.5233C6.75176 17.7981 7.12253 17.9556 7.51114 17.9624C7.89974 17.9693 8.27583 17.825 8.56018 17.5601L12.0002 14.1201L15.4402 17.5601C15.7245 17.825 16.1006 17.9693 16.4892 17.9624C16.8778 17.9556 17.2486 17.7981 17.5234 17.5233C17.7982 17.2485 17.9557 16.8777 17.9625 16.4891C17.9694 16.1005 17.8251 15.7244 17.5602 15.4401L14.1202 12.0001L17.5602 8.56006C17.8251 8.27571 17.9694 7.89962 17.9625 7.51101C17.9557 7.12241 17.7982 6.75164 17.5234 6.47682C17.2486 6.20199 16.8778 6.04457 16.4892 6.03771C16.1006 6.03085 15.7245 6.1751 15.4402 6.44006L12.0002 9.88006L8.56018 6.44006Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="overflow-y-scroll min-h-[500px] max-h-[500px]">
                    <div>
                      <div className="p-2 mt-2">
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[28px] h-[28px] mr-2 items-start"
                            viewBox="0 0 28 28"
                            fill="none"
                          >
                            <path
                              d="M16.3335 3.5V8.16667C16.3335 8.47609 16.4564 8.77283 16.6752 8.99162C16.894 9.21042 17.1907 9.33333 17.5002 9.33333H22.1668"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.5002 8.16667H11.6668M10.5002 15.1667H17.5002M15.1668 19.8333H17.5002M19.8335 24.5H8.16683C7.54799 24.5 6.9545 24.2542 6.51691 23.8166C6.07933 23.379 5.8335 22.7855 5.8335 22.1667V5.83333C5.8335 5.21449 6.07933 4.621 6.51691 4.18342C6.9545 3.74583 7.54799 3.5 8.16683 3.5H16.3335L22.1668 9.33333V22.1667C22.1668 22.7855 21.921 23.379 21.4834 23.8166C21.0458 24.2542 20.4523 24.5 19.8335 24.5Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="flex flex-col">
                            <h4 className="text-base font-eusebio-paragraph font-bold items-center">
                              Comunicado sobre Fiestas Patrias
                            </h4>
                            <p className="text-sm font-eusebio-paragraph font-medium items-center mt-2">
                              Julio 2024
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-2">
                        <p className="mt-1 text-sm font-normal leading-7">
                          Lorem ipsum dolor sit amet consectetur. Quisque tempor
                          pellentesque sagittis nibh euismod. Ornare risus et ac
                          mattis augue at nisl feugiat. Nam quis sapien nisl
                          dolor in eu vivamus.{" "}
                        </p>
                      </div>

                      <div className="p-2">
                        <button
                          type="button"
                          className="text-tiny inline-flex justify-center rounded-full border border-transparent bg-eusebio-blue-200 px-6 py-3 font-bold text-eusebio-white-100 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Leer más
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="p-2 mt-2">
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[28px] h-[28px] mr-2 items-start"
                            viewBox="0 0 28 28"
                            fill="none"
                          >
                            <path
                              d="M16.3335 3.5V8.16667C16.3335 8.47609 16.4564 8.77283 16.6752 8.99162C16.894 9.21042 17.1907 9.33333 17.5002 9.33333H22.1668"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.5002 8.16667H11.6668M10.5002 15.1667H17.5002M15.1668 19.8333H17.5002M19.8335 24.5H8.16683C7.54799 24.5 6.9545 24.2542 6.51691 23.8166C6.07933 23.379 5.8335 22.7855 5.8335 22.1667V5.83333C5.8335 5.21449 6.07933 4.621 6.51691 4.18342C6.9545 3.74583 7.54799 3.5 8.16683 3.5H16.3335L22.1668 9.33333V22.1667C22.1668 22.7855 21.921 23.379 21.4834 23.8166C21.0458 24.2542 20.4523 24.5 19.8335 24.5Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="flex flex-col">
                            <h4 className="text-base font-eusebio-paragraph font-bold items-center">
                              Comunicado sobre Fiestas Patrias
                            </h4>
                            <p className="text-sm font-eusebio-paragraph font-medium items-center mt-2">
                              Julio 2024
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-2">
                        <p className="mt-1 text-sm font-normal leading-7">
                          Lorem ipsum dolor sit amet consectetur. Quisque tempor
                          pellentesque sagittis nibh euismod. Ornare risus et ac
                          mattis augue at nisl feugiat. Nam quis sapien nisl
                          dolor in eu vivamus.{" "}
                        </p>
                      </div>

                      <div className="p-2">
                        <button
                          type="button"
                          className="text-tiny inline-flex justify-center rounded-full border border-transparent bg-eusebio-blue-200 px-6 py-3 font-bold text-eusebio-white-100 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Leer más
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="p-2 mt-2">
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[28px] h-[28px] mr-2 items-start"
                            viewBox="0 0 28 28"
                            fill="none"
                          >
                            <path
                              d="M16.3335 3.5V8.16667C16.3335 8.47609 16.4564 8.77283 16.6752 8.99162C16.894 9.21042 17.1907 9.33333 17.5002 9.33333H22.1668"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.5002 8.16667H11.6668M10.5002 15.1667H17.5002M15.1668 19.8333H17.5002M19.8335 24.5H8.16683C7.54799 24.5 6.9545 24.2542 6.51691 23.8166C6.07933 23.379 5.8335 22.7855 5.8335 22.1667V5.83333C5.8335 5.21449 6.07933 4.621 6.51691 4.18342C6.9545 3.74583 7.54799 3.5 8.16683 3.5H16.3335L22.1668 9.33333V22.1667C22.1668 22.7855 21.921 23.379 21.4834 23.8166C21.0458 24.2542 20.4523 24.5 19.8335 24.5Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="flex flex-col">
                            <h4 className="text-base font-eusebio-paragraph font-bold items-center">
                              Comunicado sobre Fiestas Patrias
                            </h4>
                            <p className="text-sm font-eusebio-paragraph font-medium items-center mt-2">
                              Julio 2024
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-2">
                        <p className="mt-1 text-sm font-normal leading-7">
                          Lorem ipsum dolor sit amet consectetur. Quisque tempor
                          pellentesque sagittis nibh euismod. Ornare risus et ac
                          mattis augue at nisl feugiat. Nam quis sapien nisl
                          dolor in eu vivamus.{" "}
                        </p>
                      </div>

                      <div className="p-2">
                        <button
                          type="button"
                          className="text-tiny inline-flex justify-center rounded-full border border-transparent bg-eusebio-blue-200 px-6 py-3 font-bold text-eusebio-white-100 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Leer más
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Communications;
