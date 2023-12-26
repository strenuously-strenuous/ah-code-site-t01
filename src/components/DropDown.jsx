import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = () => {
  const [isDomesticHovered, setIsDomesticHovered] = useState(false);
  const [isInternationalHovered, setIsInternationalHovered] = useState(false);

  const handleDomesticHover = () => {
    setIsDomesticHovered(true);
    setIsInternationalHovered(false);
  };

  const handleInternationalHover = () => {
    setIsDomesticHovered(false);
    setIsInternationalHovered(true);
  };

  const handleMouseLeave = () => {
    setIsDomesticHovered(false);
    setIsInternationalHovered(false);
  };
  return (
    <>
      <div
        className="font-semibold items-center flex rounded-lg p-2 relative"
        onMouseEnter={handleDomesticHover}
        onMouseLeave={handleMouseLeave}
      >
        Domestic
        <RiArrowDropDownLine size={40} />
        {isDomesticHovered && (
          <div className="dropdown-content font-light absolute z-50  bg-white p-2 top-12 ">
            <ul className="">
              <Link href="/domestic/himachal">Himachal</Link>

              <li>
                <Link href="/domestic/goa">Goa</Link>
              </li>
              <li>
                <Link href="/domestic/andaman">Andaman</Link>
              </li>
              <li>
                <Link href="/domestic/uttarakhand">Uttarakhand</Link>
              </li>
              <li>
                <Link href="/domestic/kashmir">Kashmir</Link>
              </li>
              <li>
                <Link href="/domestic/rajasthan">Rajasthan</Link>
              </li>
              <li>
                <Link href="/domestic/west-bengal">West Bengal</Link>
              </li>
              <li>
                <Link href="/domestic/kerala">Kerala</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="font-semibold items-center flex rounded-lg p-2 relative"
        onMouseEnter={handleInternationalHover}
        onMouseLeave={handleMouseLeave}
      >
        International
        <RiArrowDropDownLine size={40} />
        {isInternationalHovered && (
          <div className="font-light bg-white p-2 dropdown-content absolute top-12 ">
            <ul>
              <li>
                <Link href="/international/switzerland">Switzerland</Link>
              </li>
              <li>
                {" "}
                <Link href="/international/mauritious">Mauritious</Link>
              </li>
              <li>
                <Link href="/international/thailand">Thailand</Link>
              </li>
              <li>
                <Link href="/international/bhutan">Bhutan</Link>
              </li>
              <li>
                <Link href="/international/nepal">Nepal</Link>
              </li>
              <li>
                <Link href="/international/bagladesh">Bangladesh</Link>
              </li>
              <li>
                <Link href="/international/dubai">Dubai</Link>
              </li>
              <li>
                <Link href="/international/singapur">Singapur</Link>
              </li>
              <li>
                <Link href="/international/malasia">Malasia</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
