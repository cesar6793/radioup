/*eslint multiline-ternary: ["error", "never"]*/
"use client";

import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = (props) => {
  const { children, title } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="mb-3 border-[1px] bg-white border-[#667085] py-5 px-4 rounded-2xl cursor-pointer select-none md:border-none"
      onClick={handleOpen}
    >
      <div className="flex justify-between gap-6">
        <div className="left">
          <div className="text-eusebio-black-500 font-eusebio-title-medium font-medium text-base md:text-[20px]">
            {title}
          </div>
        </div>
        <div className="right flex items-center">
          <div className="icon">
            <div>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="5"
                  viewBox="0 0 21 5"
                  fill="none"
                >
                  <path
                    d="M1.75 4.25C1.28587 4.25 0.840752 4.06563 0.512564 3.73744C0.184375 3.40925 0 2.96413 0 2.5C0 2.03587 0.184375 1.59075 0.512564 1.26256C0.840752 0.934375 1.28587 0.75 1.75 0.75H19.25C19.7141 0.75 20.1592 0.934375 20.4874 1.26256C20.8156 1.59075 21 2.03587 21 2.5C21 2.96413 20.8156 3.40925 20.4874 3.73744C20.1592 4.06563 19.7141 4.25 19.25 4.25H1.75Z"
                    fill="#EB2D4B"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M1.75 12.25C1.28587 12.25 0.840752 12.0656 0.512564 11.7374C0.184375 11.4092 0 10.9641 0 10.5C0 10.0359 0.184375 9.59075 0.512564 9.26256C0.840752 8.93437 1.28587 8.75 1.75 8.75H19.25C19.7141 8.75 20.1592 8.93437 20.4874 9.26256C20.8156 9.59075 21 10.0359 21 10.5C21 10.9641 20.8156 11.4092 20.4874 11.7374C20.1592 12.0656 19.7141 12.25 19.25 12.25H1.75Z"
                    fill="#667085"
                  />
                  <path
                    d="M8.75 1.75C8.75 1.28587 8.93437 0.840752 9.26256 0.512564C9.59075 0.184375 10.0359 0 10.5 0C10.9641 0 11.4092 0.184375 11.7374 0.512564C12.0656 0.840752 12.25 1.28587 12.25 1.75V19.25C12.25 19.7141 12.0656 20.1592 11.7374 20.4874C11.4092 20.8156 10.9641 21 10.5 21C10.0359 21 9.59075 20.8156 9.26256 20.4874C8.93437 20.1592 8.75 19.7141 8.75 19.25V1.75Z"
                    fill="#667085"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mt-4 transition text-[#667085CC] md:text-eusebio-black-500 ease-in-out delay-150 hover:-translate-y-1 duration-300 font-eusebio-paragraph text-sm md:text-base font-normal leading-7 md:leading-8 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
