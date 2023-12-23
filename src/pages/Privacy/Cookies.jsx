import React,{useEffect,useState} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Cookies = () => {

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
        <div style={{backgroundImage:"url('/Mission5.png')",backgroundSize:'cover',backgroundPosition:'bottom'}} className="pm:h-[333px] h-[644px] text-white flex justify-center items-center w-full">
            <h1 data-aos='fade-up' className="pm:text-3xl text-4xl text-black font-bold font-sans">Cookie Policy</h1>
        </div>

        <div className="md:w-4/5 flex flex-col justify-center items-center gap-10 mb-10 mt-10 text-white w-[700px]">

        <div className="flex flex-col gap-8">
    <h1 className="bt:texr-[15px] text-4xl">Understanding Cookies and Their Purpose</h1>
    <p className="text-1xl text-gray-100">
        Cookies, small text files stored in your browser's memory by our websites, play a crucial role in supporting various functions on our sites. They help us understand which pages you visit the most, assess our website's effectiveness, and enhance communication about our products and services. While cookies don't directly identify you, some information collected, such as browsing history or device details, may be treated as personal data. Cookies can be session or persistent: Persistent cookies remain on your device until erased, while session cookies are temporary and expire when you close your browser or end your session.
    </p>
</div>

<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Types of Cookies We Use</h1>
    <p className="text-1xl text-gray-100">
        To provide clarity on the cookies used, we categorize them into four types: Strictly Necessary, Performance, Functional, and Targeting.
        <br></br><br></br>
        <strong>Category 1: Strictly Necessary</strong><br></br>
        Essential for website operation, these cookies support your browsing experience, enable authentication, and enhance security. They monitor website functionality, deliver content reliably, and remember your cookie consent decisions.
        <br></br><br></br>
        <strong>Category 2: Performance Cookies</strong><br></br>
        These cookies collect information on your website usage, helping us understand which pages you've visited and if any errors occurred. The data is aggregated, ensuring your direct identification is not possible. We use this data to improve website effectiveness.
        <br></br><br></br>
        <strong>Category 3: Functionality Cookies</strong><br></br>
        Functionality cookies personalize your website visit, remembering your preferences and providing various web services. Limiting these cookies may impact your ability to personalize choices and preferences.
        <br></br><br></br>
        <strong>Category 4: Targeting Cookies</strong><br></br>
        Placed by us or third-party partners, targeting cookies tailor marketing based on your interests. They do not directly identify you but record website visits, responses to ads, and pages visited. Insights gained help refine advertisements, evaluate marketing effectiveness, and identify similar customer profiles.
    </p>
</div>

<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Cookie Types on Anita Impex Sites</h1>
    <p className="text-1xl text-gray-100">
        The cookies used on Anita Impex site is categorized as per the table below. It's important to note that not all cookies may be used in all jurisdictions or websites. The categories of cookies used on this website are listed below.
    </p>
</div>


            <div className="flex flex-col gap-8">
    <h1 className="text-4xl">First Party Analytics Cookies</h1>
    <p className="text-1xl text-gray-100">
        These cookies enable us to utilize data analytics for measuring and enhancing our site's performance, providing more relevant content. They do not collect information identifying a visitor at an individual level available to us. Personally identifiable information is not shared with external third parties, except in limited cases when we engage a service provider to act on our behalf. However, the service provider cannot use the data for their own purposes. Examples include Adobe's Analytics, Target, Audience Manager; Contentsquare, and Demandbase.
    </p>
</div>

<div className="flex flex-col gap-8">
    <h1 className="text-4xl">Google Analytics Cookies</h1>
    <p className="text-1xl text-gray-100">
        Google Analytics is implemented on our website, a web analytics service provided by Google, Inc. Cookies from Google Analytics track website usage, storing data about your usage, including your IP address, on servers in the United States. Google uses this data to analyze site usage, generate reports, and perform other tasks related to website activity and internet usage. Google may disclose this information to third parties when required by law or when such third parties process the information on Google's behalf. Your IP address will not be linked to other information stored by Google. You can decline the use of cookies by adjusting your browser settings (see below), but be aware that it may affect the full functionality of this website.
    </p>
</div>


        </div>

    </section>
  )
}
export default Cookies;  