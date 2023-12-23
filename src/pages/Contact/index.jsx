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
  message: Yup.string()
});

const Contact = () => {

    useEffect(() => {
        AOS.init({
          duration: 1400,
          easing:'ease-in-out-quad'
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
    <section style={{ overflow: 'hidden' }} className="bg-black fade-in w-full  justify-center items-center flex flex-col">

        <div style={{ overflow: 'hidden' }} className="sr:pb-0 pm:pt-[100px] xl:h-auto xl:pt-[140px] xl:pb-[140px] w-full bg-black h-[870px] flex justify-center items-center">
            <div className="xl:flex-col pm:w-full pm:justify-center w-[90%] h-full items-center flex justify-items-end">
                <div data-aos='fade-right' className="md:w-full  sr:w-full xl:w-[820px] sm:p-[40px] w-[730px] bg-zinc-900 z-10 flex flex-col gap-5 text-white p-[90px] hover:bg-opacity-80 ease-linear duration-200  transition-opacity">
                    <h1 className="pm:text-[23px] text-[2rem]">Let's Get Started</h1>
                    <div className="h-[1px] w-[60px] border-white border-[1px] ease-linear duration-200 hover:h-[6px] rounded-md bg-white"></div>
                    <h2 className="pm:text-[18px] text-2xl">Get It Right, First Time.</h2>
                    <p className="pm:text-[16px]  text-gray-400 leading-8">
                        We pride ourselves on being very approachable so contact us now for an informal chat about your project and we can take it from there.
                    </p>
                </div>
            
                <img
                    data-aos='fade-left'
                    className="sm:h-[200px] sr:w-full xl:relative xl:h-[400px] xl:right-0 xl:w-[820px] pointer-events-none absolute w-[920px] object-cover right-[70px] h-[616px]"
                    src="/contact.png"
                />    

            </div>
        </div>

        <div className="flex sr:m-0 sr:h-auto w-full bg-black justify-center items-center h-[700px] mb-40 mt-20 ">
                <div className="pm:w-full sr:flex-col w-[90%] flex justify-center items-center h-full">
                    <div data-aos='fade-left' className="sr:w-full  pm:border-0 sr:h-auto sr:pt-10 sr:pb-10 text-black text-center flex-col gap-5 flex justify-center items-center w-2/5 h-full border-[thin] border-gray-500" style={{backgroundImage:"url('/p19.png')",backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                        <h1 className="text-[17px] font-sans underline font-bold">Anita Impex</h1>
                        <div onClick={handlePhoneNumberClick} className="flex gap-3 items-center justify-center">
                            <img src="/Whatsapp.png" className="w-[30px]"/>
                            <h1 className="text-[17px] font-sans font-bold">+44 7456214608</h1>
                        </div>
                        <h1 className="text-[17px] font-sans font-bold">Email: Info@anitaimpex.com </h1>
                        <p className="text-[16px] font-sans font-bold text-black w-4/5">Please feel free to contact us to speak to one of our consultants. Whether you are looking to achieve cost savings or refresh your entire telecoms infrastructure we are sure to be able to help.</p>
                        <p className="text-[16px]  font-sans font-bold text-black  w-4/5">Simply email the address above, fill in the form to the right, give us a call on our freephone number or come in and see us.</p>
                    </div> 
                    <form onSubmit={formik.handleSubmit} data-aos='fade-right' className="sr:w-full pm:text-center pm:border-0 sr:pt-[50px] sr:pb-[50px] text-white flex justify-center items-center flex-col w-3/5 h-full gap-7 border-[thin] border-gray-500">
                        <h1 className="pm:text-[23px] text-3xl">Contact Us!</h1>
                        <div className="bt:flex-col justify-center items-center w-full flex gap-5">
                          <div className="bt:w-full flex-col flex items-center"> 
                            <input
                              placeholder="Full Name"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name="name"
                              type="text"
                              className={`bt:w-4/5 w-[200px] rounded-lg bg-transparent border-[thin] p-3 ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                            />
                            {formik.touched.name && formik.errors.name && <div className="text-red-500">{formik.errors.name}</div>}
                          </div>
                          <div className="bt:w-full flex-col flex items-center"> 
                          
                              <input
                                placeholder="Company"
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
                          <div className="bt:w-full flex-col flex items-center">
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
                          <div className="bt:w-full flex-col flex items-center"> 
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
                          <div className="w-full flex-col flex items-center"> 
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
export default Contact