import React,{useEffect,useState} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Copyright = () => {

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
        <div style={{backgroundImage:"url('/Mission4.png')",backgroundSize:'cover'}} className="pm:h-[333px] h-[644px] text-white flex justify-center items-center w-full">
            <h1 data-aos='fade-up' className="pm:text-3xl text-4xl text-black font-bold font-sans">Copyright Policy</h1>
        </div>

        <div className="md:w-4/5 flex flex-col justify-center items-center gap-10 mb-10 mt-10 text-white w-[700px]">

        <div className="flex flex-col gap-8">
    <h1 className="bt:texr-[15px] text-4xl">Data Protection</h1>
    <p className="text-1xl text-gray-100">
        Our primary policy and procedural document for data protection has been revised to align with the standards and requirements of the company policy. We have implemented accountability and governance measures to ensure a comprehensive understanding, proper dissemination, and documentation of our obligations and responsibilities. This includes a dedicated focus on privacy by design and upholding the rights of individuals.
    </p>
</div>

<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Data Retention & Erasure</h1>
    <p className="text-1xl text-gray-100">
        Our retention policy and schedule have been updated to adhere to the principles of 'data minimization' and 'storage limitation.' This ensures that personal information is stored, archived, and ethically and compliantly destroyed.
    </p>
</div>


<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Data Breaches</h1>
    <p className="text-1xl text-gray-100">
        Our breach procedures are designed to establish safeguards and measures for the prompt identification, assessment, investigation, and reporting of any personal data breach. These procedures are robust and have been communicated to all employees, ensuring they are aware of the reporting lines and the necessary steps to be taken.
    </p>
</div>

<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Privacy Notice/Policy</h1>
    <p className="text-1xl text-gray-100">
        Our Privacy Notice(s) have been revised to ensure compliance, providing clear information to all individuals whose personal information we process. This includes details on the purpose of data collection, its use, individuals' rights, recipients of the information, and the safeguarding measures in place to protect their information.
    </p>
</div>


<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Copyright Policy</h1>
    <p className="text-1xl text-gray-100">
        1. All information available on this Website is protected by copyright. Users are permitted to view Website pages on-screen, and may print or download extracts for personal use or for use within their organizations.<br></br>
        2. Users may share a copy of any such extract with a third party, provided that: the extract is for their own personal use; it is not incorporated into another work, website, or publication; it is not provided for commercial gain; and the third party is informed that the source is this website, and these terms and conditions equally apply to them.<br></br>
        3. No part of this Website may be reproduced, transmitted, or stored on any other website or in any other electronic medium without the express written consent of Anita Impex.<br></br>
        4. Anita Impex shall not be liable for any third-party claims or losses of any nature, including, but not limited to, loss of profits, indirect or consequential loss, or loss due to circumstances beyond its reasonable control.<br></br>
        5. Anita Impex does not accept liability for any acts or omissions resulting from users' decisions or opinions formed based on the use of the Website.<br></br>
        6. Anita Impex reserves the right to change, modify, add to, or remove part or all of these terms and conditions at any time. Users should periodically check for changes. Continued use of this Website after any changes will be deemed acceptance of those changes.<br></br>
        7. Anita Impex endeavors to ensure the accuracy of information and data on the Website. This applies to all other websites linked from time to time. Anita Impex is not responsible for the contents of such linked websites and reserves the right to modify or supplement the information or data provided without prior notice.<br></br>
    </p>
</div>


            </div>

    </section>
  )
}
export default Copyright;  