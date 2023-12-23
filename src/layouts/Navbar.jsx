import React,{useEffect,useState} from 'react'
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import Logo from '/dam.png';
import { RxHamburgerMenu } from "react-icons/rx";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Navbar = () => {

  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-back',
    });
  }, []);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  const [btn,setBtn] = useState(false);
  const handleBtn = () => {
    setBtn(!btn)
  } 

  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth >= 1024){
        setBtn(false)
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  const fadeNavbar = useSpring({
    opacity: btn ? 1 : 0,
    transform: btn ? 'translateY(0px)' : 'translateY(-10px)',
  });

  const [show,setShow] = useState(false);
  const [show1,setShow1] = useState(false);
  const [hover,setHover] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 385) {
        setShow(false);
        setShow1(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    
      <div className=' w-full absolute z-[40] flex items-center justify-center bg-white'>
            <div className=' flex w-[95%] items-center justify-between '>
                
                <div className='flex bt:border-r-0 items-center justify-center gap-3 relative left-[-36px] border-r-2'>
                    <Link to={'/'}><img className='fade-in pm:h-[63px] pm:w-[180px] w-[250px] object-cover h-[85px]' src={Logo} alt="Logo"/></Link>
                </div>
                <div style={fadeNavbar} className={`${btn ? 'z-[2] pm:top-[63px] pm:pt-10 flex w-full flex-col justify-center items-center bg-white absolute left-[0] pt-5 top-[76px]':'flex lg:hidden'} pm:pt-10 items-center justify-between navabarAnmation gap-[40px]`}>
  
                    <div className='relative ' >
                      <button onMouseEnter={mobileToggle} onClick={mobileToggle} className={`${btn ? 'w-full pl-3 border-none text-[16px]':''} pl-3 ease-linear duration-200 hover:text-yellow-400`}>Consulting</button>
                      {show && (
                        <div onMouseLeave={handleHover}  data-aos='fade-up' className="pm:left-[-60px] absolute p-[15px] bg-white gap-5 rounded-[10px] shadow-lg flex z-40 flex-col w-[230px] top-[45px] left-[-50px]">
                          <Link to={'TelecomsStrategy'} className='border-b-[1px] ease-linear duration-200 p-2 text-center hover:text-yellow-400 text-[14px]' href="#">Media Strategy</Link>
                          <Link to={'TelecomsProcurement'} className='border-b-[1px]  ease-linear duration-200 p-2 text-center hover:text-yellow-400 text-[14px]' href="#">Telecoms Procurement</Link>
                          <Link to={'TelecomsAudit'} className='border-b-[1px] ease-linear duration-200 p-2 text-center hover:text-yellow-400 text-[14px]' href="#">Network Optimization</Link>
                          <Link to={'TelecomsBench'} className=' ease-linear duration-200 p-2 text-center hover:text-yellow-400 text-[14px]' href="#">Telecoms Benchmarking</Link>
                        </div>
                      )}
                    </div>
                    <div className='relative z-[20]' >
                      <button onMouseEnter={mobileToggle1}  onClick={mobileToggle1}  className={`${btn ? 'w-full border-none text-[16px]':''} border-l-[1px] pl-3   ease-linear duration-200 hover:text-yellow-400`}>Expertise</button>
                        {show1 && (
                          <div onMouseLeave={handleHover1} className=''>
                              <div data-aos='fade-up' className="pm:left-[-60px] absolute p-[15px] bg-white gap-5 flex flex-col rounded-[10px] shadow-lg w-[235px] top-[45px] left-[-55px]">
                                <Link to={'CustomerExp'} className='border-b-[1px]  ease-linear p-3 text-center duration-200 hover:text-yellow-400 text-[14px]' href="#">Customer Experience</Link>
                                <Link to={'ContactCentres'} className='border-b-[1px]  ease-linear p-3 text-center duration-200 hover:text-yellow-400 text-[14px]' href="#">Contact Centres</Link>
                                <Link to={'UnifiedCommunicayions'} className='border-b-[1px] ease-linear p-3 text-center duration-200 hover:text-yellow-400 text-[14px]' href="#">Unified Communications</Link>
                                <Link to={'NetworkWAN'} className='border-b-[1px]  ease-linear p-3 text-center duration-200 hover:text-yellow-400 text-[14px]' href="#">Netwotk / WAN</Link>
                                <Link to={'Mobile'} className=' ease-linear p-3 text-center duration-200 hover:text-yellow-400 text-[14px]' href="#">Mobile</Link>
                            </div>
                          </div>
                        )}
                    </div>
                    <Link to={'OurMission'} className={`${btn ? 'border-none text-[16px]':''}  text-[15px] border-l-[1px] pl-3 ease-linear duration-200 hover:text-yellow-400`}>Our Mission</Link>
                    <Link to={'Blogs'} className={`${btn ? 'border-none text-[16px]':''}  text-[15px] border-l-[1px] pl-3 ease-linear duration-200 hover:text-yellow-400`} >Blog</Link>

                    <animated.div onClick={()=>navigate('Contact')} style={fadeIn}><button className={`sm:ml-[12px] fade-in lg:text-[16px] lg:p-1 ease-linear duration-200 hover:bg-black hover:text-white hover:border-[1px] p-2 rounded-[6px] bg-yellow-400 w-[130px]`}>Contact Us</button></animated.div>
                <div/>

            </div>
              <div className="hidden z-[2] lg:flex">
                <button 
                  onClick={handleBtn}
                  className="text-white sm:mr-2 hover:text-red-500"
                >
                  {btn ? (
                    <span className='text-5xl text-black hover:text-red-500 ease-linear duration-200'>&#xd7;</span> 
                  ) : (
                    <RxHamburgerMenu className='text-2xl text-black ease-linear duration-200' />
                  )}
                </button>
              </div>
        </div>

    </div>
  )
}

export default Navbar