import React,{useEffect,useState} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Company = () => {

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
        <div style={{backgroundImage:"url('/Mission6.png')",backgroundSize:'cover',backgroundPosition:'center'}} className="pm:h-[333px] h-[644px] text-white flex justify-center items-center w-full">
            <h1 data-aos='fade-up' className="pm:text-3xl text-4xl text-black font-bold font-sans">Company Policy</h1>
        </div>

        <div className="md:w-4/5 flex flex-col justify-center items-center gap-10 mb-10 mt-10 text-white w-[700px]">

        <div className="flex flex-col gap-8">
    <h1 className="bt:texr-[15px] text-4xl">Trademark Notices</h1>
    <p className="text-1xl text-gray-100">
        Anita Impex, a fully owned subsidiary of Anita Impex , utilizes the Anita Impex logo and the Symbol as trademarks. Other recognizable terms or images used on this website to distinguish the products and services of third parties may be trade dress or service marks of those third parties.
    </p>
</div>

<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Web Content and Materials</h1>
    <p className="text-1xl text-gray-100">
        The information on this website is provided solely for informational purposes. While Anita Impex considers it reliable, it does not guarantee its accuracy or completeness. The information on the website is not intended to be an offer to purchase from or solicit Anita Impex.

        Information and materials on this World Wide Web site, as well as the rules for accessing and using them, are subject to change without prior notice. Not all products and services are available in every region, and eligibility is subject to final approval by Anita Impex. Additionally, Anita Impex's website have its  independent terms and conditions, with supplementary terms taking precedence in case of a dispute.

        The website is not intended for use or distribution in countries where such activities would be illegal under local law. Dated information is published as of its date only, and Anita Impex Private Limited does not undertake any obligation to update or amend such information. Furthermore, Anita Impex  reserves the right to terminate any or all web offerings without prior notice. By providing information, products, or services, Anita Impex and its suppliers may discontinue or make changes to the information, products, or services offered.
    </p>
</div>


<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Limitation Of Liability</h1>
    <p className="text-1xl text-gray-100">
        The website is provided "as is" and "as available," containing all information and materials. Anita Impex makes no representations or warranties about the website, disclaiming all warranties, including implied warranties of merchantability, non-infringement of third-party rights, freedom from viruses or harmful code, or fitness for a particular purpose. Anita Impex expressly disclaims liability for errors or omissions in the materials and information, not warranting the accuracy, adequacy, or completeness. Nothing in this agreement limits or reduces Anita Impex's responsibilities and obligations to clients under applicable laws. Anita Impex is not liable for damages arising from the use or inability to use the website, regardless of whether advised of the likelihood of such damages and regardless of the form of action, whether in contract, warranty, tort (including negligence), strict liability, or otherwise.
    </p>
</div>

<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Anita Impex Customer Service Accessibility Policy and Procedure</h1>
    <p className="text-1xl text-gray-100">
        <strong>1. Background</strong><br />
        Anita Impex is subject to legislation aiming to improve accessibility standards for people.<br />

        <strong>2. Purpose</strong><br />
        This policy applies to the provision of services to clients, aiming to ensure that individuals can use and benefit from Anita Impex’s goods and services. Efforts will be made to respect dignity, independence, and communication needs, ensuring access to services for all.<br />

        <strong>3. Scope</strong><br />
        Support persons apply only to services at premises owned or operated by Anita Impex.<br />

        <strong>4. Our Mission</strong><br />
        Anita Impex is a diversified technology company committed to excellence in serving all customers, including people.<br />

        <strong>5. Our Commitment</strong><br />
        Anita Impex is committed to providing services that respect dignity and independence and offers equal opportunities for access.<br />

        <strong>6. Providing Services to People</strong><br />
        Anita Impex is committed to excellence in serving all customers, ensuring clear communication, accessible telephone services, and providing invoices in multiple formats upon request.<br />

        <strong>7. Use of Service to Support Persons</strong><br />
        Anita Impex welcomes individuals with support persons, allowing them entry without additional charges.<br />

        <strong>8. Questions About This Policy</strong><br />
        For inquiries about this policy, please contact: info@anitaimpex.com<br />
    </p>
</div>

<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Recruitment, Assessment, or Selection Process</h1>
    <p className="text-1xl text-gray-100">
        Anita Impex will inform individually selected applicants about the availability of accommodations upon request for the assessment or selection process materials or procedures.
    </p>
</div>

        </div>

    </section>
  )
}
export default Company;  