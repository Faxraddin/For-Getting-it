import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const TelecomsProcurement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing:'ease-in-out'
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <section style={{ overflow: 'hidden' }} className="fade-in w-full overflow-auto justify-center items-center flex flex-col">

        <div style={{ overflow: 'hidden' }} className="pm:pb-0 pm:pt-[100px] xl:h-auto xl:pt-[140px] xl:pb-[140px] w-full bg-black h-[870px] flex justify-center items-center">
          <div className="xl:flex-col pm:w-full pm:justify-center w-[90%] h-full items-center flex justify-items-end">
            <div data-aos='fade-right' style={{ overflow: 'hidden' }} className="md:w-full  sr:w-full xl:w-[820px] sm:p-[40px] w-[730px] bg-zinc-900 z-10 flex flex-col gap-5 text-white p-[90px] hover:bg-opacity-80 ease-linear duration-150 transition-opacity">
              <h1 className="pm:text-[23px] ease-linear duration-200 hover:text-yellow-400 text-[2rem]">Telecoms Procurement</h1>
              <div className="h-[1px] w-[60px] border-white border-[1px] ease-linear duration-200 hover:h-[6px] rounded-md bg-white"></div>
              <h2 className="pm:text-[18px] ease-linear duration-200 hover:text-yellow-400 text-2xl">Comprehensive, Robust, Efficient.</h2>
              <p className="pm:text-[16px]  text-gray-300 leading-8">
                A successful telecom procurement maximizes the balance between cost and benefit. Leveraging our technical knowledge and extensive experience in telecom procurement, we enhance efficiency, reduce timelines, and ensure comprehensive coverage, providing peace of mind for all aspects.
              </p>
            </div>
            <img
              data-aos='fade-left'
              className="sm:h-[200px] sr:w-full xl:relative xl:h-[400px] xl:right-0 xl:w-[820px] pointer-events-none absolute w-[920px] object-cover right-[70px] h-[616px]"
              src="/Procurementpng.png"
            />    
          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center mt-40">
            <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
              <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
                <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Telecoms Procurement Consulting</h2>
                <div className="flex flex-col gap-10">
                    <p className="pm:text-[15px]  text-gray-700 leading-8">At Anita Impex, we recognize that there is no one-size-fits-all approach to telecommunications procurement. Our strategy is to be adaptable to our clients' unique needs.</p>
                    <p className="pm:text-[15px] text-gray-700 leading-8">We assist our clients by conducting requirements workshops, drafting specifications, and managing the entire procurement process, including contract negotiation and implementation support.</p>
                    <p className="sp: pm:text-[15px] text-gray-700 leading-8">Our extensive knowledge enables us to help clients procure multiple services that not only yield commercial benefits but also allow for the integration of features and functions, enhancing the overall user experience.</p>
                </div>
                <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
              </div>
              <img data-aos='fade-up' src="/p10.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
            </div>
          </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
            <img data-aos='fade-up'  src="/im12.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Contact Centre Procurement</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Procuring a new contact centre solution is no longer a simple like-for-like replacement. Customer Service now offers the opportunity to connect with customers in new and exciting ways.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Historically, integrating email provided a multimedia experience, but today's customers demand more than just voice and email. From integrating Social Media and SMS to Alexa Voice to Virtual Reality, knowing what's right for your business is crucial for a successful contact centre procurement.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we help clients identify requirements, draft technical, functional, and support specifications, identify suitable suppliers, manage the procurement process, evaluate supplier responses, and negotiate the best deal.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">For more information on our contact centre service, please click here below or contact us to start your project.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Our consultants have years of experience helping organizations transform their customer interactions through the procurement of replacement and new services.</p>
              </div>
              <div className="sr:left-0 border-[1px]  relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
          </div>
        </div>


        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 ease-linear duration-200 hover:text-yellow-400">UC / Telephony Procurement</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Unified Communications (UC) encompasses a diverse range of technologies, making it challenging to stay updated on industry developments. Major suppliers like Microsoft, Cisco, Mitel, Amazon, Google, RingCentral, 8x8, Fuze, Broadsoft, Short-Tel, etc., continually evolve their UC products.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we prioritize staying ahead of the market, understanding new innovations, current trends, and situations where solutions excel or fall short.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">We collaborate with you to determine the right fit for your business, the type of suppliers you want to engage with, and create customized procurement documentation based on your actual needs to achieve your goals.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">As a truly independent consultancy, Anita Impex doesn't accept commissions, savings, or incentives from suppliers. Our income solely comes from clients, ensuring a fair and auditable procurement process.</p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
            <img data-aos='fade-up' src="/im22.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <img data-aos='fade-up' src="/im32.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
            <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 ease-linear duration-200 hover:text-yellow-400">WAN Procurement</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Network technology is undergoing its most rapid change in a decade, from point-to-point and MPLS over the last 10 years to now SD-WAN and Hybrid Networks. Ensuring accurate network procurement has never been more critical.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">As IT transitions to the Cloud, either entirely or through a hybrid approach, connectivity needs are changing, and security has never been more vital.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we have the processes and experience to extract requirements, create specifications and procurement documents. We understand not only the technology, its integration, and benefits but also how to procure it cost-effectively while meeting business demands.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">We collaborate with clients to review the best market options based on criteria defined by you and guided by our experience.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">For more information on our Network consultancy services, please contact us to discuss your project.</p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 ease-linear duration-200 hover:text-yellow-400">Mobile Procurement</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Mobiles are often the device of choice for many employees, rendering the desk phone largely redundant. This shift emphasizes the importance of a well-executed mobile service procurement, ensuring the right contract meets requirements while keeping costs low.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we recognize the significance of mobile telephony and have conducted procurements saving our clients millions of pounds over their contract lifetimes. By understanding the market and supplier operations, we ensure a robust process and an independent review of proposals, enabling clients to leverage the best rates with the right contract terms to support the business.</p>
                <p className="pm:text-[13px] text-gray-700 leading-8">For more information on our mobile consulting services, please contact us to initiate your project.</p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
            <img data-aos='fade-up' src="/im42.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
          </div>
        </div>

    </section>
  );
};

export default TelecomsProcurement;