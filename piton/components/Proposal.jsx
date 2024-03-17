import React from "react";
import Image from "next/image";

const Proposal = () => {
  return (
    <section className="flex flex-col md:flex-row mt-20 ml-10">
      <div className="md:w-1/2 m-10">
        <Image
          src="/side.jpg"          
          alt="side"
          width={622}
          height={891}        
        />
      </div>
      <div className="md:w-1/2 m-10">
        <h3 className="flex font-bold mb-4 justify-end">We'd love to hear</h3><h3 className="flex font-bold mb-4 justify-end">from you</h3>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 rounded border border-black text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 rounded border border-black text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="website" className="block mb-1">
            Website URL
          </label>
          <input
            type="text"
            id="website"
            className="w-full px-3 py-2 rounded border border-black text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="project-details" className="block mb-1">
            Project Details
          </label>
          <textarea
            id="project-details"
            className="w-full px-3 py-2 h-36 rounded border border-black text-black"
          ></textarea>
        </div>
        <button className="w-full bg-black text-white px-4 py-4">
          Send Proposal
        </button>
      </div>
    </section>
  );
};

export default Proposal;
