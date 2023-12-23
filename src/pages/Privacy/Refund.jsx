import React,{useEffect,useState} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Refund = () => {

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
        <div style={{backgroundImage:"url('/Mission.png')",backgroundSize:'cover',backgroundPosition:'center'}} className="pm:h-[333px] h-[644px] text-white flex justify-center items-center w-full">
            <h1 data-aos='fade-up' className="pm:text-3xl text-4xl text-black font-bold font-sans">Refund Policy</h1>
        </div>

        <div className="md:w-4/5 flex flex-col justify-center items-center gap-10 mb-10 mt-10 text-white w-[700px]">
        <div className="flex flex-col gap-8">
        <h1 className="bt:texr-[15px] text-4xl">Definitions</h1>
        <p className="text-1xl text-gray-100">
        a. "Business Days" refer to any day other than Saturday, Sunday, public holidays, or bank holidays in India or the state where our office is situated.<br></br>

b. "Customer" denotes an individual who obtains services for a fee and excludes commercial transactions.<br></br>

c. The "Date of Transaction" is defined as the invoice date for the service, encompassing the renewal date processed in accordance with the terms and conditions stipulated in the relevant service agreement.<br></br>
        </p>
    </div>

    <div className="flex flex-col gap-8">
        <h1 className="text-4xl">Refunds Rules</h1>
        <p className="text-1xl text-gray-100">
        a. Every attempt is made to fulfill orders according to the specified specifications and timelines for Services. However, in the event of unforeseen circumstances or limitations on our end preventing service provision, the order is deemed canceled, and the amount paid by you is non-refundable.<br></br>

b. Refunds will not be processed if you have mistakenly ordered the wrong service.<br></br>

c. Qualifying refund requests may be considered for a full refund, excluding any additional costs incurred by us in delivering such Services.<br></br>

d. Refunds will only be entertained upon the customer's presentation of relevant documents and proof; otherwise, the refund will not be eligible.<br></br>

e. Once a service is sold, refunds are not applicable.<br></br>

f. Creditfix's team will verify and cross-check refund requests for Services.<br></br>
        </p>
    </div>

    <div className="flex flex-col gap-8">
        <h1 className="text-4xl">Amount Deducted Despite Unconfirmed Order</h1>
        <p className="text-1xl text-gray-100">
        a. In case the amount is deducted, and the order remains unconfirmed, kindly reach out to your respective bank. The reversal of the amount by the bank typically takes 7 (seven) Business Days.<br></br>

b. If the matter persists beyond the 7 (seven) Business Days, feel free to get in touch with our customer care support for assistance.
        </p>
    </div>

    <div className="flex flex-col gap-8">
        <h1 className="text-4xl">Exemptions</h1>
        <p className="text-1xl text-gray-100">
        a. Regardless of the other clauses in this Policy, we reserve the right to decline a refund for a service under the following circumstances:<br></br>
   I. If you were aware of or informed about the issues with the service before availing it.<br></br>
   II. In the case of Free Services.<br></br>
   III. Refund requests submitted after the closure of the refund window.<br></br>

b. In addition to the aforementioned conditions, specific exemptions apply to the refund policy for services related to TRAINING, COACHING, MONITORING, VIRTUAL ASSISTANCE, and SOFTWARE MANAGEMENT (Information Technology).
        </p>
    </div>

    <div className="flex flex-col gap-8">
        <h1 className="text-4xl">Response Time</h1>
        <p className="text-1xl text-gray-100">
        a. Qualifying refund requests are typically processed promptly.<br></br>

b. The timeframe for refunds may be influenced by diverse banking and payment channels, and we will not be held responsible for any errors or delays in the refund process arising from banks or third-party service providers.
        </p>
    </div>
    <div className="flex flex-col gap-8">
        <h1 className="text-4xl">Refusal Of Return Or Refund Request</h1>
        <p className="text-1xl text-gray-100">
        We retain the authority to reject any refund request that does not adhere to this Policy or relevant laws.
        </p>
    </div>

        </div>
    </section>
  )
}
export default Refund;  