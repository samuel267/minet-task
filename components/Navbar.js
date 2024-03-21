import React from "react";

const nav_links = [
  { name: "HOME", link: "#" },
  { name: "ABOUT AFYA KWA MWALIMU", link: "#" },
  { name: "BENEFITS STRUCTURE", link: "#" },
  { name: "REGISTRATION", link: "#" },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-end gap-11 mt-14">
      <div>
        <img className="w-28  " src="/imgs/clients/TSC-Logo.png" alt="logo" />
      </div>
      <div className="w-full md:mx-24">
        <div className="flex justify-end mb-5 w-full">
          <h3 className="text-[#C3A22E]  font-semibold flex items-center gap-5">
            Emergency Hotline
            <span>
              <img
                className="w-8"
                src="/icons/socials/call.png"
                alt="emergency-number"
              />
            </span>{" "}
          </h3>
        </div>
        <div className=" hidden md:flex justify-end items-end gap-14   w-full">
          {nav_links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase font-semibold my-2  text-[#0B0332] hover:text-[#C3A22E]"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <img className="w-28  " src="/imgs/clients/TSC-Logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
