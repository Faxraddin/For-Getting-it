import React,{useEffect,useState} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Privacy = () => {

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
        <div style={{backgroundImage:"url('/Mission2.png')",backgroundSize:'cover',backgroundPosition:'center'}} className="pm:h-[333px] h-[644px] text-white flex justify-center items-center w-full">
            <h1 data-aos='fade-up' className="pm:text-2xl text-black text-4xl font-bold font-sans">Terms & Condicions</h1>
        </div>

        <div className="md:w-4/5 flex flex-col justify-center text-white items-center gap-10 mb-10 mt-10 w-[700px]">

            <div className="flex flex-col gap-8">
                <h1 className="bt:texr-[15px] text-4xl">Copyright</h1>
                <p className="text-1xl text-gray-100">
                    The content of this website is fully protected by copyright. Users are permitted to view website pages on a computer screen and may print or download excerpts for personal use or for use within their organizations. When sharing extracts, users must adhere to the following conditions:<br></br>
                    - The extract is intended for individual use;<br></br>
                    - It is not incorporated into another work, website, or publication;<br></br>
                    - It is not provided in exchange for any form of payment;<br></br>
                    - The third party is informed that the copy originated from this website and is subject to the same terms and conditions.<br></br>

                    No part of this website may be copied, shared, or stored on any other website or in any other electronic medium without the express written consent of Anita Impex.
                </p>
            </div>


            <div className="flex flex-col gap-8">
                <h1 className="text-4xl">Enquiry</h1>
                <p className="text-1xl text-gray-100">
                    Anita Impex ensures timely handling of inquiries and can be contacted via email at enquiries@anitaimpex.com , While every effort is made to promptly address submitted inquiries, users are advised not to transmit sensitive information, such as trade secrets, over the Internet, as absolute confidentiality cannot always be guaranteed.
                </p>
            </div>

            <div className="flex flex-col gap-8">
                <h1 className="text-4xl">Payment</h1>
                <p className="text-1xl text-gray-100">
                    Customers are required to make payments to Anita Impex and can address any concerns by emailing info@anitaimpex.com
                </p>
            </div>

            <div className="flex flex-col gap-8">
                <h1 className="text-4xl">GDPR</h1>
                <p className="text-1xl text-gray-100">
                    The Client's disclosure of personal information under this Agreement will undergo processing by Anita Impex (referred to as personal data).<br></br>
                    <br></br>
                    a. Processing personal data by Anita Impex is integral to providing the Services, aligning with the nature and purpose of the personal data.<br></br>
                    b. The Client's personal information will be stored on Anita Impex's computer system, accessible to any office employee. Personal data, including details about Debt, names, addresses, email addresses, NINs, dates of birth, financial data, and identification documents, may be printed and taken.<br></br>
                    c. In compliance with the Personal Data Legalization, the Client provides written consent for Anita Impex to share this information with third parties, such as lawyers, agents, advocates, insolvency practitioners, subcontractors, process servers, collection agents, IT consultants, and other parties necessary for fulfilling Redwood's obligations. This consent is granted through the retainer.<br></br>
                    d. Anita Impex ensures that authorized personnel processing personal data adhere to the requirements of Article 32 of the GDPR, maintaining confidentiality or being subject to an appropriate obligation of confidentiality.<br></br>
                    e. The Client has the right to request data access, rectification, or erasure, object to processing, and request data portability, in accordance with ethical and legal obligations.<br></br>
                    f. A subject access request can be directed to the Data Controller at Anita Impex's registered office.<br></br>
                    g. If dissatisfied with Anita Impex's response or suspecting unfair or illegal data processing, the Client has the option to file a complaint with the Information Commissioner's Office.<br></br>
                </p>
            </div>

            <div className="flex flex-col gap-8">
                <h1 className="text-4xl bt:texr-[15px]">Complaint</h1>
                <p className="text-1xl text-gray-100">
                We aim to provide a user-friendly and informative website. Users with questions, concerns, or ideas for improvement are encouraged to contact us at enquiries@anitaimpex.com. For details on our standard business terms, conditions, and website usage, please refer to the Anita Impex Privacy Policy.
                </p>
            </div>
        </div>
    </section>
  )
}
export default Privacy  