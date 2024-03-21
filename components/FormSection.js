import React from "react";

const FormSection = () => {
  return (
    <div>
      <div className="rounded rounded-tr-[55px]  bg-[#0B0332]">
        <form className="px-11 py-8">
          <h3 className="text-[#C3A22E] font-semibold text-xl my-2">
            Search a provider near you
          </h3>
          <div className="flex gap-11">
            <div className="">
              <div>
                <label className="text-white my-1" for="county">
                  COUNTY
                </label>
              </div>
              <select
                id="county"
                name="county"
                className=" w-40    bg-white focus:outline-none px-2 py-3 rounded-md"
              >
                <option>Nairobi</option>
                <option>Kiambu</option>
              </select>
            </div>
            <div className="">
              <div>
                <label className="text-white my-1" for="town">
                  TOWN
                </label>
              </div>
              <select
                id="town"
                name="town"
                className=" w-40    bg-white focus:outline-none px-2 py-3 rounded-md"
              >
                <option>Select town</option>
                <option>Kasarani</option>
              </select>
            </div>
          </div>
          <div className="flex gap-11 mt-8">
            <div className="">
              <div>
                <label className="text-white my-1" for="sub-county">
                  SUB-COUNTY
                </label>
              </div>
              <select
                id="sub-county"
                name="sub-county"
                className=" w-40    bg-white focus:outline-none px-2 py-3 rounded-md"
              >
                <option>Sub-county</option>
                <option>Kawangware</option>
              </select>
            </div>
            <div className="">
              <div>
                <label className="text-white my-1" for="town">
                  SERVICES
                </label>
              </div>
              <select
                id="town"
                name="town"
                className=" w-40    bg-white focus:outline-none px-2 py-3 rounded-md"
              >
                <option>Select service</option>
                <option>Registration</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end items-center mt-8">
            <button className="bg-[#C3A22E] font-medium  text-white px-11 py-2 rounded ">
              SEARCH
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
