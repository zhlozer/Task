import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="max-container padding-container py-10 pb-32  lg:py-20 xl:flex-row">
      <div>
        <h1 className="font-bold ">Who We Are</h1>

        <p className="regular-16 lg:regular-20 mt-6">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>

      <div className="py-28">
        <Image
          src="/mid.jpg"
          layout="responsive"
          alt="Hero"
          width={1000}
          height={500}
        />               
      </div>
      <h2 className="text-center font-bold py-10">
        Meet the heroes behind the magic
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        <div class="p-4">
          <div class="max-w-xs rounded overflow-hidden shadow-lg">
            <Image
              src="/founder.jpg"
              layout="responsive"
              alt="Hero"
              width={1000}
              height={500}
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Esther Howard</div>
              <p className="text-gray-30">Founder</p>
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="max-w-xs rounded overflow-hidden shadow-lg">
            <Image
              src="/developer.jpg"
              layout="responsive"
              alt="Hero"
              width={1000}
              height={500}
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Cody Fisher</div>
              <p className="text-gray-30">Developer</p>
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="max-w-xs rounded overflow-hidden shadow-lg">
            <Image
              src="/designer.jpg"
              layout="responsive"
              alt="Hero"
              width={1000}
              height={500}
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Brooklyn Simmon</div>
              <p className="text-gray-30">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
