import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { hobbies } from "../data";

const Hobbies = () => {
  return (
    <div className="py-20" id="hobbies">
      <h1 className="heading text-purple">Hobbies</h1>
      <div className="flex flex-col items-center justify-center p-4 gap-x-24 gap-y-20 h-full w-full">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={hobbies}
            direction="left"
            speed="slow"
          ></InfiniteMovingCards>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
