"use client";

import { cn } from "@/app/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./gridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/app/data/confetti.json";
import MagicButton from "../magicButton";
import { IoCopyOutline } from "react-icons/io5";
import { education } from "@/app/data";
import { FaPhoneAlt } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-5 gap-4 max-w-full mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleShowPhone = () => {
    setShowPhone(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("chilommihai2000@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition border border-white/[0.1] duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(25,25,71)",
        backgroundColor:
          " linear-gradient(90deg, rgba(9,9,121,1) 19%, rgba(16,17,17,1) 100%))",
      }}
    >
      <div className={`${id === 6}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover, object-center, absolute"
              )}
            ></img>
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold "></div> */}
          </BackgroundGradientAnimation>
        )}
      </div>
      <div
        className={`absolute right-0 -bottom-5 ${
          id === 5 && "w-full opacity-80"
        }`}
      >
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            className={"object-cover, object-center w-full h-full"}
          ></img>
        )}
      </div>

      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
        {id === 2 && <GlobeDemo />}
        {/* if id === 3 then... */}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
            <div className="flex flex-col gap-3 lg:gap-1">
              {["React.js", "Next.js", "Typescript"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-300 rounded-lg text-center bg-[#10132E] "
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
            </div>
            <div className="flex flex-col gap-3 lg:gap-1">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              {["Angular", "JavScript", ".NET"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-300 rounded-lg text-center bg-[#10132E] "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {id === 6 && (
          <div className="mt-5 relative">
            <div className={`absolute -bottom-5 right-0`}>
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYmid slice",
                  },
                }}
              ></Lottie>
            </div>
            <MagicButton
              title={copied ? "Email copied" : "Copy my email"}
              position="left"
              icon={<IoCopyOutline />}
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
            ></MagicButton>
            <MagicButton
              title={showPhone ? "+40735557656" : "Show phone number"}
              position="left"
              otherClasses="!bg-[#161a31]"
              icon={<FaPhoneAlt />}
              handleClick={handleShowPhone}
            ></MagicButton>
          </div>
        )}
      </div>
    </div>
  );
};
