import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const TelecomsAudit = () => {
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
                <h1 className="pm:text-[23px] ease-linear duration-200 hover:text-yellow-400 text-[2rem]">Network Optimization</h1>
                <div className="h-[1px] w-[60px] border-white border-[1px] ease-linear duration-200 hover:h-[6px] rounded-md bg-white"></div>
                <h2 className="pm:text-[18px] ease-linear duration-200 hover:text-yellow-400 text-2xl">Efficiency, Precision, and Practicality </h2>
                <p className="pm:text-[16px]  text-gray-300 leading-8">
                  Comprehending the composition, location, and cost of your network assets enables cost savings, streamlined management, and simplified technology infrastructure. A network optimization is a strategic move.
                </p>
              </div>
              <img
                data-aos='fade-left'
                className="sm:h-[200px] sr:w-full xl:relative xl:h-[400px] xl:right-0 xl:w-[820px] pointer-events-none absolute w-[920px] object-cover right-[70px] h-[616px]"
                src="/Audit.png"
              />
            </div>
          </div>

          <div className="w-full bg-white flex h-auto justify-center items-center mt-40">
            <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
              <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
                <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Network Optimization Service</h2>
                <div className="flex flex-col gap-10">
                <p className="pm:text-[15px]  text-gray-700 leading-8">Optimizing networks saves costs, reduces the technology footprint, and ensures an accurate inventory of services. Soniza can assist in understanding your network assets and identifying elements that can be removed without disrupting services to your employees or customers.</p>
                <p className="pm:text-[15px] text-gray-700 leading-8">Our network optimization services cover a broad spectrum, typically falling into one of the following categories:</p>
                <p className="sp: pm:text-[15px] text-gray-700 leading-8">
                  -Mobile Networks<br></br>
                  -Wide Area Networks<br></br>
                  -Infrastructure<br></br>
                  -Landline Services<br></br>
                  -Managed Services<br></br>
                </p>
                <p className="sp: pm:text-[15px] text-gray-700 leading-8">Our unique approach combines data analysis with consultancy advice, not only identifying unused services but also recommending appropriate market rate tariffs. This equips our clients with better negotiation positions or provides essential data for a compelling business case.</p>
                <p className="sp: pm:text-[15px] text-gray-700 leading-8">Our team of consultants and data analysts, leveraging years of experience and efficient methodologies, maximize their efforts while minimizing costs. Alongside our consultative approach, we provide strategic insights into market trends and technological developments.</p>
                </div>
                <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
              </div>
              <img data-aos='fade-up' src="/p9.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
            </div>
          </div>


          <div className="w-full bg-white flex h-auto justify-center items-center">
            <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
              <img data-aos='fade-up' src="/im13.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px]  IMG"/>
              <div data-aos='fade-up' className="sr:w-[90%] w-[720px]">
                <h2 className="pm:text-2xl text-4xl pb-5 text-red-black ease-linear duration-200 hover:text-yellow-400">Digital Transformation Audit</h2>
                <div className="flex flex-col gap-10">
                  <p className="pm:text-[15px] text-gray-700 leading-8">Our company specializes in providing cost-saving services across various digital transformation areas, notably:</p>
                  <p className="pm:text-[15px] text-gray-700 leading-8">
                    -Cloud Services<br></br>
                    -Data Analytics<br></br>
                    -Artificial Intelligence<br></br>
                    -Cybersecurity<br></br>
                    -Customer Relationship Management (CRM)<br></br>
                    -Enterprise Resource Planning (ERP)<br></br>
                    -Software as a Service (SaaS)<br></br>
                    -Infrastructure as a Service (IaaS)<br></br>
                    -Platform as a Service (PaaS)<br></br>
                    -Digital Marketing Platforms<br></br>
                    -Hardware Upgrades
                  </p>
                  <p className="pm:text-[15px] text-gray-700 leading-8">Our approach focuses on not only achieving significant initial savings but also ensuring ongoing cost reductions throughout the contract's lifetime through continuous improvement.</p>
                </div>
                <div className="sr:left-0 border-[1px] relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
              </div>
            </div>
          </div>

          <div className="w-full bg-white flex h-auto justify-center items-center">
            <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
              <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
                <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Efficiency Enhancement Service Areas</h2>
                <div className="flex flex-col gap-10">
                  <p className="pm:text-[15px] text-gray-700 leading-8">Our company excels in optimizing costs across all facets of digital transformation. Leveraging extensive experience in cost-saving practices, we identify areas where suppliers can be more efficient, manufacturers can reduce margins, and how suppliers can enhance service to customers.</p>
                  <p className="pm:text-[15px] text-gray-700 leading-8">Our efficiency enhancement services include:</p>
                  <p className="pm:text-[15px] text-gray-700 leading-8"> 
                    -Contract Negotiation / Renegotiation<br></br>
                    -Audit Services<br></br>
                    -Benchmarking costs against market rates<br></br>
                    -Procurement<br></br>
                    -Supplier Consolidation<br></br>
                    -Service Review<br></br>
                    -Service Level Review<br></br>
                    -Ongoing Expense Management<br></br>
                    -Contract Management<br></br>
                  </p>
                  <p className="pm:text-[15px] text-gray-700 leading-8">By utilizing our services, you can optimize maximum savings while maintaining strong relationships with your digital transformation partners.</p>
                </div>
                <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
              </div> 
              <img data-aos='fade-up'  src="/im23.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
            </div>
          </div>

                  <div className="w-full bg-white flex h-auto justify-center items-center">
            <div className="sr:flex-col w-[90%] pb-[100px] h-full items-center flex gap-20">
              <img data-aos='fade-up'  src="/im33.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
              <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
                <h2 className="pm:text-2xl text-4xl pb-5 ease-linear duration-200 hover:text-yellow-400">Innovation, Expertise, and Talent</h2>
                <div className="flex flex-col gap-10">
                  <p className="pm:text-[15px] text-gray-700 leading-8">Staying at the forefront of technological advancements, we possess an in-depth understanding of the ever-evolving tech landscape. This ensures that during audits, we identify opportunities for innovation optimization. From mobile technologies to wide area networks (WANs), our established processes consistently yield substantial savings for our clients.</p>
                  <p className="pm:text-[15px] text-gray-700 leading-8">Our team at [Your Company Name] is comprised of lead consultants, support consultants, data analysts, and project managers, dedicated to deploying the right skills at the right time. This strategic approach maximizes your investment, keeps costs low, and ensures the availability of the right resources throughout your project's lifecycle.</p>
                </div>
                <div className="sr:left-0 border-[1px] relative top-8 left-[-10vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
              </div>
            </div>
          </div>

          <div className="w-full bg-white flex h-auto justify-center items-center">
            <div className="sr:flex-col-reverse w-[90%] pb-[100px] h-full items-center flex gap-20">
              <div data-aos='fade-up'  className="sr:w-[90%] w-[720px]">
                <h2 className="pm:text-2xl text-4xl pb-5  ease-linear duration-200 hover:text-yellow-400">Advantages of Audit</h2>
                <div className="flex flex-col gap-10">
                  <p className="pm:text-[13px] text-gray-700 leading-8">
                    -Negligible Business Risk<br></br>
                    -Payment Only Upon Achieving Savings<br></br>
                    -Optimal Cost Reductions<br></br>
                    -No Upfront Costs<br></br>
                    -Encompasses Various Technology Domains<br></br>
                    -Tailored Contracts Aligned with Savings<br></br>
                    -Continued Savings Opportunities<br></br>
                    -Infrastructure Integrity Preserved<br></br>
                    -Options for Managing Savings Implementation<br></br>
                    -Options for Managing Ongoing Infrastructure<br></br>
                    -Sustaining Positive Supplier Relationships
                  </p>
                </div>
                <div className="sr:left-0 border-[1px] relative top-8 left-[40vw] w-[170px] h-[1px] duration-200 ease-linear rounded-md bg-black hover:h-[10px]"></div>
              </div>
              <img data-aos='fade-up' src="/im43.png" className="sr:w-[90%] sr:pl-0 sr:h-full w-[50%] h-[400px] IMG"/>
            </div> 
          </div>

    </section>
  );
};

export default TelecomsAudit;
