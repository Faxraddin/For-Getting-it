import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { PiWhatsappLogoThin } from "react-icons/pi";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Footer = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true,
        });
      }, []);
    
      const [btn, setBtn] = useState(false);
      const handleBtn = () => {
        setBtn(!btn);
      };
    
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1024) {
            setBtn(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const [show, setShow] = useState(false);
      const [show1, setShow1] = useState(false);
    
      const mobileToggle = () => {
        setShow(!show)
        setShow1(false)
      };
    
      const mobileToggle1 = () => {
        setShow1(!show1)
        setShow(false)
      };

      const handleHover=()=>{
        setShow(false)
      }
    
      const handleHover1=()=>{
        setShow1(false)
      }
    
      const handlePhoneNumberClick = () => {
        const phoneNumber = '+447456214608';

        const whatsappLink = `https://wa.me/${phoneNumber}`;
  
        window.location.href = whatsappLink;
      };

      const handlefacebook = () => {

        const whatsappLink = `https://www.facebook.com/anitaimpex?mibextid=LQQJ4d`;
  
        window.location.href = whatsappLink;
      };

      useEffect(() => {
        let prevScrollPosition = window.scrollY;
        let scrollUpCounter = 0;
      
        const handleScroll = () => {
          const currentScrollPosition = window.scrollY;
      
          // Check if the user is scrolling up
          if (prevScrollPosition > currentScrollPosition) {
            scrollUpCounter += prevScrollPosition - currentScrollPosition;
      
            // Check if the user has scrolled up at least 300 pixels
            if (scrollUpCounter >= 330) {
              setShow(false);
              setShow1(false);
              scrollUpCounter = 0; // Reset the counter after hiding the links
            }
          } else {
            // Reset the counter when scrolling down
            scrollUpCounter = 0;
          }
      
          prevScrollPosition = currentScrollPosition;
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return (
        <div className='w-full md:h-auto sm:pt-14 h-[404px] p-10 bg-black mb-0'>
            <div className='md:items-center flex h-full justify-around md:flex-col md:gap-20'>

                <div className='flex md:w-[90%] md:gap-10 md:text-center md:items-center flex-col w-[270px] justify-between h-[80%]'>

                    <div className='md:gap-3 md:items-center flex flex-col gap-5'>
                        <div className='flex pm:ml-0 ml-[-7px] items-center gap-2'>
                            <Link to={'/'}><img src='/dam.png' className='sm:w-[183px] md:w-[238px] rounded-[10px] w-[90%]'/></Link>
                        </div>
                        <div onClick={handlePhoneNumberClick} className='flex gap-2 items-center'>
                          <img src='/Whatsapp.png' className='w-[24px]'/>
                          <span onClick={handlePhoneNumberClick} className='text-[16px] text-white cursor-pointer'>+44 7456214608</span>
                        </div>
                        <div onClick={handlefacebook} className='flex gap-2 items-center'>
                          <img src='/face.png' className='w-[34px] ml-[-5px]'/>
                          <span onClick={handlePhoneNumberClick} className='text-[16px] text-white cursor-pointer'>Facebook</span>
                        </div>
                    </div>
                </div>
                <div className='md:items-center md:pl-0 md:w-[90%] md:justify-center flex flex-col gap-8 w-[270px] pl-20'>
                  <h1 className='ease-linear duration-200 text-white text-[19px] font-sans font-bold'>Services</h1>
                    <div className='relative z-[20]'>
                      <button onMouseEnter={mobileToggle}  onClick={mobileToggle} className={` text-slate-100 easier-linear duration-200 hover:text-yellow-400`}>Consulting</button>
                      {show && (
                        <div onMouseLeave={handleHover} data-aos='fade-up' className={`absolute p-[15px] bg-black gap-5 flex z-40 flex-col rounded-[10px] w-[235px] ${window.innerWidth <= 570 ? 'top-[-300px] left-[-70px]' : 'top-[-100px] left-[90px]'} `}>
                          <Link to={'TelecomsStrategy'} className='border-b-[1px] text-white ease-linear duration-200 p-3 text-center hover:text-yellow-400 text-[14px]' href="#">Media Strategy</Link>
                          <Link to={'TelecomsProcurement'} className='border-b-[1px] text-white ease-linear duration-200 p-3 text-center hover:text-yellow-400 text-[14px]' href="#">Telecoms Procurement</Link>
                          <Link to={'TelecomsAudit'} className='border-b-[1px] text-white ease-linear duration-200 p-3 text-center hover:text-yellow-400 text-[14px]' href="#">Network Optimization</Link>
                          <Link to={'TelecomsBench'} className='text-white ease-linear duration-200 p-3 text-center hover:text-yellow-400 text-[14px]' href="#">Telecoms Benchmarking</Link>
                        </div>
                      )}
                    </div>
                    <div className='relative z-[20]'>
                      <button onMouseEnter={mobileToggle1} onClick={mobileToggle1}  className={`text-slate-100  easier-linear duration-200 hover:text-yellow-400 `}>Expertise</button>
                        {show1 && (
                          <div onMouseLeave={handleHover1} data-aos='fade-up' className={`absolute p-[15px]  bg-black gap-5 flex flex-col rounded-[10px]  ${window.innerWidth <= 570 ? ' top-[-350px] left-[-80px]' : 'top-[-120px] left-[90px]'} w-[235px]`}>
                            <Link to={'CustomerExp'} className='border-b-[1px] text-white ease-linear p-3 text-center duration-200 hover:text-yellow-400 text-[14px]' href="#">Customer Experience</Link>
                            <Link to={'ContactCentres'} className='border-b-[1px] text-white ease-linear p-3 text-center duration-200 hover:text-yellow-400 text-[14px]' href="#">Contact Centres</Link>
                            <Link to={'UnifiedCommunicayions'} className='border-b-[1px] text-white ease-linear p-3 text-center duration-200 hover:text-yellow-400 text-[14px]' href="#">Unified Communications</Link>
                            <Link to={'NetworkWAN'} className='border-b-[1px] text-white ease-linear p-3 text-center duration-200 hover:text-yellow-400 text-[14px]' href="#">Netwotk / WAN</Link>
                            <Link to={'Mobile'} className='text-white ease-linear p-3 text-center duration-200 hover:text-yellow-400' href="#">Mobile</Link>
                          </div>
                        )}
                    </div>
                    <Link to={'OurMission'} className={`z-[10] text-slate-100  text-[15px] border-l-[0px] ease-linear duration-200 hover:text-yellow-400`}>Our Mission</Link>
                    <Link to={'Blogs'} className={` text-slate-100  text-[14px] border-l-[0px] ease-linear duration-200 hover:text-yellow-400`} >Blog</Link>
                </div>
                <div className='md:items-center md:pl-0 md:w-[90%] md:justify-center flex flex-col gap-6 w-[270px] pl-10'>
                    <h1 className='ease-linear duration-200 text-white text-[19px] font-sans font-bold'>Policys</h1>
                    <Link to={'/Privacy'} className='ease-linear duration-200 hover:text-yellow-400  text-slate-100'>Terms & Condicions</Link>
                    <Link to={'/Cookies'} className='ease-linear duration-200 hover:text-yellow-400 text-[15px] text-slate-100'>Cookie Policy</Link>
                    <Link to={'/Privacy2'} className='ease-linear duration-200 hover:text-yellow-400 text-[15px] text-slate-100'>Privacy Policy</Link>
                    <Link to={'/Copyright'} className='ease-linear duration-200 hover:text-yellow-400 text-[15px] text-slate-100'>Copyright Policy</Link>
                    <Link to={'/Company'} className='ease-linear duration-200 hover:text-yellow-400 text-[15px] text-slate-100'>Company Policy</Link>
                    <Link to={'/Refund'} className='ease-linear duration-200 hover:text-yellow-400 text-[15px] text-slate-100'>Refund Policy</Link>
                </div>
                <div className='md:items-center md:pl-0 md:w-[90%] md:justify-center flex flex-col gap-6 w-[270px] pl-10'>
                    <h1 className='ease-linear duration-200 text-white text-[19px] font-sans font-bold'>Emails</h1>
                    <span className='text-[15px] text-slate-100 ease-linear duration-200 hover:text-yellow-400'>info@anitaimpex.com</span>
                    <span className='text-[15px] text-slate-100 ease-linear duration-200 hover:text-yellow-400'>sales@anitaimpex.com</span>
                    <span className='text-[15px] text-slate-100 ease-linear duration-200 hover:text-yellow-400'>careers@anitaimpex.com</span>
                    <span className='text-[15px] text-slate-100 ease-linear duration-200 hover:text-yellow-400'>enquiries@anitaimpex.com</span>
                </div>
      

            </div>
        </div>
    )
}

export default Footer