import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const CustomerExp = () => {
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
              <h1 className="pm:text-[23px] ease-linear duration-200 hover:text-yellow-400 text-[2rem]">Experts in Customer Service</h1>
              <div className="h-[1px] w-[60px] border-white border-[1px] ease-linear duration-200 hover:h-[6px] rounded-md bg-white"></div>
              <h2 className="pm:text-[18px] ease-linear duration-200 hover:text-yellow-400 text-2xl">Innovative | Pragmatic | Experienced </h2>
              <p className="pm:text-[16px]  text-gray-300 leading-8">
                At Anita Impex, our wealth of experience and expertise distinguishes us from the competition. The first crucial step toward service excellence is selecting the right customer service consultant.
              </p>
            </div>

            <img
              data-aos='fade-left'
              className="sm:h-[200px] sr:w-full xl:relative xl:h-[400px] xl:right-0 xl:w-[820px] pointer-events-none absolute w-[920px] object-cover right-[70px] h-[616px]"
              src="/EM.png"
            />

          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center mt-40">
            <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
              <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
                <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Customer Experience as the Key Differentiator</h2>
                <div className="flex flex-col gap-10">
                      <p className="pm:text-[15px]  text-gray-700 leading-8">A remarkable customer experience is pivotal for retaining existing customers and attracting new ones. Seamless and easy communication between business and customer is the linchpin of success.</p>
                    <p className="pm:text-[15px] text-gray-700 leading-8">An exceptional customer service consultant delves into understanding your business, grasping the essence of what excellence means to you. It all begins with the right customer service strategy.</p>
                    <p className="sp: pm:text-[15px] text-gray-700 leading-8">At Soniza, we scrutinize the five pillars of the customer experience:</p>
                    <p className="sp: pm:text-[15px] text-gray-700 leading-8">
                      - Business Processes/Management Reporting<br></br>
                      - Technology<br></br>
                      - Costs<br></br>
                      - Staff/Resources<br></br>
                      - And, of course, the Customers themselves
                    </p>
                    <p className="sp: pm:text-[15px] text-gray-700 leading-8">Our approach enables us to fully comprehend challenges, identify suitable solutions, and collaborate with you on strategizing, optimizing, procuring, and implementing changes to enhance the customer experience.</p>
                </div>
                <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
              </div>
              <img data-aos='fade-up' src="/p12.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
            </div>
          </div>



            <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <img data-aos='fade-up'  src="/ce1.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Customer Service Strategy</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Over the past 4 years, customer expectations have undergone significant changes. Consumers, suppliers, and businesses now anticipate 24x7 access for issue resolution, product purchases, and service reviews.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Meeting this unprecedented service demand presents a real challenge for businesses. It requires not only keeping up with current trends but also ensuring flexibility to meet changing requirements and working practices.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">At Soniza, our comprehensive 360-degree customer service strategy includes:</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">
                    1. Solution Audit - Reviewing technology, costs, resources, and processes.
                    <br></br>
                    2. Benchmark - Comparing current service levels and costs with market rates.
                    <br></br>
                    3. Strategy Options - Presenting clear options and approaches to achieve business goals.
                    <br></br>
                    4. Strategy Recommendations - Providing tactical and strategic recommendations with full costing.
                </p>
                <p className="pm:text-[15px] text-gray-700 leading-8">We collaborate with our clients to define their customer strategy, create a roadmap for implementing recommendations, and continuously optimize. Our approach ensures full realization of ROI, saving both time and money while enhancing service delivery to customers.</p>
              </div>
              <div className="sr:left-0 border-[1px]  relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>

          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
            
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Customer Journey Mapping</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">The 'Customer Journey' plays a crucial role in any business and can be the difference between success and failure. Understanding how customers interact and identifying any potential failure points is critical for driving customer satisfaction.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">At Anita Impex, we leverage our experience and expertise to map current processes, make optimization recommendations, and often redesign more efficient solutions. This may involve introducing new technology, resources, and/or processes to ensure customer and business satisfaction.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">We embrace innovative thinking, keeping pace with industry changes, and finding creative ways to meet evolving customer and business demands.</p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div> 
            <img data-aos='fade-up'  src="/ce2.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>

          </div>
        </div>

        <div className="w-full bg-white flex h-auto justify-center items-center">
          <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
            
          <img data-aos='fade-up'  src="/ce.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
            <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
              <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Business Process and Resource</h2>
              <div className="flex flex-col gap-10">
                <p className="pm:text-[15px] text-gray-700 leading-8">Ensuring your business processes are optimized will make the difference between an effective and efficient service center and one that is high-maintenance.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">When examining business processes, it's crucial to consider the who, what, when, where, and how. It's not just about technology, service, or people; it's about integrating all these elements to provide efficient service focused on delivering excellent customer service.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">We ensure our customers get the most out of their solution by ensuring interactions occur at the right time, with the right technology, and are serviced by the right resources.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">To discuss how we can help you define your customer experience strategy, map a successful journey, and implement solutions tailored to your business, contact us now for a free consultation with one of our consultants.</p>
              </div>
              <div className="sr:left-0 border-[1px] relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
            </div>

          </div>
        </div>

  </section>
  )
};
export default CustomerExp;