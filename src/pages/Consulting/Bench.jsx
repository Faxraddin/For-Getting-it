import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const TelecomsBench = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing:'ease-in-out'
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <section style={{ overflow: 'hidden' }} className="fade-in w-full justify-center items-center flex flex-col">

<div style={{ overflow: 'hidden' }} className="pm:pb-0 pm:pt-[100px] xl:h-auto xl:pt-[140px] xl:pb-[140px] w-full bg-black h-[870px] flex justify-center items-center">
  <div className="xl:flex-col pm:w-full pm:justify-center w-[90%] h-full items-center flex justify-items-end">
    <div data-aos='fade-right' style={{ overflow: 'hidden' }} className="md:w-full trans sr:w-full xl:w-[820px] sm:p-[40px] w-[730px] bg-zinc-900 z-10 flex flex-col gap-5 text-white p-[90px] hover:bg-opacity-80 ease-linear duration-150 transition-opacity">
      <h1 className="pm:text-[23px] ease-linear duration-200 hover:text-yellow-400 text-[2rem]">Communications Benchmarking</h1>
      <div className="h-[1px] w-[60px] border-white border-[1px] ease-linear duration-200 hover:h-[6px] rounded-md bg-white"></div>
      <h2 className="pm:text-[18px] ease-linear duration-200 hover:text-yellow-400 text-2xl">Develop a business case, negotiate a contract, begin with benchmarking</h2>
      <p className="pm:text-[16px]  text-gray-300 leading-8">
        Anita Impex's telecoms benchmarking can assist in constructing a business case for a new initiative, evaluating service standards against market rates, or providing information for contract negotiations. We've got you covered.
      </p>
    </div>
    <img
      data-aos='fade-left'
      className="sm:h-[200px] sr:w-full xl:relative xl:h-[400px] xl:right-0 xl:w-[820px] pointer-events-none absolute w-[920px] object-cover right-[70px] h-[616px]"
      src="/p18.png"
    />    
  </div>
</div>

<div className="w-full bg-white flex h-auto justify-center items-center mt-40">
  <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
    <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
      <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Telecoms Benchmarking</h2>
      <div className="flex flex-col gap-10">
        <p className="pm:text-[15px] text-gray-700 leading-8">Benchmarking is an effective way to quickly identify if you're overpaying for services. By comparing both subscription (monthly recurring) costs and dynamic costs (usage costs), you can pinpoint areas for potential savings in the shortest possible timeframe.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">As telecoms budgets are continually being squeezed, benchmarking provides the foundation for a business case or the evidence to negotiate with suppliers.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we are consistently running procurement exercises, so we have the data to quickly understand what you should be paying. Clients regularly see savings of up to 40% on their existing costs.</p>
      </div>
      <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
    </div>
    <img data-aos='fade-up' src="/p7.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
  </div>
</div>

<div className="w-full bg-white flex h-auto justify-center items-center">
  <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
    <img data-aos='fade-up' src="/im41.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
    <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
      <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Expertise, Experience, Resource</h2>
      <div className="flex flex-col gap-10">
        <p className="pm:text-[15px] text-gray-700 leading-8">We pride ourselves on staying ahead of the market, understanding where technology excels and where it doesn't. At Soniza, we consistently run procurements, providing us with the data to comprehend market rates for clients of all sizes and industries. Our proven processes and procedures have repeatedly saved our clients millions of pounds.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">Anita Impex's clients include Penguin Random House, DAC Beachcroft, RPC, Hyde Housing, The IET, The Illuminated River Foundation, Bestways, Taylor Wimpey, The Economist, Shelter, Morgan Sindall, Keepmoat, Diabetes UK, and many more...</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">Anita Impex's team of lead consultants, support consultants, data analysts, and project managers ensures that the right skills are deployed at the right time, maximizing investment, keeping costs low, and ensuring the right resources are available throughout the lifetime of a project.</p>
      </div>
      <div className="sr:left-0 border-[1px]  relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
    </div>
  </div>
</div>

<div className="w-full bg-white flex h-auto justify-center items-center">
  <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
    <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
      <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Benchmark Service Areas</h2>
      <div className="flex flex-col gap-10">
        <p className="pm:text-[15px] text-gray-700 leading-8">Anita Impex can offer our cost-saving service across most technology areas, most notably:</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">
          -Mobile Communications<br></br>
          -Wide Area Networks<br></br>
          -Contact Centres<br></br>
          -Voice Conferencing<br></br>
          -Video Conferencing<br></br>
          -Landlines<br></br>
          -Managed Services<br></br>
          -Maintenance Contracts<br></br>
          -Hosting<br></br>
          -Data Centres<br></br>
          -Hardware<br></br>
        </p>
        <p className="pm:text-[15px] text-gray-700 leading-8">Our approach aims not only for significant one-off savings but also to continually save our clients throughout the lifetime of the contract through continuous improvement.</p>
      </div>
      <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
    </div> 
    <img data-aos='fade-up'  src="/M.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
  </div>
</div>

    </section>
  );
};

export default TelecomsBench;
