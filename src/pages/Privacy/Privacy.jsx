import React,{useEffect,useState} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Privacy2 = () => {

    useEffect(() => {
        AOS.init({
          duration: 1500,
          easing: 'ease-out-back',
        });
        window.scrollTo(0, 0);
    }, []);

    const [scrollPosition1,setScrollPosition1] = useState(0);

    useEffect(()=>{
        const handleScroll = () => {
            setScrollPosition1(window.scrollY)
        };

        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

  return (
    <section style={{ overflow: 'hidden' }} className="fade-in w-full bg-black justify-center items-center flex flex-col">
        <div style={{backgroundImage:"url('/Mission3.png')",backgroundSize:'cover'}} className="pm:h-[333px] h-[644px] text-white flex justify-center items-center w-full">
            <h1 data-aos='fade-up' className="pm:text-3xl text-black text-4xl font-bold font-sans">Privacy Policy</h1>
        </div>

        <div className="md:w-4/5 flex flex-col justify-center items-center gap-10 mb-10 mt-10 text-white w-[700px]">
        <div className="flex flex-col gap-8">
    <h1 className="bt:texr-[15px] text-4xl">Privacy Policy</h1>
    <p className="text-1xl text-gray-100">
        This Privacy Policy provides an overview of how we collect, use, and process your personal data when you use our website. It is important to carefully read this policy, as it becomes legally binding when you use our services. We take the privacy and protection of your data seriously, and we are committed to responsibly handling the personal information of those we engage with, including customers, suppliers, or colleagues, in accordance with the legal requirements of the countries in which we operate.
    </p>
</div>

<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Purpose of Use and Consent</h1>
    <p className="text-1xl text-gray-100">
        Anita Impex primarily uses the collected personal data to: process inquiries and user-defined notifications; conduct anonymous statistical analysis of usage trends to enhance Anita Impex's online offerings; comply with legal obligations; assess risks; and fulfill duties in the public interest. Personal data are deleted once the purpose of processing is fulfilled and they are no longer necessary. By accessing the Anita Impex website, you expressly confirm your consent to this data protection policy, including the collection, storage, and use of personal data described therein for the purpose of evaluating access, optimizing services and online offerings, and addressing data protection risks. Additionally, you agree to the use of cookies (refer to the Cookies and other technologies section when using the Anita Impex website). Do not access this website if you have not read and/or do not understand this data protection policy or do not agree to be bound by it.
    </p>
</div>


<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Data Collection and Storage</h1>
    <p className="text-1xl text-gray-100">
        Each time the Anita Impex website is accessed and utilized, specific server data is automatically saved and retained for 30 days (the list is not exhaustive), including IP address, visited webpage, access timestamp, requested resource, downloaded files, volume of data transmitted, duration of data transmission, country of access, and search terms used. These technical details contribute to optimizing the website and providing insights into its usage patterns, helping visitors learn about Anita Impex. The collected data are anonymized and generally do not allow individual user identification. No personal data is processed to this extent. However, if users provide specific information on a registration page or sign up for a notification service, personal data such as organization, last name, first name, address, landline and mobile phone numbers, and email address may be collected directly. Personal data obtained from email inquiries are used solely to respond to the specific inquiry, and information materials or notifications will be sent after obtaining necessary information. The data is utilized exclusively for processing inquiries, and users can opt out of receiving information at any time. Relevant personal data is deleted once regular mailings conclude.
    </p>
</div>

<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Data Security</h1>
    <p className="text-1xl text-gray-100">
        Anita Impex employs appropriate technical and organizational security measures, such as SSL encryption on Anita Impex websites, to safeguard your personal data from unauthorized access, processing, and misuse. When selecting and instructing external service providers, Anita Impex ensures their compliance with relevant data protection requirements through suitable technical and organizational measures. Despite regular checks, complete protection from all inherent risks of the internet as a universally accessible medium is not guaranteed.
    </p>
</div>


<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Rights of Data Subjects</h1>
    <p className="text-1xl text-gray-100">
        Individuals whose data is processed by Anita Impex have the right to request information, free of charge, about whether their personal data is being processed. Generally, data subjects have the right to object to data processing, request correction or erasure of their personal data, restrict data processing, and obtain data portability (commonly known as data portability). If Anita Impex processes personal data based on consent, the individual can revoke that consent at any time, though this does not affect prior data processing. Requests for correcting incorrect data will be addressed upon request. Legal or regulatory provisions, such as Anita Impex's reporting, archiving, or retention obligations, may impose restrictions on these rights.
    </p>
</div>



        </div>
    </section>
  )
}
export default Privacy2;  