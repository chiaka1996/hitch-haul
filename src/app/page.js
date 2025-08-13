"use client"

import React from 'react';
import Image from "next/image";
import Nav from "./components/Nav"
import Link from "next/link";

export default function Home() {
  return (
    <main className="scroll-smooth">
      {/* banner */}
      <Nav />
      <section id="home" className="font-poppins bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://res.cloudinary.com/chiaka/image/upload/v1754751516/2151998729_a06trf.png')] bg-cover bg-center w-full min-h-screen">
        <div className="max-w-full lg:max-w-[1300px] mx-auto px-[10px] md:px-[20px] text-[#fff] flex flex-col gap-y-[10px]">
        <h1 className="text-[50px] md:text-[80px] lg:text-[139px] font-[600] leading-[65px] md:leading-[92px] lg:leading-[170px] mt-[150px]">
          Hitch <span className="text-[#004AAD]">&</span> Haul
        </h1>
        <h2 className="text-[30px] lg:text-[105px] leading-[42px] lg:leading-[120px] font-[500]">Logistic</h2>

        <p className="max-w-[90%] md:max-w-[500px]  text-base md:text-lg mt-[5px] font-[600] mb-[10px] text-[#D1D5DB] ">
          We don&apos;t just ship, we deliver confidence. We are your trusted partner for fast, safe, and seamless logistics across the world.
        </p>
        <Link href="#contact">
        <button className="bg-[#004AAD] rounded-[8px] cursor-pointer hover:bg-[#4F86E8] w-[150px] h-[40px] border border-[#004AAd] outline-none">Get in touch</button>
        </Link>
        </div> 
        </section>

         {/* about us */}
        <section id="about-us" className="flex flex-row py-[50px] md:py-[100px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.3)),url('https://res.cloudinary.com/chiaka/image/upload/v1754752843/4568_wvyv9u.jpg')] bg-cover bg-center w-full">
         <div className="w-full max-w-[1300px] mx-auto px-[10px] md:px-[20px]">
          <div className="max-w-[800px] bg-[#004AAD] min-h-[150px] text-[#fff] p-[20px] md:p-[40px] rounded-[10px]">
          <h2 className="text-[30px] md:text-[52px] lg:text-[74px] leading-[40px] md:leading-[62px] lg:leading-[84px] font-[600]">About Our <br/> <span>Company</span></h2>
          <p className="text-base md:text-lg lg:text-xl font-[500] mt-[10px]">
            Welcome to Hitch & Haul Nigeria LTD, your premier logistics partner dedicated to providing comprehensive and 
            tailored logistics solutions across Nigeria. With a deep understanding of the complexities involved in supply 
            chain management, warehousing, and transportation, 
            we focus on delivering excellence to ensure your business runs smoothly and efficiently.
          </p>
          </div>
        </div>
        </section>

        {/* our mission */}
        <section className="flex flex-row py-[50px] md:py-[100px] xl:items-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.3)),url('https://res.cloudinary.com/chiaka/image/upload/v1754751516/2151998729_a06trf.png')] bg-cover bg-center w-full">
          <div className="w-full max-w-[1300px] px-[20px] mx-auto grid md:grid-cols-2 items-center">
              <div className="relative max-w-[700px] h-[350px] md:h-[500px]">
                <Image
                src="https://res.cloudinary.com/chiaka/image/upload/f_auto,q_auto,w_1920/v1755012840/ChatGPT_Image_Aug_12_2025_04_26_26_PM_iqhrrq.png"
                fill
                alt="hitch and haul mission"
                className="bg-center"
                />
              </div>
              <div className="w-full min-h-[60px] bg-[#fff] p-[20px] md:p-[50px] text-[#004AAD]">
                <h2 className="text-[30px] md:text-[52px] lg:text-[74px] leading-[40px] md:leading-[62px] lg:leading-[84px] font-[600]">Our Mission</h2>
                <p className="text-base md:text-lg lg:text-xl font-[500] mt-[10px]">At Hitch & Haul, our mission is to simplify your logistics needs by offering innovative solutions that enhance operational efficiency
                   and reduce costs. We believe that every client deserves personalized attention, 
                  and we are committed to understanding your unique requirements. 
                  Our aim is to foster long-term partnerships built on trust and reliability.</p>
              </div>
              <div>

              </div>
          </div>
        </section>

        {/* our vision */}
        <section className="flex flex-row py-[50px] md:py-[100px] xl:items-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.7)),url('https://res.cloudinary.com/chiaka/image/upload/v1754751516/2151998729_a06trf.png')] bg-cover bg-center w-full">
          <div className="w-full max-w-[1300px] px-[20px] mx-auto grid md:grid-cols-2 items-center">
            <div className="w-full min-h-[60px] p-[20px] md:p-[50px] text-[#fff] bg-[#004AAD]">
                <h2 className="text-[30px] md:text-[52px] lg:text-[74px] leading-[40px] md:leading-[62px] lg:leading-[84px] font-[600]">Our Vision</h2>
                <p className="text-base md:text-lg lg:text-xl font-[500] mt-[10px]">
                  To be the leading logistics solution and supply chain provider in Nigeria, 
                  dedicated to revolutionizing the transportation industry through innovative, efficient, 
                  and sustainable solutions that connect businesses and communities seamlessly
                </p>
              </div>
              <div className="relative max-w-[700px] h-[350px] md:h-[500px]">
                <Image
                src="https://res.cloudinary.com/chiaka/image/upload/f_auto,q_auto,w_1920/v1755016583/ChatGPT_Image_Aug_12_2025_05_31_38_PM_jvayoq.png"
                fill
                alt="hitch and haul vision"
                className="bg-center"
                />
              </div>
              <div>
              </div>
          </div>
        </section>

        {/* our projected timeline */}
        <section className="flex flex-row w-full">
          <div className="max-w-[1300px] mx-auto px-[20px] text-[#002649] flex flex-col lg:flex-row gap-[20px]">
          <div className="w-full lg:w-[60%] pt-[50px] lg:pt-[100px]">
            <div className="flex flex-col md:flex-row gap-[20px]">
              <h2 className="text-[30px] md:text-[52px] lg:text-[74px] leading-[40px] md:leading-[62px] lg:leading-[84px] font-[600]">Our Projected Timeline</h2>
              <p className="text-base md:text-lg lg:text-xl font-[500]">At Hitch & Hall Nigeria LTD, we are committed to 
                redefining the logistics landscape from 2025 to 2028. 
                Our strategic roadmap outlines our ambitious plans to enhance service delivery, 
                leverage innovative technologies, and foster sustainability. 
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[30px] md:mt-[50px]">
              <div>
                <h3 className="text-[30px] font-[600] md:text-center">2025</h3>
                <div className="text-[15px]">
                  Conduct a comprehensive market analysis to identify key growth areas and customer needs in the logistics sector.
                  Strengthen operational processes by implementing advanced logistics software for supply chain management, enhancing efficiency.
                  Expand fleet size by 20% to accommodate increasing demand, incorporating various transportation modes for better service offerings.
                  Launch a brand awareness campaign focusing on Hitch & Hall&apos;s unique logistics solutions and commitment to customer satisfaction across Nigeria
                </div>
              </div>

              <div>
                <h3 className="text-[30px] font-[600] md:text-center">2026</h3>
                <div className="text-[15px]">
                  To open regional distribution centers in strategic locations to improve service delivery speed and efficiency across Nigeria.
                  Form alliances with local businesses and manufacturers to provide integrated logistics solutions, fostering long-term partnerships.
                  To introduce specialized services, including cold chain logistics, last-mile delivery, and e-commerce solutions, catering to diverse industry needs.
                  To achieve a 25% increase in market share within the logistics sector through targeted marketing and strategic partnerships.
                </div>
              </div>

              <div>
                <h3 className="text-[30px] font-[600] md:text-center">2027</h3>
                <div className="text-[15px]">
                  <p>To implement a sustainability strategy focused on reducing environmental impact, including a transition to electric and eco-friendly vehicles.</p>
                  <p>To expand community engagement initiatives, emphasizing local hiring and training programs to develop logistics talent in Nigeria.</p>
                  <p>To achieve a 30% operational efficiency boost through the integration of AI and machine learning for route optimization and resource management.</p>
                  <p>To finalize a 5-year strategic vision that emphasizes sustainable growth, innovative logistics technologies, and continued market leadership.</p>

                </div>
              </div>

            </div>


          </div>
          <div className="bg-[url('https://res.cloudinary.com/chiaka/image/upload/v1754751516/2151998729_a06trf.png')] min-h-[100%] w-[40%] bg-cover bg-center hidden lg:block"></div>
          </div>
        </section>

        {/* our services */}
        <section id="service" className="text-[#002649] bg-[#fff] py-[50px] lg:py-[100px]">
          <main className="grid lg:grid-cols-2 gap-[50px] items-center max-w-[1300px] mx-auto px-[20px]">
          <div className="">
            <h2 className="text-[30px] md:text-[52px] lg:text-[74px] leading-[40px] md:leading-[62px] lg:leading-[84px] font-[600]">Our  <span className="lg:block">Services</span></h2>
            <div className="flex flex-col gap-y-[5px] mt-[5px] md:mt-0">
              <div>
                <h4 className="text-[20px] font-[600]">Transportation Services</h4>
                <ul className="text-[16px] list-disc pl-5">
                  <li>
                    Freight: We offer safe and efficient road, seaport transport solutions, with a fleet of vehicles ready to handle cargo of all sizes, from local to long-distance deliveries.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[20px] font-[600]">Supply Chain Management</h4>
                <ul className="text-[16px] list-disc pl-5">
                  <li>
                   Integrated Solutions: Holistic supply chain services that streamline processes from procurement to final delivery.
                  </li>
                  <li>
                    Consultation Services: Expert advice on optimizing your supply chain for maximum efficiency and cost-effectiveness.
                  </li>
                </ul>
              </div>
               <div>
                <h4 className="text-[20px] font-[600]">Project Logistics</h4>
                <ul className="text-[16px] list-disc pl-5">
                  <li>
                  Tailored Solutions: Specialized logistics services for large projects and complex cargo management, including heavy lifting and oversized shipments.
                  </li>
                  <li>
                    End-to-End Management: Comprehensive support from planning and execution to final delivery, ensuring all project milestones are met.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[20px] font-[600]">Warehousing Solutions</h4>
                <ul className="text-[16px] list-disc pl-5">
                  <li>
                  Secure Storage: State-of-the-art warehousing facilities equipped with advanced security systems to protect your goods.
                  </li>
                  <li>
                    Inventory Management: Tailored inventory solutions ensuring efficient stock management and real-time tracking of your assets.
                  </li>
                  <li>
                    Distribution Services: Expert handling and timely distribution of products to meet retailer demands and customer needs.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col md:flex-row gap-[10px]">
              <div className="relative w-full md:w-[50%] h-[250px] bg-[url('https://res.cloudinary.com/chiaka/image/upload/f_auto/q_auto,w_1920/v1755022389/2151919260_yk19zh.jpg')] bg-cover bg-center">
              <div className="bg-[#fff] text-[#000] text-[16px] font-[500] w-[80%] text-center absolute left-[10%] bottom-[5px] shadow-md shadow-[#000]  py-[2px]">
                TRANSPORTATION SERVICES
              </div>
              </div>
              <div className="relative w-full md:w-[50%] h-[250px] bg-[url('https://res.cloudinary.com/chiaka/image/upload/v1755023201/4716_uqeljp.jpg')] bg-cover bg-center">
              <div className="bg-[#fff] text-[#000] text-[16px] font-[500] w-[80%] text-center absolute left-[10%] bottom-[5px] shadow-md shadow-[#000] py-[2px]">
              SUPPLY CHAIN MANAGEMENT
              </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[10px]">
              <div className="relative w-full md:w-[50%] h-[250px] bg-[url('https://res.cloudinary.com/chiaka/image/upload/v1755023505/974811_OGFB4G0_i8lrid.jpg')] bg-cover bg-center">
                <div className="bg-[#fff] text-[#000] text-[16px] font-[500] w-[80%] text-center absolute left-[10%] bottom-[5px] shadow-md shadow-[#000] py-[2px]">
                PROJECT LOGISTICS
                </div>
              </div>
              <div className="relative w-full md:w-[50%] h-[250px] bg-[url('https://res.cloudinary.com/chiaka/image/upload/v1755023881/1482_jkdtoe.jpg')] bg-cover bg-center">
                <div className="bg-[#fff] text-[#000] text-[16px] font-[500] w-[80%] text-center absolute left-[10%] bottom-[5px] shadow-md shadow-[#000] py-[2px]">
                WAREHOUSING SOLUTIONS
                </div>
              </div>
            </div>
          </div>
        </main>
        </section>

        {/* meet our team */}
        <section className="text-[#fff] py-[50px] lg:py-[100px] px-[20px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url('https://res.cloudinary.com/chiaka/image/upload/v1754751516/2151998729_a06trf.png')] bg-cover bg-center w-full">
          <h2 className="text-[30px] md:text-[52px] lg:text-[74px] leading-[40px] md:leading-[62px] lg:leading-[84px] font-[600] text-center">Meet Our Team</h2>
          <div className="flex flex-col md:flex-row justify-center mt-[50px] gap-[50px]">
          <div className="relative w-full md:w-[50%] lg:w-[250px] min-h-[350px] bg-[url('/images/ceo.webp')] bg-center bg-contain bg-no-repeat rounded-[8px]">
            <div className="bg-[#fff] text-[#000083] text-[16px] font-[500] w-[80%] text-center absolute left-[10%] bottom-[5px] shadow-md shadow-[#000] py-[2px]">
            <span className="font-[600]">Adeshina Ogunleye</span><span className="block">MD/CEO</span>
            </div>
          </div>
          <div className="relative w-full md:w-[50%] lg:w-[250px] min-h-[350px] bg-[url('/images/cto.png')] bg-center bg-contain bg-no-repeat rounded-[8px]">
            <div className="bg-[#fff] text-[#000083] text-[16px] font-[500] w-[80%] text-center absolute left-[10%] bottom-[5px] shadow-md shadow-[#000] py-[2px]">
              <span className="font-[600]">Olanrewaju Ogunleye</span><span className="block">ED/CTO</span>
            </div>
          </div>
          </div>
        </section>

        {/* safest logistics solution */}
        <section className="bg-[#fff]">
          <div className="max-w-[1300px] mx-auto px-[20px] text-[#D1D5DB] flex flex-col lg:flex-row gap-x-[50px] font-[400]">
            <div className="w-full lg:w-[60%] text-[#002649] py-[50px] lg:py-[120px]">
            <h2 className="text-[34px] md:text-[54px] leading-[46px] md:leading-[70px] font-[600]">Safest Logistics Solutions Provided With Integrity</h2>
            <p className="text-[18px] mt-[5px]">
              At Hitch & Haul Nigeria LTD, we believe that safety and integrity are the cornerstones of exceptional logistics service. As the leading logistics solutions provider in Nigeria, we prioritize the security of your goods and the trust of our clients above all else.
            </p>
            <ul className="pl-5 list-disc text-[18px] flex flex-col gap-y-[20px] mt-[20px]">
              <li>
                Safety First: Our robust safety protocols and advanced tracking systems ensure that your shipments are handled with the utmost care. 
                From the moment your cargo leaves your location until it reaches its destination, we implement stringent measures to protect your assets. Our trained professionals continuously 
                monitor every stage of the logistics process, ensuring compliance with safety standards and providing you with peace of mind.
              </li>
              <li>
                Integrity in Every Action: We operate with transparency and honesty in all our dealings. At Hitch & Hall,
                we value our relationships with clients and partners, believing that trust is built upon reliability and ethical practices. 
                We provide clear communication, fair pricing, and prompt service, ensuring that you are always informed and confident in our logistics solutions.
              </li>

              <li>
                Commitment to Excellence: Our dedication to excellence drives us to constantly improve and innovate our services. We invest in the latest technologies 
                and training for our team, allowing us to deliver efficient, dependable logistics solutions tailored to your needs.
              </li>
            </ul>
            <p className="mt-[20px] text-[18px]">Choose Hitch & Hall Nigeria LTD as your logistics partner, where safety meets integrity. Together, we will navigate the complexities of logistics, ensuring your business thrives without compromise.</p>
            </div>

            <div className="bg-[url('https://res.cloudinary.com/chiaka/image/upload/v1754925600/2152005472_cajo7m.jpg')] min-h-[100%] w-full lg:w-[40%] bg-cover bg-center"></div>
          </div>
        </section>
        {/* contact us */}
        <section id="contact" className="bg-[#002649]">
          <div className="max-w-[1300px] mx-auto px-[20px] flex flex-col lg:flex-row gap-x-[50px]">
            <div className="w-full lg:w-[55%] text-[#fff] py-[50px] lg:py-[100px]">
            <h2 className="text-[30px] md:text-[52px] lg:text-[74px] leading-[40px] md:leading-[62px] lg:leading-[84px] font-[600]">Reach Out To Us!</h2>
            <div className="flex flex-col gap-y-[30px]">
              <p>At Hitch & Haul Logistics, we are dedicated to providing exceptional service tailored to your transportation needs. 
                Whether you have questions, feedback, or require assistance, we&apos;re here to help! Please feel free to reach out to us through the following channels:
              </p>

              <p>
                Our team is ready to assist you with reliable logistics and transportation solutions. We look forward to hearing from you!
              </p>
              <div className="flex flex-col gap-[15px]">
                <div className="flex gap-[10px] items-center">
                  <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#fff]">
                  <span className="material-symbols-outlined text-[#002649]">public</span>
                  </div>
                  <span>www.handhnigerialtd.com</span>
                </div>

                <div className="flex gap-[10px] items-center">
                  <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#fff]">
                  <span className="material-symbols-outlined text-[#002649]">mail</span>
                  </div>
                  <span>contact@handhnigerialtd.com</span>
                </div>

                 <div className="flex gap-[10px] items-center">
                  <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#fff] shrink-0 ">
                  <span className="material-symbols-outlined text-[#002649]">location_on</span>
                  </div>
                  <span>22, Mohammed Shefiu St, Ago Palace Way, Okota, Lagos</span>
                </div>

                <div className="flex gap-[10px] items-center">
                  <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#fff]">
                  <span className="material-symbols-outlined text-[#002649]">phone_in_talk</span>
                  </div>
                  <span>+234 8036410865</span>
                </div>
              </div>
            </div>
            </div>
            <div className="bg-[url('https://res.cloudinary.com/chiaka/image/upload/v1754927834/42317_rjt4ww.jpg')] min-h-[100%] w-[45%] bg-cover bg-center"></div>
          </div>
        </section>
        <footer className="bg-[#ff] text-white py-4">
          <div className="text-center text-sm text-[#002649] font-[600]">
            © hitch-haul 2025
          </div>
        </footer>
    </main>
  );
}
