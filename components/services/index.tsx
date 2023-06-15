import React from "react";
import services from "@/public/services.jpg";
import Image from "next/image";

export default function Services() {
  return (
    <div id="services" className=" pb-[20%] bg-white p-[5%] md:p-[10%] box-border -mt-[10%]  gap-1 ">
      <h1 className=" font-normal tracking-wide text-4xl my-[10%]">
        Our <br /> Services
      </h1>

      <hr className="w-full border border-b-0 border-black my-10" />

      <div className="w-full flex flex-col items-end ">
        <div className=" service-section md:w-[60%] flex gap-4 md:gap-[15%] text-md">
          <div className="flex flex-col  w-1/2 ">
            <h1 className="font-medium ">Personal PR</h1>
            <p className="mt-5 ">
              Media Relations,
              <br /> Crisis Communications, Reputation Management & Enhancement,
              <br /> Thought Leadership, Media Training, Content Solutions,
              <br />
              Brand Development Content Generation,
              <br /> Partnerships & Associations,
              <br />
              Speaking Engagements.
            </p>
          </div>
          <div className="w-1/2">
            <p className="font-medium">
              Your voice matters. We are adept at communicating it to those who
              matter most.
            </p>
            <p className="mt-5 text-neutral-500">
              Our PR experts have held senior political communications positions
              both domestically and internationally and collaborate closely with
              the digital team to harness the power of data and create
              persuasive communications that are precisely targeted.
            </p>
          </div>
          <Image
            src={services}
            className=" absolute left-[10%] hidden"
            alt="Statue"
            width="300"
            height="500"
          />
        </div>

        <hr className="md:w-[60%]  border border-b-0 border-black my-10" />

        <div className=" service-section md:w-[60%] flex gap-4 md:gap-[15%] text-md">
          <div className="flex flex-col  w-1/2 ">
            <h1 className="font-medium ">
              Strategic Digital and Web3 Consultancy
            </h1>
            <p className="mt-5 ">
              Digital & Web3 Strategy, <br />
              Sector Strategy,
              <br /> Thought Leadership,
              <br />
              Brand & Customer Strategy,
              <br /> Influencer Engagement, <br />
              Speaking Engagements, Content Solutions,
              <br />
            </p>
          </div>
          <div className="w-1/2">
            <p className="font-medium">
              We execute strategic communications successfully within the
              metaverse.
            </p>
            <p className="mt-5 text-neutral-500">
              Honor work(s) closely with industry-leading partners as strategic
              PR advisors, helping businesses, organisations, CEOs and
              government entities engage and execute strategic communications
              successfully within the metaverse, while securing press coverage
              for their Web3 products and services.
            </p>
          </div>
          <Image
            src={services}
            className=" absolute left-[10%] hidden"
            alt="Statue"
            width="300"
            height="500"
          />
        </div>

        <hr className="md:w-[60%]  border border-b-0 border-black my-10" />

        <div className=" service-section md:w-[60%] flex gap-4 md:gap-[15%] text-md">
          <div className="flex flex-col  w-1/2 ">
            <h1 className="font-medium ">Government Relations</h1>
            <p className="mt-5 ">
              Media Relations,
              <br /> Stakeholder Mapping,
              <br /> Narrative Building,
              <br /> Policy Analysis, Briefings,
              <br /> Thought Leadership,
              <br /> Speaking Engagements Content Solutions, <br />
              Partnerships & Associations,
              <br /> Media Training,
            </p>
          </div>
          <div className="w-1/2">
            <p className="font-medium">
              We shape policy and government agenda in the media through a
              compelling narrative.
            </p>
            <p className="mt-5 text-neutral-500">
              Effective government advocacy&relations requires more than just
              handshakes,The right team by your side to combine all of these
              components into a winning advocacy campaign. We have extensive
              experience working with government ministers to shape policy and
              government agenda in the media through a compelling narrative that
              responds to the trends and debates of our political time.
            </p>
          </div>
          <Image
            src={services}
            className=" absolute left-[10%] hidden"
            alt="Statue"
            width="300"
            height="500"
          />
        </div>
      </div>
    </div>
  );
}
