import React from "react";

const clients = [
  "/imgs/clients/Minet.png",
  "/imgs/clients/Bliss-healthcare-logo.png",
  "/imgs/clients/Pioneer-Insurance-logo.png",
  "/imgs/clients/cicinsurance-logo.png",
  "/imgs/clients/old-mutual-logo.png",
  "/imgs/clients/Britam-Logo.png",
  "/imgs/clients/makllogo.png",
  "/imgs/clients/star-discover-general-insurance.png",
];

const ClientsSection = () => {
  return (
    <div className="flex gap-8 my-11 justify-around items-center">
      {clients.map((client, index) => (
        <div>
          <img className="w-28      " src={client} alt={client} />
        </div>
      ))}
    </div>
  );
};

export default ClientsSection;