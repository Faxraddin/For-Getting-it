import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Mobile = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing:'ease-in-out-quad'
        });
        window.scrollTo(0, 0);
    }, []);
  return (
    <section style={{ overflow: 'hidden' }} className="fade-in w-full overflow-auto justify-center items-center flex flex-col">

        <div style={{ overflow: 'hidden' }} className="pm:pb-0 pm:pt-[100px] xl:h-auto xl:pt-[140px] xl:pb-[140px] w-full bg-black h-[870px] flex justify-center items-center">
          <div className="xl:flex-col pm:w-full pm:justify-center w-[90%] h-full items-center flex justify-items-end">
            <div data-aos='fade-right' style={{ overflow: 'hidden' }} className="md:w-full  sr:w-full xl:w-[820px] sm:p-[40px] w-[730px] bg-zinc-900 z-10 flex flex-col gap-5 text-white p-[90px] hover:bg-opacity-80 ease-linear duration-150 transition-opacity">
              <h1 className="pm:text-[23px] ease-linear duration-200 hover:text-yellow-400 text-[2rem]">Mobile Consulting Services</h1>
              <div className="h-[1px] w-[60px] border-white border-[1px] ease-linear duration-200 hover:h-[6px] rounded-md bg-white"></div>    
              <h2 className="pm:text-[18px] ease-linear duration-200 hover:text-yellow-400 text-2xl">Connecting Colleagues</h2>
              <p className="pm:text-[16px]  text-gray-300 leading-8">
                From mobile contracts to the Internet of Things (IoT), mobile communications is now core infrastructure for business. Ensuring the right strategy, competitive costs, and optimal service is crucial in today's fast-paced business environment.
              </p>
            </div>
            <img
              data-aos='fade-left'
              className="sm:h-[200px] sr:w-full xl:relative xl:h-[400px] xl:right-0 xl:w-[820px] pointer-events-none absolute w-[920px] object-cover right-[70px] h-[616px]"
              src="/EW5.png"
            />    
          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center mt-40">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Mobile Consulting Expertise</h2>
              <div className="flex flex-col gap-10">
              <p className="pm:text-[15px]  text-gray-700 leading-8">Enterprise mobility is a critical part of the corporate communications infrastructure. With an ever-changing marketplace and a dynamic workforce, it is essential that organizations know what they have, where it is, and that the strategy and solution are in place to keep costs low. Soniza's mobile consultants are experts across domestic and international customers, helping define strategies, run procurement, reduce costs, and implement new technology.</p>
              <p className="pm:text-[15px] text-gray-700 leading-8">Whether your drivers are cost savings or user flexibility, Soniza has the experience and industry knowledge to assist you.</p>
              <p className="sp: pm:text-[15px] text-gray-700 leading-8">Mobile telephony is often one of the most expensive items on a telecoms budget, especially if international travel is involved. Mobile services are essential for most organizations, and costs have dramatically reduced year on year. So why is it often the case that costs don't reduce on a telecoms bill? The answer is often proactive management or lack thereof.</p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
            <img data-aos='fade-up' src="/p15.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
          </div>
        </div>


        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <img data-aos='fade-up'  src="/m1.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Mobile Strategy Solutions</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">The correct mobile strategy provides flexibility for staff, reduces costs substantially, and increases transparency for users and management.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Anita Impex's approach is to look at the whole estate, understand business requirements, assess the geographical spread of connections, evaluate business processes, and analyze network coverage. Only then can you define a strategy.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">In defining a strategy, companies should be able to predict their expenditure, aligning with the overall business strategy, including expansion and role-based functionality.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Having defined the correct strategy, companies should partner with service providers that share their approach and are flexible to meet those needs. This may include new business initiatives where new technology and functionality can facilitate increased efficiencies, for example, connected devices (IoT).</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">For more information on our approach to strategy, please contact us to discuss how we can help with your project.</p>
              </div>
              <div className="sr:left-0 border-[1px]  relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>

          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Mobile Procurement Services</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Anita Impex's Mobile Consultants continually run procurement for new mobile solutions. Encompassing the company profile, solution design, implementation, support, and commercial negotiation, we have the processes, documentation, experience, and skills to ensure an efficient, auditable procurement process is achieved. This process allows Soniza a fair and independent review of the market when looking to procure a new mobile solution for clients.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Procuring a new mobile contract can be the most effective way to reduce spend and improve service. However, mobile comms is a complex area, and hidden costs can easily creep in unless you have a well-thought-through procurement model.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, our specialist mobile consultants ensure that procurement is in line with the mobile and wider business strategy so that there are no surprises and everything is taken into account.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we understand the challenges of Mobile procurement, and through years of experience, market knowledge, and an understanding of the technology, we can help our clients navigate to the right solution.</p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div> 
            <img data-aos='fade-up'  src="/m2.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>

          </div>
        </div>


            <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <img data-aos='fade-up'  src="/m3.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Mobile Audit Services</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Managing mobile estates poses various challenges, including uncontrollable costs, lost handsets, underutilized devices, and a lack of management information. Regaining control starts with a thorough audit of the mobile estate.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we understand the complexity of aligning these aspects, which is why we specialize in gathering information and taking action to reduce costs, ensuring you regain control and make informed decisions.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Within our audit process, we scrutinize the contract, actual billed costs, subscription tariffs, and usage tariffs (pence per minute/Mb). We compare contract rates with actual billing and recommend whether a service is necessary or can be canceled.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Clients leveraging our audit service typically save a minimum of 25% on their annual bill.</p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>

          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Mobile Benchmarking Services</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">A Benchmarking exercise empowers clients to determine if they are receiving good value for money, providing accurate market rates for services that can be compared with current contracted rates.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Benchmarking projects are typically initiated to create a business case for further projects (e.g., procurement) or to renegotiate a contract with an existing supplier.</p>
                <p className="pm:text-[13px] text-gray-700 leading-8">By conducting a benchmarking exercise with Soniza, clients gain independent information to inform business decisions, influencing strategy or commercial negotiation.</p>
                <p className="text-gray-400 leading-8">Benchmarking is often completed alongside an Audit process, allowing for maximum cost savings. We can also assist in renegotiating with an incumbent supplier.</p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
            <img data-aos='fade-up' src="/m4.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>

          </div> 
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <img data-aos='fade-up'  src="/m5.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Mobile Contract Renegotiation Services</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Clients often appreciate the services provided by a supplier but, when the contract ends, they also want to ensure they get the best possible value when resigning a contract.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Anita Impex offers contract negotiation/renegotiation on behalf of clients, ensuring value for money and mutually beneficial terms.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">With data on market rates and insight into supplier negotiation tendencies, Soniza positions clients to take advantage of industry knowledge.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">By utilizing Anita Impex, our clients gain:</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">
                    - Better commercial terms<br></br>
                    - Improved service levels<br></br>
                    - Enhanced technical solutions<br></br>
                    - Better operational support<br></br>
                    - Improved management visibility
                </p>
              </div>
              <div className="sr:left-0 border-[1px]  relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>

          </div>
        </div>

  </section>
  )
}
export default Mobile