import React from "react";

const quick_links = [{ title: "Afya kwa walimu explained", link: "#" }];
const benefits = [{ title: "Inpatient", link: "#" }];
const contacts = [
  { title: "1528", link: "#", icon: "/icons/contacts/mail.svg" },
  { title: "+254 758 876 766", link: "#", icon: "/icons/contacts/mail.svg" },
];
const socials = ["/icons/socials/instagram.png", "/icons/socials/vimeo.png"];

const Footer = () => {
  return (
    <div>
      <div className="bg-[#EEEDF2] px-11 py-14 w-full rounded ">
        <div className="grid grid-cols-3">
          <div className="border-r border-gray-400">
            <h3 className="text-[#C3A22E] font-bold text-xl my-5">
              Quick links
            </h3>
            <div>
              {quick_links.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="uppercase font-semibold my-2  text-[#0B0332] hover:text-[#C3A22E]"
                >
                  &gt; {link.title}
                </a>
              ))}
            </div>
          </div>
          <div className="border-r px-8 border-gray-300">
            <h3 className="text-[#C3A22E] font-bold text-xl my-5">Benefits</h3>
            <div className="">
              {benefits.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="uppercase font-semibold my-2  text-[#0B0332] hover:text-[#C3A22E]"
                >
                  &gt; {link.title}
                </a>
              ))}
            </div>
          </div>
          <div className="px-8  ">
            <h3 className="text-[#C3A22E] font-bold text-xl my-5">Contacts</h3>
            <div className="">
              {contacts.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="uppercase font-semibold my-2 flex  text-[#0B0332] gap-3 items-center hover:text-[#C3A22E]"
                >
                  <div className="p-1 rounded-full bg-[#0B0332]">
                    <img className="w-4" src={link.icon} alt={link.title} />
                  </div>
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 flex justify-between">
        <p className="text-[#C3A22E] font-semibold">
          All rights reserved &copy; Minet group 2023
        </p>
        <div className="flex items-center  gap-5">
          {socials.map((social, index) => (
            <img key={index} className="w-4" src={social} alt={social} />
          ))}
        </div>
        <p className="text-[#C3A22E] font-semibold">Risk.Reinsurance.People</p>
      </div>
    </div>
  );
};

export default Footer;
