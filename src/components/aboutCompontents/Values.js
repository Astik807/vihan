import React from "react";
import about from "../../assets/images/about.jpg";
import his from "../../assets/images/his.jpg";
import products from "../../assets/images/products.jpg";
import warehouse from "../../assets/images/warehouse.jpg";
import vector from "../../assets/images/vector.jpg";

function Values() {
  return (
    <div className="w-full pt-10 md:pt-[100px] py-10 md:py-[70px] flex justify-center items-center">
      <div className="w-[85vw] md:w-[80vw] flex flex-col justify-center items-center gap-10 md:gap-[150px]">
        {/* First Section */}
        <div className="w-full font-l flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-[45%] flex flex-col justify-center items-start gap-5 md:gap-[30px] px-4">
            <h1 className="w-full font-serif text-2xl text-center md:text-start md:text-4xl font-bold">
              What We Do
            </h1>
            <div className=" md:hidden w-full h-auto mt-5 md:mt-0 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <img
                className="w-full h-full object-cover "
                src={his}
                alt="Our Experience"
              />
            </div>
            <p className="text-justify text-sm md:text-base">
              With years of experience under our belt, we’re not new to the
              logistics field. Our expertise has been honed over time, allowing
              us to develop a deep understanding of the complex logistics
              landscape. This knowledge enables us to anticipate and navigate
              challenges swiftly and effectively, minimizing disruptions to your
              supply chain. Whether it's dealing with unforeseen delays,
              optimizing routes, or managing warehousing needs, we apply our
              industry insights to every task. We don’t just react to issues; we
              proactively find ways to enhance efficiency and ensure that your
              goods are always moving smoothly. Our ability to adapt to evolving
              market trends, customer demands, and regulatory requirements sets
              us apart. At Bhandari Repository, we leverage our experience to
              craft innovative, customized solutions that keep your business
              ahead in today’s fast-paced world. Every step of the way, we are
              committed to delivering value, reliability, and peace of mind
              through our logistics services. Additionally, our team is
              continuously trained to stay ahead of industry advancements,
              enabling us to integrate the latest technology into our
              operations.
            </p>
          </div>
          <div className=" hidden md:block   w-full md:w-[45%] h-auto md:h-[450px] mt-5 md:mt-0 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <img
              className="w-full h-full object-cover"
              src={his}
              alt="Our Experience"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full hidden md:block md:w-[45%] h-auto md:h-[450px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:order-1">
            <img
              className="w-full h-full object-cover"
              src={vector}
              alt="Operational Transparency"
            />
          </div>
          <div className="w-full md:w-[45%] flex flex-col justify-center items-start gap-5 md:gap-[30px] px-4 md:order-2">
            <h1 className="w-full font-serif text-2xl text-center md:text-start md:text-4xl font-bold">
              How We Do It
            </h1>
            <div className=" md:hidden w-full h-auto mt-5 md:mt-0 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <img
                className="w-full h-full object-cover"
                src={vector}
                alt="Our Experience"
              />
            </div>
            <p className="text-justify text-sm md:text-base">
              What sets Bhandari Repository apart from other C&amp;F (Clearing
              and Forwarding) companies is our unwavering commitment to
              operational transparency and customer-centric service. We
              understand that every business has unique logistics needs, which
              is why our dedicated team works closely with you to enhance
              efficiency and drive success in your supply chain. Located in
              Indore, Madhya Pradesh, our strategically positioned warehouses
              are designed to optimize both storage and distribution, ensuring
              your products reach their destination on time. Our facilities are
              equipped with the latest technology and infrastructure, allowing
              for real-time tracking and management of your inventory. This
              advanced setup not only guarantees that your products are stored
              securely but also that they are handled with the utmost care
              throughout the logistics process. We prioritize safety and
              efficiency, utilizing best practices to minimize risks and
              streamline operations. At Bhandari Repository, we believe that our
              success is measured by your satisfaction, which is why we are
              dedicated to providing exceptional service tailored to your
              specific requirements.
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-[45%] flex flex-col justify-center items-start gap-5 md:gap-[30px] px-4">
          <h1 className="w-full font-serif text-2xl text-center md:text-start md:text-4xl font-bold">
              Why Choose Us
            </h1>
            <div className=" md:hidden w-full h-auto mt-5 md:mt-0 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <img
                className="w-full h-full object-cover"
                src={warehouse}
                alt="Our Experience"
              />
            </div>
            <p className="text-justify text-sm md:text-base">
              At Bhandari Repository, we prioritize reliability, integrity, and
              client satisfaction in every aspect of our operations. Our
              commitment to these core values is the foundation of our business
              and shapes our relationships with our clients. We take pride in
              our proactive approach, consistently seeking out innovative ways
              to enhance our services and exceed your expectations. Our
              dedicated team is always on the lookout for opportunities to
              optimize processes, ensuring that your logistics needs are met
              efficiently and effectively. Our goal is to be your trusted
              partner in logistics, assisting you in achieving your business
              objectives seamlessly. We understand that each client is unique,
              whether you’re a small business looking for a dependable logistics
              partner or a large corporation seeking comprehensive logistics
              solutions. Our tailored services are designed to meet the specific
              demands of your operations, ensuring flexibility and
              responsiveness in a dynamic market. Let’s work together to build a
              streamlined supply chain that drives your success.
            </p>
          </div>
          <div className="w-full hidden md:block md:w-[45%] h-auto md:h-[450px] mt-5 md:mt-0 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <img
              className="w-full h-full object-cover"
              src={warehouse}
              alt="Our Commitment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
