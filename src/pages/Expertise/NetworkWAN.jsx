import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const NetworkWAN = () => {

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
              <h1 className="pm:text-[23px] ease-linear duration-200 hover:text-yellow-400 text-[2rem]">Strategic Network Consultancy</h1>
              <div className="h-[1px] w-[60px] border-white border-[1px] ease-linear duration-200 hover:h-[6px] rounded-md bg-white"></div>
              <h2 className="pm:text-[18px] ease-linear duration-200 hover:text-yellow-400 text-2xl">Securing | Connecting | Optimizing </h2>
              <p className="pm:text-[16px]  text-gray-300 leading-8">
                Anita Impex specializes in technical network consultancy. Our team of seasoned consultants has assisted numerous organizations in shaping their network strategy, procuring new network infrastructure, and achieving substantial cost savings through practices such as audits and contract renegotiations.
              </p>
            </div>

            <img
              data-aos='fade-left'
              className="sm:h-[200px] sr:w-full xl:relative xl:h-[400px] xl:right-0 xl:w-[820px] pointer-events-none absolute w-[920px] object-cover right-[70px] h-[616px]"
              src="/EM4.png"
            />    
          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center mt-40">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">WAN Consulting Services</h2>
              <div className="flex flex-col gap-10">
              <p className="pm:text-[15px]  text-gray-700 leading-8">Anita Impex is an independent networking consultancy offering a range of services, from achieving cost savings through network audits and contract negotiations to providing expertise in network strategy and WAN procurement. Our proven methodologies, approach, and experience ensure that our clients receive top-notch advice and guidance on technology, suppliers, and solutions.</p>
              <p className="pm:text-[15px] text-gray-700 leading-8">We recognize the business benefits of a well-thought-out network strategy and understand the practical aspects of technology in the real world. Our knowledge allows us to provide clients with a pragmatic view of the WAN landscape, leveraging our years of experience.</p>
              <p className="sp: pm:text-[15px] text-gray-700 leading-8">Anita Impex considers all factors when examining a network, including service locations, required service levels, latency, RTD, company profile, and broader services strategy. All of these elements ensure the best possible approach for the business.</p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
            <img data-aos='fade-up' src="/p16.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
          </div>
        </div>


            <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <img data-aos='fade-up'  src="/nw.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Strategic Network Planning</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">As businesses adapt to market conditions, network innovation has followed suit. With many companies turning to the Cloud for operational savings, security, and agility, networks have evolved to meet these demands.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">For years, Anita Impex has been instrumental in helping clients shape their network strategy. We collaborate with clients to set clear, achievable goals based on real-world experience. Recognizing that a one-size-fits-all approach doesn't work, we ensure that whether it's an MPLS, Hybrid, SD-WAN, or Internet-only solution, your network strategy aligns with the business's needs over the next 5+ years.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Our consultants comprehend the technology, market dynamics, and supplier landscape to offer comprehensive advice, ensuring your strategy aligns with commercial, functional, and business requirements. For more details on our strategic approach, please contact one of our consultants.</p>
              </div>
              <div className="sr:left-0 border-[1px]  relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>

          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Network Procurement Management</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Anita Impex's team of network consultants is consistently involved in procuring new WAN infrastructure for our clients. Covering supplier requirements, solution design, implementation, support, and commercial negotiation, we possess the processes, documentation, experience, and skills for an efficient, auditable procurement process.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Whether the project emphasis is on cost, management, increased efficiency, or a combination of these, our consultants collaborate closely with clients to ensure the right solution, partner, and commercial deal is achieved.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Catering to both domestic and international needs, our experience in different markets positions us to understand the advantages and pitfalls of various approaches. By choosing Anita Impex as your partner, we can assist you in:</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">
                  - Identifying functional, strategic, and operational requirements<br></br>
                  - Developing technical and procedural procurement documents (RFP/ITT)<br></br>
                  - Identifying suitable suppliers<br></br>
                  - Managing the procurement process<br></br>
                  - Evaluating supplier solutions<br></br>
                  - Negotiating the best possible support agreement and cost
                </p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div> 
            <img data-aos='fade-up'  src="/nw1.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>

          </div>
        </div>


            <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <img data-aos='fade-up'  src="/nw2.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Optimizing Network Costs</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">The first step to achieving savings on your network is understanding what you have, where it is, and how much it costs. This knowledge ensures that cost-cutting measures won't impact users.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Invoices are often signed off without a thorough review, leading to ongoing unnecessary expenses. Conducting an audit can identify redundant services, provide a full inventory list, ensure services are on the correct tariff, and lay the foundation for other initiatives such as procurement or strategy development.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">WAN Benchmarking offers market rates for services, enabling you to renegotiate with an incumbent supplier or create a business case. For more information on optimizing costs through a network audit or benchmarking exercise, please contact us. To learn more about our cost-saving practices, click on the "Learn More" button below.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we can help manage cost efficiencies through a range of services, including:</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">
                  - Auditing: Understanding your network inventory, identifying redundant services, and ensuring no impact on user service.<br></br>
                  - Benchmarking: Knowing market rates for services to create a business case or renegotiate with an existing supplier.<br></br>
                  - Procurement: Procuring a new supplier to provide services at a more cost-effective rate.<br></br>
                  - Contract Renegotiation: Negotiating a contract to ensure competitive rates and future flexibility for further cost reduction.
                </p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>

          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Negotiating Contract Terms</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Clients often express satisfaction with their incumbent supplier, having built relationships over many years. However, as costs generally decrease over time, clients seek better commercial terms or adjustments in service levels to align with current business needs.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Our consultants specialize in telecoms contract negotiations, understanding market rates and achievable service levels. Utilizing Anita Impex's contract renegotiation service offers numerous benefits:</p>
                <p className="text-gray-700 leading-8">
                  - Achieve the highest possible savings<br></br>
                  - Implement changes without costly infrastructure modifications<br></br>
                  - Realize savings quickly<br></br>
                  - Maintain a positive relationship with the incumbent supplier<br></br>
                  - Negotiate from a position of knowledge, ensuring service levels can be met<br></br>
                </p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>
            <img data-aos='fade-up' src="/nw3.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>

          </div> 
        </div>

  </section>
  )
}
export default NetworkWAN