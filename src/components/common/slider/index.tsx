"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

interface IProps {
  children: React.ReactNode;
  settings: object;
  arrowsClass?: string;
  customArrow?: boolean;
  arrowleft?: any;
  arrowright?: any;
}

const SliderComp: React.FC<IProps> = (props) => {
  const { customArrow = false, arrowleft, arrowright, arrowsClass } = props;
  const ref = useRef<Slider>(null);

  const handleNext = (): void => {
    ref.current?.slickNext();
  };

  const handlePrev = (): void => {
    ref.current?.slickPrev();
  };

  return (
    <div className="select-none grid grid-row-2 mt-2 md:mt-0">
      <div className="order-2 md:order-1">
        {customArrow && (
          <div className={arrowsClass}>
            <div onClick={handlePrev}>{arrowleft}</div>
            <div onClick={handleNext}>{arrowright}</div>
          </div>
        )}
      </div>
      <div className="overflow-hidden order-1 md:order-2">
        <Slider ref={ref} {...props.settings}>
          {props.children}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComp;
