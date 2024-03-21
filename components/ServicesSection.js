import React from "react";

const services = [
  { title: "MATERNITY", icon: "/icons/pregnant.png" },
  { title: "OPTICAL", icon: "/icons/eye-optical.png" },
  { title: "DENTAL", icon: "/icons/tooth.png" },
  { title: "ROAD EVACATION", icon: "/icons/ambulance.png" },
  { title: "INTERNATIONAL TRAVEL", icon: "/icons/travel.png" },
  { title: "AIR EVACATION", icon: "/icons/air-ambulance.png" },
  { title: "PSYCHIATRIIC AND COUNSELING", icon: "/icons/doctor.png" },
  { title: "LAST RESPECTS", icon: "/icons/heart.png" },
];

const ServicesSection = () => {
  return (
    <div className="bg-[#EEEDF2] px-3 py-5 w-full rounded">
      <div className="grid grid-cols-4 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-3 w-44 justify-self-center  rounded "
          >
            <img
              className="p-3 w-20 mx-auto "
              src={service.icon}
              alt={service.title}
            />
            <h3 className="uppercase text-center">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
