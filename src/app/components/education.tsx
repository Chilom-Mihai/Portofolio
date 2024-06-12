import { education } from "../data";
import { Button } from "./ui/moving-border";

const Education = () => {
  return (
    <div className="py-20" id="education">
      <h1 className="heading text-purple">Education</h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {education.map((ed) => (
          <Button
            key={ed.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 cursor-text"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {ed.university}
                </h1>
                <h6 className="text-start text-gray mt-3 font-bold">
                  {ed.city}
                </h6>
                <h2 className="text-start text-gray mt-3 font-bold">
                  {ed.profile}
                </h2>
                <h5 className="text-start text-gray mt-3 font-bold">
                  {ed.master && "Master"}
                </h5>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {ed.desc}
                </p>
                <h6 className="flex items-start mt-7">{ed.period}</h6>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Education;
