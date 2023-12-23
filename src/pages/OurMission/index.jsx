import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  number: Yup.string().matches(/^[0-9]+$/,'Wrong').required("Required"),
  message: Yup.string(),
});

const OurMission = () => {
    const [scrollPosition1, setScrollPosition1] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition1(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, []);
  
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-back',
      });
      window.scrollTo(0, 0);
    }, []);
  
    const formik = useFormik({
      initialValues: {
        name: "",
        number: "",
        email: "",
        company: "",
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          await axios.post("https://anita-impex.onrender.com/recieveEmail", values);
          alert("Form submitted successfully!");
          formik.resetForm();
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      },
    });

  const handlePhoneNumberClick = () => {
    const phoneNumber = '+447456214608';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappLink;
  };


    return (
        <section style={{ overflow: 'hidden' }} className="fade-in w-full bg-black justify-center items-center flex flex-col">

                <div style={{backgroundImage:"url('/p.png')",backgroundSize:'cover',backgroundPosition:`${scrollPosition1 /50}px`,backgroundRepeat:'no-repeat'}} className="h-auto pm:pt-[150px] pt-[200px] pb-[170px] flex justify-center items-center">
                    <div className="w-[90%] pm:text-center text-black flex flex-col gap-8">
                        <h1 data-aos='fade-left' className="pm:w-full pm:text-[25px] md:text-4xl font-sans font-bold text-5xl w-[70%]">Our Mission</h1>
                        <p data-aos='fade-left' className="pm:w-full font-sans font-bold pm:text-[16px] md:text-[19px] text-[18px] w-[90%]">At the core of our mission is a comprehensive consultancy approach that leverages our expertise and experience to save time and costs. We focus on people, systems, and technology, ensuring success by adopting a holistic view of each project and aligning outcomes with business needs.</p>
                        <p data-aos='fade-left' className="pm:w-full font-sans font-bold pm:text-[16px] md:text-[19px]  text-[18px] w-[90%]">Our values include honesty, pragmatism, straightforwardness, and fairness. We hold deep respect for our customers, colleagues, and suppliers, providing truly independent advice to our clients.</p>
                    </div>
                </div>


            <div className="flex pm:pt-0 sr:h-auto justify-center items-center h-[700px] pt-20">
                <div className="pm:w-full sr:flex-col w-[90%] flex justify-center items-center h-full">
                    <div data-aos='fade-left' className="sr:w-full pm:border-0 sr:h-[340px] text-white flex justify-center items-center w-2/5 h-full border-[thin] border-gray-500" style={{backgroundImage:"url('/p2.png')",backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                    <h1 className="text-3xl font-sans font-bold">About Us</h1> 
                    </div>
                    <div  data-aos='fade-right' className="sr:w-full pm:text-center pm:border-0 sr:pt-[50px] sr:pb-[50px] text-white flex justify-center items-center flex-col w-3/5 h-full gap-7 border-[thin] border-gray-500">
                    <p className="text-gray-100 w-4/5">Anita Impex was founded in 2019 as a truly independent consultancy with a focus on facilitating change through technology improvement or replacement.</p>
                    <p className="text-gray-100 w-4/5">Anita Impex expanded its focus to not only cover technology but also to understand and advise on the broader aspects of business services. This now includes business process optimization in relation to customer experience and IT, as well as resource management, both in terms of people and technology, automation, and optimization.</p>
                    <p className="text-gray-100 w-4/5">This approach allows our consultants to provide comprehensive advice on facilitating change through our 360-degree review and holistic understanding of our clients.</p>
                    <p className=" text-gray-100 w-4/5">We have adopted this approach with some of the largest and well-known companies in the UK, including: Harrods, Poundland, Solicitors Regulatory Authority, Hyde Housing, Flexspace, Business in the Community, Leicestershire County Council, Diabetes UK, DAC Beachcroft, Scotmid Co-Op, My Home Move, Shelter, The Institute of Engineering and Technology, Metropolitan Thames Valley Housing, Wakefield District Housing, RPC, Lifeways, Keepmoat, The Economist, and many others.</p>
                    </div>
                </div>
                </div>

                <div className="flex sr:h-auto justify-center items-center h-[700px]">
                <div className="pm:w-full sr:flex-col-reverse w-[90%] flex justify-center items-center h-full">
                    <div data-aos='fade-left' className="sr:w-full pm:text-center pm:border-0 sr:pt-[50px] sr:pb-[50px] text-white flex justify-center items-center flex-col w-3/5 h-full gap-7 border-[thin] border-gray-500">
                      
                        <p className="text-gray-100 w-4/5"><span className="font-sans font-extrabold">Independence</span> - Anita Impex provides truly independent advice, no commissions, no bias, no exception. Our income is only from our clients.</p>
                        <p className="text-gray-100 w-4/5"><span className="font-sans font-extrabold">Innovation</span> - We embrace change, welcome new technology, and desire knowledge. We thrive on our flexibility and pride ourselves on adaptability to new approaches.</p>
                        <p className="text-gray-100 w-4/5"><span className="font-sans font-extrabold">Integrity</span> – We treat everyone with respect. We’re confident in our abilities and we are honest with both our client and also ourselves.</p>
                        <p className="text-gray-100 w-4/5"><span className="font-sans font-extrabold">Performance/Experience</span> - We are persistent, setting challenging goals for our performance and strive to build long-term relationships. Our experience across diverse industries enables us to show different working practices to increase efficiency.</p>
                        <p className="text-gray-100 w-4/5"><span className="font-sans font-extrabold">Professional</span> - We are approachable. We know that clear communication and involvement at all levels are vital to sustaining long-term success.</p>
                                            
                    </div>
                    <div data-aos='fade-right' className="sr:w-full pm:border-0 sr:h-[340px] text-white flex justify-center items-center w-2/5 h-full border-[thin] border-gray-500" style={{backgroundImage:"url('/p4.png')",backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                    <h1 className="text-3xl font-sans font-bold">Our Values</h1>
                    </div> 
                </div>
                </div>


            <div className="flex sr:h-auto w-full justify-center items-center h-[700px]">
                <div className="pm:w-full sr:flex-col w-[90%] flex justify-center items-center h-full">
                    <div data-aos='fade-left' className="sr:w-full pm:border-0 sr:h-[340px] text-white gap-5 flex justify-center flex-col items-center w-2/5 h-full border-[thin] border-gray-500" style={{backgroundImage:"url('/p6.png')",backgroundSize:'cover',backgroundRepeat:'repeat'}}>
                        <h1 className="text-[19px] font-sans font-bold underline">Anita Impex</h1>
                        <div onClick={handlePhoneNumberClick} className="flex gap-3 items-center justify-center">
                            <img src="/Whatsapp.png" className="w-[30px]"/>
                            <h1 className="text-[19px] font-sans font-bold">+44 7456214608</h1>
                        </div>
                        <h1 className="text-[19px] font-sans font-bold">Email: Info@anitaimpex.com </h1>
                    </div> 
                    <form onSubmit={formik.handleSubmit} data-aos='fade-right' className="sr:w-full pm:text-center pm:border-0 sr:pt-[50px] sr:pb-[50px] text-white flex justify-center items-center flex-col w-3/5 h-full gap-7 border-[thin] border-gray-500">
                        <h1 className="pm:text-[23px] text-3xl">Contact Us!</h1>
                        <div className="bt:flex-col justify-center items-center w-full flex gap-5">
                          <div className="bt:w-full flex flex-col items-center">
                            <input
                              placeholder="First Name"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name="name"
                              type="text"
                              className={`bt:w-4/5 w-[200px] rounded-lg bg-transparent border-[thin] p-3 ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                            />
                            {formik.touched.name && formik.errors.name && <div className="text-red-500">{formik.errors.name}</div>}
                          </div>
                          <div className="bt:w-full flex flex-col items-center"> 
                            
                              <input
                                placeholder="Last Name"
                                value={formik.values.company}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="company"
                                type="text"
                                className={`bt:w-4/5 w-[200px] rounded-lg bg-transparent border-[thin] p-3 ${formik.touched.company && formik.errors.company ? 'border-red-500' : ''}`}
                              />
                              {formik.touched.company && formik.errors.company && <div className="text-red-500">{formik.errors.company}</div>}
                            
                          </div>
                        </div>
                        <div className="bt:flex-col justify-center items-center w-full flex gap-5">
                          <div className="bt:w-full flex flex-col items-center"> 
                            <input
                              placeholder="Email"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name="email"
                              type="email"
                              className={`bt:w-4/5 w-[200px] rounded-lg bg-transparent border-[thin] p-3 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                            />
                            {formik.touched.email && formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
                          </div>
                          <div className="bt:w-full flex flex-col items-center"> 
                            <input
                              placeholder="Phone"
                              value={formik.values.number}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name="number"
                              type="text"
                              className={`bt:w-4/5 w-[200px] rounded-lg bg-transparent border-[thin] p-3 ${formik.touched.number && formik.errors.number ? 'border-red-500' : ''}`}
                            />
                            {formik.touched.number && formik.errors.number && <div className="text-red-500">{formik.errors.number}</div>}
                          </div>
                        </div>
                        <div className="bt:flex-col justify-center items-center w-full flex gap-5">
                          <div className="bt:w-full flex flex-col items-center">
                            <input
                              placeholder="Example: How can I track my budget?"
                              value={formik.values.message}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name="message"
                              type="text"
                              className={`bt:w-4/5 w-[420px] h-40 rounded-lg bg-transparent border-[thin] p-3 ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
                            />
                            {formik.touched.message && formik.errors.message && <div className="text-red-500">{formik.errors.message}</div>}
                          </div>
                        </div>
                        <button type="submit" className="bt:w-4/5 w-[420px] ease-linear duration-200 hover:bg-blac hover:bg-black text-black hover:text-white hover:border-[1px] p-4 rounded-[6px] bg-yellow-400 ">Submit</button>
                      </form>


                </div>
            </div>

        </section>
    )
}
export default OurMission