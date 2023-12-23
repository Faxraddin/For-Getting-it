import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const TelecomsStrategy = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing:'ease-in-out'
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section style={{ overflow: 'hidden' }} className="fade-in w-full overflow-auto justify-center items-center flex flex-col">

      <div style={{ overflow: 'hidden' }} className="pm:pb-0 pm:pt-[100px] xl:h-auto xl:pt-[140px] xl:pb-[140px] w-full bg-black h-[870px] flex justify-center items-center ">
        <div className="xl:flex-col pm:w-full pm:justify-center w-[90%] h-full items-center flex justify-items-end">
          <div data-aos='fade-right' className=' md:w-full  sr:w-full xl:w-[820px] sm:p-[40px] w-[730px] bg-zinc-900 z-10 flex flex-col gap-5 text-white p-[90px] hover:bg-opacity-80 ease-linear duration-150 transition-opacity'>
            <h1 className="pm:text-[21px] ease-linear duration-200 hover:text-yellow-400 text-[2rem]">Media Strategy</h1>
            <div className="h-[1px] w-[60px] border-white border-[1px] ease-linear duration-200 hover:h-[6px] rounded-md bg-white"></div>
            <h2 className="pm:text-[18px] ease-linear duration-200 hover:text-yellow-400 text-2xl">Get It Right, First Time.</h2>
            <p className="pm:text-[16px] text-gray-300 leading-8">
  Transforming your business is possible with a strategic approach to telecommunications. It can propel you towards corporate goals, enhance organizational efficiency, and equip you to anticipate and meet evolving demands.
</p>

          </div>
      
          <img
            data-aos='fade-left'
            className="sm:h-[200px] sr:w-full xl:relative xl:h-[400px] xl:right-0 xl:w-[820px] pointer-events-none absolute w-[920px] object-cover right-[70px] h-[616px]"
            src="/CS.png"
          />    

        </div>
      </div>

      <div className="w-full bg-white flex h-auto justify-center items-center mt-40">
            <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
              <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
                <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Telecom Strategy Consulting</h2>
                <div className="flex flex-col gap-10">
                    <p className="pm:text-[15px] text-gray-700 leading-8">Whether you aim to reduce costs, replace an existing solution, or implement new technology, getting the strategy right enables you to map the process and assess various approaches effectively.</p>
                   <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we don't just grasp technology; we understand business. We pride ourselves on going the extra mile for our clients, considering all influences both inside and outside the organization.</p>
                   <p className="sp: pm:text-[15px] text-gray-700 leading-8">Anita Impex provides our clients with the confidence of working with a partner that has experience, a comprehensive understanding of what makes a good strategy, and offers practical, impartial, independent advice.</p>
                </div>
                <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
              </div>
              <img data-aos='fade-up' src="/p11.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
            </div>
          </div>

      <div className="w-full bg-white flex h-auto justify-center items-center">
        <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
          
          <img data-aos='fade-up'  src="/im1.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
          <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
            <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Contact Centre Strategy</h2>
            <div className="flex flex-col gap-10">
              <p className="pm:text-[15px] text-gray-700 leading-8">Ensuring your Contact Centre Strategy is well-planned can be the determining factor between success and failure in any market. The Contact Centre is where customers go to be served, obtain information, report faults, complain, and most importantly, often, to place an order or reorder. Simplifying these processes for both the customer and the business is the essence of the Contact Centre Strategy.</p>
              <p className="pm:text-[15px] text-gray-700 leading-8">Why not proactively provide customers with the information they seek before they contact you? Why not offer channels to your customers that don't require additional staffing resources but still meet customer demand? Why not eliminate friction from the ordering process to make it easy for customers? These are all questions to consider when creating an informed and outcome-focused strategy.</p>
              <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we have assisted numerous clients in realizing their goals based on real-world experience. We comprehend the market and, by collaborating with our clients, understand the demands of the modern customer experience.</p>
            </div>
            <div className="sr:left-0 border-[1px] relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
          </div>
        </div>
      </div>


      <div className="w-full bg-white flex h-auto justify-center items-center">
  <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
    
    <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
      <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">UC / Telephony Strategy</h2>
      <div className="flex flex-col gap-10">
        <p className="pm:text-[15px] text-gray-700 leading-8">Unified Communications (UC) is often a blend of technologies, and various products and manufacturers define it differently. Crafting our UC Strategy involves determining the business's requirements, aligning them with market offerings, and articulating the benefits to the business.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">Choosing to collaborate with Soniza ensures you have a well-informed, carefully considered, and reasoned UC strategy. Drawing on our experience and knowledge, we collaborate with clients to formulate a strategy that aligns with your business goals while working within your budget.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">Our consultants have developed strategies for companies of all sizes, and with an understanding of the products and suppliers in the market, we are confident in our ability to assist you at any stage.</p>
      </div>
      <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
    </div> 
    <img data-aos='fade-up'  src="/im2.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
  </div>
</div>

<div className="w-full bg-white flex h-auto justify-center items-center">
  <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
    
    <img data-aos='fade-up'  src="/im3.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
    <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
      <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">WAN Strategy</h2>
      <div className="flex flex-col gap-10">
        <p className="pm:text-[15px] text-gray-700 leading-8">The Wide Area Network (WAN) is likely one of the highest annual costs in any telecoms budget. It is crucial for securing the business from external threats and fundamental to enabling staff to perform their jobs.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">However, business requirements, market conditions, costs, technology, service locations, suppliers, and attitudes towards the Cloud are all changing. Businesses are rapidly adopting Cloud services, and now the network needs to catch up.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">Anita Impex not only assesses the services you have today and how to support them but also looks at where you want to be in the next 5+ years. How will the business evolve, and what strategy is best for you?</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">Our consultants collaborate with clients to ensure that technical requirements align with business needs. Our outcome-based strategies are pragmatic, rooted in real-world experience, and provide a roadmap for agile networking, enhanced security, performance improvements, and a detailed budget.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we approach things differently, ensuring our clients' strategies meet the ever-changing needs of the business. We present benefits, risks, and costs clearly and concisely, accompanied by clear and actionable recommendations.</p>
      </div>
      <div className="sr:left-0 border-[1px] relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
    </div>
  </div>
</div>

<div className="w-full bg-white flex h-auto justify-center items-center">
  <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
    
    <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
      <h2 className="pm:text-2xl text-4xl pb-5 ease-linear duration-200 hover:text-yellow-400">UC / Telephony Strategy</h2>
      <div className="flex flex-col gap-10">
        <p className="pm:text-[15px] text-gray-700 leading-8">An effective mobile strategy offers staff flexibility, improved functionality, substantial cost reduction, and enhanced transparency for both users and management.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, our mobile strategy encompasses:</p>
        <p className="pm:text-[13px] text-gray-700 leading-8">
          - Budget: Providing a comprehensive budget for all services to understand the true total cost of ownership.<br></br>
          - OS Review: Comparing and contrasting different operating systems.<br></br>
          - Coverage Maps: Mapping coverage against user footprint.<br></br>
          - New Initiatives: Mapping any new initiatives such as BYOD or infrastructure reductions.<br></br>
          - Mobile Benchmark: Commercial review of costs against market rates to assess potential cost savings through procurement.<br></br>
          - Mobile Audit: Reviewing all connections to ensure they are in use and on the correct tariff.
        </p>
        <p className="text-gray-700 leading-8">For further details on how we can assist you with your mobile strategy, please contact us.</p>
      </div>
      <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
    </div>
    <img data-aos='fade-up' src="/im4.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
  </div> 
</div>

    </section>
  );
};

export default TelecomsStrategy;
