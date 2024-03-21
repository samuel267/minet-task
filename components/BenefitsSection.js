import React from "react";

const benefits = [
  {
    img: "/imgs/benefits/Asset 8.png",
    title: "Inpatient benefits",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat",
  },
  {
    img: "/imgs/benefits/Asset 9.png",
    title: "Outpatient benefits",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi epudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat",
  },
  {
    img: "/imgs/benefits/Asset 7.png",
    title: "Additional benefits",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi epudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat",
  },
  {
    img: "/imgs/benefits/Asset 2.png",
    title: "Wellness education",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi epudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat",
  },
];

const BenefitsSection = () => {
  return (
    <div className="bg-[#0B0332] rounded w-full px-11 py-16">
      <div className="mb-8 font-semibold text-2xl   ">
        <h3 className="text-[#C3A22E]">Comprehensive benefits</h3>
      </div>
      <div className="flex justify-around flex-wrap md:flex-nowrap items-center gap-11">
        {benefits.map((benefit, index) => (
          <div key={index} className="w-[388px]">
            <div>
              <img
                className="h-64 w-full object-cover"
                src={benefit.img}
                alt={benefit.title}
              />
            </div>
            <div>
              <h5 className="text-[#C3A22E] my-3 text-xl font-medium">
                {benefit.title}
              </h5>
              <p className="text-white text-sm h-[5.5em] text-ellipsis overflow-hidden">
                {benefit.description}
              </p>
            </div>
            <div className=" mt-14">
              <button className="text-gray-400 font-medium">
                READ MORE &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
