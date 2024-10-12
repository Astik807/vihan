import React from "react";
import his from "../../assets/images/his.jpg";
import warehouse from "../../assets/images/warehouse.jpg";
import vector from "../../assets/images/vector.jpg";
import frieght from '../../assets/servicesimages/logistics-freight-forwarding-services.jpg'
import dist from '../../assets/servicesimages/Express Distribution and Reverse Logistics.jpg'
import rake from '../../assets/servicesimages/rake management.jpg'
import packaging from '../../assets/servicesimages/packagingnew.jpg'
import img from '../../assets/servicesimages/ware.jpeg'


function Detailservice() {
  return (
    <div className="w-full pt-10 md:pt-[100px] py-10 md:py-[70px] flex justify-center items-center">
      <div className="w-[85vw] md:w-[80vw] flex flex-col justify-center items-center gap-10 md:gap-[150px]">

        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-[45%] flex flex-col justify-center items-start gap-5 md:gap-[30px] px-4">
            <h1 className="w-full text-2xl text-center md:text-start md:text-4xl font-bold">
            3P/4P Logistics Solutions
            </h1>
            <div className=" md:hidden w-full h-auto shadow-md mt-5 md:mt-0">
              <img
                className="w-full h-full object-cover"
                src={his}
                alt="Our Experience"
              />
            </div>
            <p className="text-justify text-sm md:text-base">
            At Bhandari Repository, our 3P/4P logistics solutions provide end-to-end supply chain management, taking the complexity out of logistics for businesses of all sizes. Our third-party (3P) solutions focus on managing warehousing, distribution, and transportation, ensuring smooth and efficient operations. Meanwhile, our fourth-party (4P) solutions go a step further by overseeing the entire supply chain as a strategic partner, coordinating multiple logistics providers and resources for optimal performance. Whether you're looking to streamline your logistics or scale globally, our tailored solutions help enhance visibility, reduce operational costs, and improve overall efficiency. Our dedicated team works with cutting-edge technology to ensure that your logistics network is agile, adaptable, and reliable.
            </p>
          </div>
          <div className=" hidden md:block   w-full md:w-[45%] h-auto md:h-[450px] shadow-md mt-5 md:mt-0">
            <img
              className="w-full h-full object-cover"
              src={his}
              alt="Our Experience"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full hidden md:block md:w-[45%] h-auto md:h-[450px] shadow-md md:order-1">
            <img
              className="w-full h-full object-cover"
              src={img}
              alt="Operational Transparency"
            />
          </div>
          <div className="w-full md:w-[45%] flex flex-col justify-center items-start gap-5 md:gap-[30px] px-4 md:order-2">
            <h1 className="w-full text-2xl text-center md:text-start md:text-4xl font-bold">
            Warehouse and Inventory Oversight
            </h1>
            <div className=" md:hidden w-full h-auto shadow-md mt-5 md:mt-0">
              <img
                className="w-full h-full object-cover"
                src={img}
                alt="Our Experience"
              />
            </div>
            <p className="text-justify text-sm md:text-base">
            Bhandari Repository offers robust warehouse and inventory oversight services, providing safe, secure, and organized storage for your goods. Our advanced warehouse management systems track your inventory in real-time, offering full visibility into stock levels and movement across all stages of the supply chain. We employ automated systems to reduce human error and optimize space utilization, ensuring that your products are stored and retrieved efficiently. With climate-controlled facilities and 24/7 security, we guarantee the utmost protection for your goods. Whether you require short-term or long-term storage, our facilities are designed to accommodate a wide range of products, from perishables to industrial materials. Our expert team ensures smooth inventory audits, seamless stock replenishment, and precise order fulfillment, helping you maintain operational efficiency.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-[45%] flex flex-col justify-center items-start gap-5 md:gap-[30px] px-4">
            <h1 className="w-full text-2xl text-center md:text-start md:text-4xl font-bold">
            Primary and Secondary Transport Services
            </h1>
            <div className=" md:hidden w-full h-auto shadow-md mt-5 md:mt-0">
              <img
                className="w-full h-full object-cover"
                src={vector}
                alt="Our Experience"
              />
            </div>
            <p className="text-justify text-sm md:text-base">
            At Bhandari Repository, we specialize in providing reliable and flexible primary and secondary transport services. Primary transport covers the movement of goods from production points to distribution hubs, while secondary transport focuses on delivering products from warehouses to end customers or retail outlets. Our fleet of modern, well-maintained vehicles is equipped to handle all types of cargo, ensuring that your goods are transported safely and on time. We leverage GPS tracking and route optimization software to maximize efficiency and minimize delays, ensuring punctual deliveries even in high-demand periods. Whether you're transporting small parcels or bulk goods, our solutions are scalable to meet your specific needs. Our transport services are designed to support seamless supply chain operations, allowing you to focus on growing your business while we handle the logistics.
            </p>
          </div>
          <div className="w-full hidden md:block md:w-[45%] h-auto md:h-[450px] shadow-md mt-5 md:mt-0">
            <img
              className="w-full h-full object-cover"
              src={vector}
              alt="Our Commitment"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full hidden md:block md:w-[45%] h-auto md:h-[450px] shadow-md md:order-1">
            <img
              className="w-full h-full object-cover"
              src={packaging}
              alt="Operational Transparency"
            />
          </div>
          <div className="w-full md:w-[45%] flex flex-col justify-center items-start gap-5 md:gap-[30px] px-4 md:order-2">
            <h1 className="w-full text-2xl text-center md:text-start md:text-4xl font-bold">
            Packaging Solutions
            </h1>
            <div className=" md:hidden w-full h-auto shadow-md mt-5 md:mt-0">
              <img
                className="w-full h-full object-cover"
                src={packaging}
                alt="Our Experience"
              />
            </div>
            <p className="text-justify text-sm md:text-base">
            Bhandari Repository offers comprehensive packaging solutions that cater to the diverse needs of various industries. We understand that proper packaging is crucial to protecting goods during transit, preventing damage, and ensuring customer satisfaction. Our team works with you to design customized packaging that fits the specific requirements of your products, whether they need cushioning, temperature control, or specialized containers. We use high-quality materials that are eco-friendly and cost-effective, ensuring both durability and sustainability. Additionally, we offer innovative packaging options that reduce waste and optimize space, helping to lower shipping costs. With expertise in various packaging techniques, including shrink-wrapping, palletization, and cartonizing, we provide end-to-end packaging solutions that enhance the safety and integrity of your shipments.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-[45%] flex flex-col justify-center items-start gap-5 md:gap-[30px] px-4">
            <h1 className="w-full text-2xl text-center md:text-start md:text-4xl font-bold">
            Pallets and Equipment Sharing
            </h1>
            <div className=" md:hidden w-full h-auto shadow-md mt-5 md:mt-0">
              <img
                className="w-full h-full object-cover"
                src={warehouse}
                alt="Our Experience"
              />
            </div>
            <p className="text-justify text-sm md:text-base">
            At Bhandari Repository, our pallets and equipment sharing service offers businesses a sustainable, cost-effective way to manage logistics resources. Rather than investing in and maintaining your own equipment, you can access our network of pallets, crates, and other handling equipment as needed. This system reduces capital expenditure while ensuring you always have the necessary tools to move goods efficiently through the supply chain. We offer a variety of pallet sizes and types to accommodate different product needs, from lightweight goods to heavy industrial materials. By sharing equipment, businesses can reduce waste, lower carbon footprints, and improve operational efficiency. Our equipment sharing model is designed to promote circular economy practices, ensuring that logistics operations are not only efficient but also environmentally responsible.
            </p>
          </div>
          <div className="w-full hidden md:block md:w-[45%] h-auto md:h-[450px] shadow-md mt-5 md:mt-0">
            <img
              className="w-full h-full object-cover"
              src={warehouse}
              alt="Our Commitment"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full hidden md:block md:w-[45%] h-auto md:h-[450px] shadow-md md:order-1">
            <img
              className="w-full h-full object-cover"
              src={rake}
              alt="Operational Transparency"
            />
          </div>
          <div className="w-full md:w-[45%] flex flex-col justify-center items-start gap-5 md:gap-[30px] px-4 md:order-2">
            <h1 className="w-full text-2xl text-center md:text-start md:text-4xl font-bold">
            Rake Management
            </h1>
            <div className=" md:hidden w-full h-auto shadow-md mt-5 md:mt-0">
              <img
                className="w-full h-full object-cover"
                src={rake}
                alt="Our Experience"
              />
            </div>
            <p className="text-justify text-sm md:text-base">
            Bhandari Repository’s rake management services are designed to streamline the use of rail transportation for large-scale goods movement. Managing a full rake, which typically consists of multiple rail cars, requires precise coordination and scheduling to ensure timely loading, transit, and unloading. Our expert team handles every aspect of the rake management process, from booking rail slots to overseeing the logistics of moving bulk materials such as coal, steel, or agricultural products. We ensure that rakes are optimally loaded to maximize space and minimize transit times, reducing overall costs. Additionally, we monitor real-time rail movements, providing updates and ensuring that any delays are swiftly addressed. Our rake management services allow businesses to move large quantities of goods efficiently across long distances while minimizing the environmental impact of transportation.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-[45%] flex flex-col justify-center items-start gap-5 md:gap-[30px] px-4">
            <h1 className="w-full text-2xl text-center md:text-start md:text-4xl font-bold">
            Express Distribution and Reverse Logistics
            </h1>
            <div className=" md:hidden w-full h-auto shadow-md mt-5 md:mt-0">
              <img
                className="w-full h-full object-cover"
                src={dist}
                alt="Our Experience"
              />
            </div>
            <p className="text-justify text-sm md:text-base">
            Bhandari Repository’s express distribution services are tailored for businesses that need quick, efficient delivery solutions. Whether you're shipping high-priority goods to customers or managing time-sensitive deliveries, our express distribution network ensures your products reach their destinations promptly. We use a combination of air, road, and rail transportation to offer the fastest possible shipping options. In addition to forward logistics, we also specialize in reverse logistics, helping businesses manage returns, exchanges, and recycling efficiently. Our reverse logistics process ensures that returned products are handled professionally, minimizing waste and maximizing the value recovered from returned items. With a focus on sustainability and customer satisfaction, our express distribution and reverse logistics services provide seamless end-to-end supply chain management.
            </p>
          </div>
          <div className="w-full hidden md:block md:w-[45%] h-auto md:h-[450px] shadow-md mt-5 md:mt-0">
            <img
              className="w-full h-full object-cover"
              src={dist}
              alt="Our Commitment"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full hidden md:block md:w-[45%] h-auto md:h-[450px] shadow-md md:order-1">
            <img
              className="w-full h-full object-cover"
              src={frieght}
              alt="Operational Transparency"
            />
          </div>
          <div className="w-full md:w-[45%] flex flex-col justify-center items-start gap-5 md:gap-[30px] px-4 md:order-2">
            <h1 className="w-full text-2xl text-center md:text-start md:text-4xl font-bold">
            Freight Forwarding Services
            </h1>
            <div className=" md:hidden w-full h-auto shadow-md mt-5 md:mt-0">
              <img
                className="w-full h-full object-cover"
                src={frieght}
                alt="Our Experience"
              />
            </div>
            <p className="text-justify text-sm md:text-base">
            Bhandari Repository offers comprehensive freight forwarding services, ensuring your goods are transported seamlessly across international borders. We handle all aspects of the logistics process, from negotiating freight rates to managing shipping documentation and ensuring compliance with international trade regulations. Our global network of shipping partners allows us to offer a wide range of transport options, including air, sea, and road freight, depending on your requirements. We coordinate the entire shipping process, including customs clearance, cargo insurance, and warehousing at destination ports, ensuring that your products arrive safely and on time. With real-time tracking and dedicated customer support, our freight forwarding services provide businesses with the peace of mind that their international shipments are in expert hands. Whether you're exporting goods to new markets or managing complex supply chains, we deliver reliable, cost-effective freight solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailservice;
