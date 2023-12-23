import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ContactCentres = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing:'ease-in-out-quad'
        });
        window.scrollTo(0, 0);
    }, []);

  return (
    <section style={{ overflow: 'hidden' }} className="fade-in w-full overflow-auto justify-center items-center flex flex-col">
<div style={{ overflow: 'hidden' }} className="pm:pb-0 pm:pt-[100px] xl:h-auto xl:pt-[140px] xl:pb-[140px] w-full bg-black h-[870px] flex justify-center items-center ">
  <div className="xl:flex-col pm:w-full pm:justify-center w-[90%] h-full items-center flex justify-items-end">
    <div data-aos='fade-right' style={{ overflow: 'hidden' }} className="md:w-full  sr:w-full xl:w-[820px] sm:p-[40px] w-[730px] bg-zinc-900 z-10 flex flex-col gap-5 text-white p-[90px] hover:bg-opacity-80 ease-linear duration-150 transition-opacity">
      <h1 className="pm:text-[23px] ease-linear duration-200 hover:text-yellow-400 text-[2rem]">Contact Centre Consulting</h1>
      <div className="h-[1px] w-[60px] border-white border-[1px] ease-linear duration-200 hover:h-[6px] rounded-md bg-white"></div>
      <h2 className="pm:text-[18px] ease-linear duration-200 hover:text-yellow-400 text-2xl">Collaborative | Independent | Experienced</h2>
      <p className="pm:text-[16px]  text-gray-300 leading-8">
        The Contact Centre is a dynamic domain in telecoms, marked by advancements in management, routing, new media, optimization, and regulation, not to mention AI, machine learning, IoT, and self-service.<br></br>
        We comprehend the significance and responsibility of the contact centre, possessing the skills, knowledge, and experience to provide assistance.
      </p>
    </div>

    <img
      data-aos='fade-left'
      className="sm:h-[200px] sr:w-full xl:relative xl:h-[400px] xl:right-0 xl:w-[820px] pointer-events-none absolute w-[920px] object-cover right-[70px] h-[616px]"
      src="/EM2.png"
    />    

  </div>
</div>

<div className="w-full bg-white flex h-auto justify-center items-center mt-40">
  <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
    <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
      <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Assisting Clients in Achieving the Art of the Possible</h2>
      <div className="flex flex-col gap-10">
      <p className="pm:text-[15px]  text-gray-700 leading-8">Anita Impex serves as independent Contact Centre Consultants. Our focus is on what truly matters in a contact centre, steering clear of passing trends, and aiding in the delivery of a superior, more efficient experience for your customers. We take pride in staying ahead of the curve, ensuring the exploration of new opportunities and the evaluation of emerging technologies is grounded in real-world experience. </p>
      <p className="pm:text-[15px] text-gray-700 leading-8">We collaborate to define your contact centre strategy, aligning it with business requirements, solution design, functionality, and budget considerations.</p>
      <p className="sp: pm:text-[15px] text-gray-700 leading-8">Our extensive experience in the contact centre market has enabled clients to successfully shift customer interactions, implement new technologies, and reduce costs through innovative strategies.</p>
      </div>
      <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
    </div>
    <img data-aos='fade-up' src="/p13.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
  </div>
</div>


    <div className="w-full bg-white flex h-auto justify-center items-center">
  <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
    
    <img data-aos='fade-up'  src="/cc.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
    <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
      <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Strategic Customer Engagement</h2>
      <div className="flex flex-col gap-10">
        <p className="pm:text-[15px] text-gray-700 leading-8">As customer expectations continue to rise, with demands for 24x7 services and a plethora of self-service options, having a well-informed Customer Engagement Strategy is essential for enhancing customer satisfaction.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">A robust customer engagement strategy should address both internal goals (what you aim to achieve) and external objectives (what your clients aspire to achieve). Drawing from practical experience, we've assisted numerous clients in realizing their objectives, understanding the market, and meeting the evolving demands of the modern customer experience.</p>
      </div>
      <div className="sr:left-0 border-[1px]  relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
    </div>

  </div>
</div>

<div className="w-full bg-white flex h-auto justify-center items-center">
  <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
    
    <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
      <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Customer Engagement Solutions</h2>
      <div className="flex flex-col gap-10">
        <p className="pm:text-[15px] text-gray-700 leading-8">Understanding the intricacies of customer engagement procurement can be challenging. With years of experience, market knowledge, and technological insights, we can guide you to the optimal solution.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">
          At [Your Company Name], we comprehend the complexities of customer engagement procurement. Leveraging our experience, market understanding, and technological insights, we can guide you to the most fitting solution.
          We continuously manage procurement for customer engagement solutions, covering everything from requirements analysis and solution design to implementation, support, and commercial negotiation. Our efficient and auditable procurement process, supported by documentation and technical knowledge, ensures a seamless experience.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">Whether the project goals involve cost reduction, enhanced management transparency, or increased functionality, our consultants collaborate closely with you to secure the right solution, partner, and commercial agreement.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">Contact us now for a consultation and discover more about our procurement process.</p>
      </div>
      <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
    </div> 
    <img data-aos='fade-up'  src="/cc2.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>

  </div>
</div>

<div className="w-full bg-white flex h-auto justify-center items-center">
  <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
    
  <img data-aos='fade-up'  src="/cc1.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
    <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
      <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Workflow Optimization</h2>
      <div className="flex flex-col gap-10">
        <p className="pm:text-[15px] text-gray-700 leading-8">The initiation of many customer engagement projects involves mapping the current operations. Analyzing these touchpoints is the starting point for making your customer engagement center more efficient and delivering an improved experience for your agents and customers.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">At [Your Company Name], we conduct an extensive audit of each interaction between you and your customers. We map all interaction paths, encompassing IVRs, queues, calls, emails, instant messages, videos, text messages, social media routes, and post-interaction processes. We provide insights on optimizing each channel and assess whether they align with the intended goals or if alternative options should be explored.</p>
        <p className="pm:text-[15px] text-gray-700 leading-8">Contact us now to speak to one of our consultants and discuss how we can help map out your customer journey.</p>
      </div>
      <div className="sr:left-0 border-[1px]  relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
    </div>

  </div>
</div>

  </section>
  )
}
export default ContactCentres