import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const UnifiedCommunications = () => {
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
              <h1 className="pm:text-[23px] ease-linear duration-200 hover:text-yellow-400 text-[2rem]">Unified Communications Experts</h1>
              <div className="h-[1px] w-[60px] border-white border-[1px] ease-linear duration-200 hover:h-[6px] rounded-md bg-white"></div>
              <h2 className="pm:text-[18px] ease-linear duration-200 hover:text-yellow-400 text-2xl">Connect | Collaborate | Communicate</h2>
              <p className="pm:text-[16px]  text-gray-300 leading-8">
                With over 4 years of experience, our UC consultants specialize in providing strategies, procurement, audits, cost-saving initiatives, and various other consultancy services. We assist clients in integrating telephony, collaboration, contact center, and meeting room experiences to enhance efficiency, control costs, and create a flexible working environment for staff, regardless of location.
              </p>
            </div>

            <img
              data-aos='fade-left'
              className="sm:h-[200px] sr:w-full xl:relative xl:h-[400px] xl:right-0 xl:w-[820px] pointer-events-none absolute w-[920px] object-cover right-[70px] h-[616px]"
              src="/EM3.png"
            />    
          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center mt-40">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Unified Communications Consulting</h2>
              <div className="flex flex-col gap-10">
              <p className="pm:text-[15px]  text-gray-700 leading-8">Anita Impex is an independent UC consultancy, offering telephony audits, benchmarking exercises, strategies, and procurement for some of the most well-known brands and companies in the UK.</p>
              <p className="pm:text-[15px] text-gray-700 leading-8">Our consultants comprehend the benefits of unified communications and how UC functions in the real world. Our expertise enables us to provide clients with a practical perspective on UC, establishing tangible business benefits.</p>
              <p className="sp: pm:text-[15px] text-gray-700 leading-8">Anita Impex takes all factors into account when assisting clients, ensuring that suppliers, products, and solutions are the best possible fit for the requirement.</p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
            <img data-aos='fade-up' src="/p14.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
          </div>
        </div>


        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <img data-aos='fade-up'  src="/uc.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Unified Communications Strategy</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Unified Communications (UC) is an umbrella term for integrating various technologies. When formulating a UC strategy, you're essentially defining how your business communicates.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">From basic telephone calls to complex international, rich-media UC Video Conferences integrated with CRM, ERP, and calendar systems, UC covers a wide spectrum. Some companies even consider their contact centers as part of UC due to their multimedia environments and complex platform integrations.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">UC can be as simple or complex as needed, but crafting the right strategy to meet future business demands is crucial to staying ahead. Shifting attitudes toward work practices require staying updated with the latest industry information and market knowledge.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">We help clients define their UC strategy by aligning it with business goals, ensuring flexibility for future opportunities, regardless of the chosen route.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Our consultants have crafted strategies for companies of all sizes, leveraging market knowledge to assist you at any stage of the process.</p>
              </div>
              <div className="sr:left-0 border-[1px]  relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Unified Communications Procurement</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Our Unified Communications Consultants consistently manage procurement for new UC solutions. Covering company profiles, solution design, implementation, support, and commercial negotiation, we have the processes, documentation, experience, and technical expertise for an efficient, fully auditable process.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Successful UC procurement requires knowing the market landscape and having up-to-date information on suppliers and manufacturers. At Anita Impex, we understand the challenges and, through years of experience, can guide clients to the right solution.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">By choosing Anita Impex as your partner, we assist you in:</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">
                  - Identifying functional, strategic, and operational requirements<br></br>
                  - Developing a technical and procedural procurement document (RFP/ITT)<br></br>
                  - Identifying suitable suppliers<br></br>
                  - Managing the procurement process<br></br>
                  - Evaluating supplier solutions<br></br>
                  - Negotiating the best possible support agreement and cost<br></br>
                </p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div> 
            <img data-aos='fade-up'  src="/uc1.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <img data-aos='fade-up'  src="/uc2.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Telecoms Cost Savings</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Telephony is often the most critical communication tool in any business. However, it is frequently neglected for years, presenting an ideal area for cost savings and efficiency improvements.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">From office closures and unused services to maintenance renewal costs and redundant equipment, cost-saving opportunities in telephony are diverse. Without proactive management, it's easy to simply approve invoices without considering potential savings.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we can assist in managing cost efficiencies through various services, including:</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">
                  - Auditing: Understanding what you have, where it is, and what can be removed without affecting service to staff.<br></br>
                  - Benchmarking: Knowing market rates for services to create a business case or renegotiate a contract with an existing supplier.<br></br> 
                  - Procurement: Procuring a new supplier to provide services at a more cost-effective rate.<br></br>
                  - Contract Renegotiation: Negotiating a contract to ensure competitive rates now and flexibility in the future to further reduce costs.
                </p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Contract Renegotiation</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Clients often find satisfaction with their incumbent suppliers, having built relationships over many years and being content with the service provided. However, costs generally decrease year on year, prompting clients to seek better commercial terms or adjustments in service levels to meet current business needs.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Our consultants excel in telecoms contract negotiations, understanding market rates and achievable service levels.</p>
                <p className="text-gray-700 leading-8">By utilizing Anita Impex's contract renegotiation service, you can benefit from: </p>
                <p className="pm:text-[13px] text-gray-700 leading-8">
                  - The highest possible savings<br></br>
                  - No costly change to infrastructure<br></br>
                  - Achieving savings quickly<br></br>
                  - Maintaining a good relationship with the incumbent supplier<br></br>
                  - Negotiating from a position of knowledge to ensure service levels can be met
                </p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
            <img data-aos='fade-up' src="/im52.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
          </div> 
        </div>

  </section>
  )
}
export default UnifiedCommunications