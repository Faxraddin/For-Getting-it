import React,{ useEffect,useState } from 'react'
import { useNavigate } from 'react-router';

import { useSpring,animated } from 'react-spring';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Number({ n, isVisible }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: isVisible ? n : 0, 
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 }
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Home = () => {

  const navigate = useNavigate();

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [scrollPosition1, setScrollPosition1] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition1(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out-back',
    });
    window.scrollTo(0, 0);
  }, []);


  const [isNumberVisible, setIsNumberVisible] = useState(false);
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsNumberVisible(true);
      } else {
        setIsNumberVisible(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const targetElement = document.querySelector('#Number'); 
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className='fade-in'>
      <div  style={{backgroundImage:"url('/Main.png')",backgroundSize:'cover'}} className='lg:h-auto sp:pt-[100px] bt:pt-[30vw] lg:pt-[200px] lg:pb-[10vw] w-full h-[800px] pt-[100px]  flex justify-center items-center'>
        <div className='w-[90%]'>

          <div  className=' sm:w-[70%] sm:gap-[2vw] w-[600px] flex flex-col gap-[40px]'>
            <h1 className='sp:text-[19px] lg:text-[7vw] text-white text-7xl'>Telecom and CX consultants working independently.</h1>
            <h1 className='sp:text-[4vw] lg:text-[4vw] text-white text-4xl'>Achieve the Art of the Possible.</h1>
            <button onClick={()=>navigate('/OurMission')} className='lg:p-[1.7vw] sp:p-[3px] sp:w-[80px] sp:text-[10px] lg:text-[2vw] lg:w-[16vw] ease-linear duration-200 hover:bg-black hover:text-white hover:border-[1px] p-5 rounded-[6px] bg-yellow-400 w-[140px]'>Learn More</button>
          </div>

        </div>
      </div>

      <div className='sm:pt-0 w-full h-auto pt-[120px] flex justify-center items-center'>
        <div className='sm:w-full w-[90%] sm:bg-black'>
          
          <div className='xl:flex-col pm:w-full xl:bg-transparent bg-black flex h-auto justify-center items-center w-full '>

            <div className='sm:hidden xl:justify-center xl:hidden w-[590px] h-full flex justify-left items-center '>
              <video width="640" height="100%" autoPlay loop muted>
                <source src={'/v1.mp4'} type="video/mp4" />
              </video>
            </div>

            <div className='sm:w-full bg-black sm:text-center sm:p-10 xl:h-auto xl:items-center xl:w-full sm:gap-[30px] sm:bg-black w-[700px] h-[700px] flex justify-center gap-[45px]  flex-col p-20'> 
              <h1 className='pm:w-[100%] pm:text-[18px] sm:text-[22px] text-white text-4xl ease-linear duration-200 hover:text-yellow-400 font-sans font-bold'>Independent Telecommunications Consultants</h1>
              <div className='pm:w-[100%] flex flex-col gap-4'>
              <p className='sm:text-[17px] pm:text-[13px] text-gray-100 text-1xl'>Pinnacle Solutions stands as a prominent consultancy in the Telecommunications and Customer Service domain, dedicated to supporting our clients in achieving digital transformation and excellence in customer service. Over two decades, our consultants have consistently delivered expert guidance to clients worldwide, including some of the most renowned global brands.</p>
              <p className='sm:text-[17px] pm:text-[13px] text-gray-100 text-1xl'>Our seasoned telecom consultants strategically align technology with business challenges, working collaboratively with clients to discover solutions that foster innovation, streamline processes, reduce costs, and drive positive change.</p>
              <p className='sm:text-[17px] pm:text-[13px] text-gray-100 text-1xl'>Our distinctive approach and unwavering commitment to the industry ensure our clients receive impartial advice, in-depth analysis, and practical solutions.</p>
              </div>
              <button onClick={()=>navigate('Contact')} className='sm:w-[40vw] sm:p-2 sm:text-[3vw] ease-linear duration-200 hover:bg-black hover:text-white hover:border-[1px] p-4 rounded-[6px] bg-yellow-400 w-[200px]'>Contact Us</button>
            </div>

          </div>

        </div>
      </div>

      <div  className='sm:p-0 w-full h-auto pt-[120px] flex justify-center items-center'>
        <div className='sm:w-full w-[90%] sm:bg-black'>
          
          <div className='xxl:flex-col flex xxl:bg-transparent  justify-center items-center h-auto w-full bg-black'>

            <div style={{backgroundImage:"url('/p21.png')",backgroundSize:'cover',backgroundRepeat:'repeat'}} className='sm:gap-[7vw] sm:p-10 xl:justify-center xxl:w-full xxl:h-auto pm:h-[430px] w-[40%] h-[860px] flex justify-center flex-col p-20 gap-[40px] items-center '>
              <h1 className='sm:text-[22px] pm:text-[18px] text-white text-4xl  ease-linear duration-200 hover:text-yellow-400 font-sans font-bold'>Areas of Expertise</h1>
              <p className='sm:text-[17px] pm:text-[13px] text-gray-100 text-[20px]'>We help connect people.</p>
              <p className='sm:text-[17px] text-center pm:text-[13px] sm:w-5/5 sm:text-center text-gray-100 text-[20px]'> Empowering clients with cutting-edge technology, we enhance internal connectivity and streamline business processes for superior customer service and optimized resources.</p>
              <p className='sm:text-[17px] text-center pm:text-[13px] sm:w-5/5 sm:text-center text-gray-100 text-[20px]'>Our committed team of ICT consultants is dedicated to ensuring our clients achieve the best return on investment, fostering not only a significant transformation but also continual enhancement of service quality, technology, and customer experience.</p>
            </div>

            <div className='xxl:w-full sm:pt-0 pt-10 sm:gap-[0px] xxl:pt-12 xxl:pb-20 w-[60%] bg-black flex flex-col justify-center items-center'> 
              <div className='sm:flex-col w-full flex gap-5 xxl:justify-center xxl:items-center'>

                <div onClick={()=>{navigate('/CustomerExp')}} data-aos='fade-up' style={{boxShadow:' 5px 5px 20px rgba(0, 0, 0, 0.3)'}}  className='xxl:top-0 xxl:left-0 sm:w-[240px] sm:h-[280px] sp:w-[80%] sp:h-auto sm:p-[15px] w-[280px] rounded-[10px] flex relative top-[-80px] left-[80px] flex-col h-[440px] bg-white p-[22px] ease-linear duration-200'>
                    <div className='sm:gap-[20px] gap-[27px] flex flex-col justify-berween'>
                        <img className='sm:w-[27px] w-12' src='/icon1.png'/>
                        <h1  className='sm:text-[15px] text-gray-700 text-[20px] ease-linear duration-200 hover:text-yellow-400'>Consulting for Customer Experience and Contact Centers</h1>
                        <p className='sm:text-[12px] text-gray-600 text-1xl'>Our comprehensive approach to CX projects assesses technology, resources, and, importantly, the fundamental business processes to enhance customer service.</p>
                        <div className='h-[1px] w-[150px] border-slate-800 border-2 ease-linear duration-200 hover:h-[10px] rounded-md bg-black'></div>
                    </div>
                </div>

                <div onClick={()=>{navigate('/NetworkWAN')}}  data-aos='fade-up' style={{boxShadow:' 5px 5px 20px rgba(0, 0, 0, 0.3)'}} className='xxl:top-0 sm:h-[255px] sm:w-[240px] sp:w-[80%] sp:h-auto sm:p-[15px] xxl:left-0 w-[280px] rounded-[10px] flex relative top-[55px] left-[120px] flex-col h-[370px] bg-white p-[22px]'>
                  <div className='sm:gap-[20px] gap-[27px] flex flex-col justify-between'>
                      <img className='sm:w-[27px] w-12' src='/icon2.png'/>
                      <h1 className='sm:text-[15px] text-gray-600 text-[20px]  ease-linear duration-200 hover:text-yellow-400'>Next-Gen Network and WAN Consulting</h1>
                      <p className='sm:text-[12px] text-gray-600 text-1xl'>Empowering our clients to design the network of the future, accommodating evolving work patterns, and supporting broader IT and business strategies.</p>
                      <div className='h-[1px] w-[150px] border-slate-800 border-2 ease-linear duration-200 hover:h-[10px] rounded-md bg-black'></div>
                  </div>
              </div>

              </div>
              <div className='sm:flex-col w-full flex gap-5 xxl:gap-3 xxl:justify-center xxl:items-center'> 

                  <div onClick={()=>{navigate('/UnifiedCommunicayions')}} data-aos='fade-up' style={{boxShadow:' 5px 5px 20px rgba(0, 0, 0, 0.3)'}} className='Card xxl:top-6 sm:h-[255px] sm:w-[240px] sp:w-[80%] sp:h-auto sm:p-[15px] xxl:left-0 w-[280px] rounded-[10px] flex relative top-[-40px] left-[80px] flex-col h-[380px] bg-white p-[22px]'>
                      <div className='sm:gap-[20px] gap-[27px] flex flex-col justify-between'>
                          <img className='sm:w-[27px] w-12' src='/icon3.png'/>
                          <h1  className='sm:text-[15px] text-gray-600 text-[20px]  ease-linear duration-200 hover:text-yellow-400'>Communications Consulting</h1>
                          <p className='sm:text-[12px] text-gray-600 text-1xl'>Recognizing the pivotal role of UC in a productive workforce, we assist our clients in identifying the right technology to support agile and hybrid environments.</p>
                          <div className='h-[1px] w-[150px] border-slate-800 border-2 ease-linear duration-200 hover:h-[10px] rounded-md bg-black'></div>
                      </div>
                  </div>.

                  <div onClick={()=>{navigate('/Mobile')}} data-aos='fade-up' style={{boxShadow:' 5px 5px 20px rgba(0, 0, 0, 0.3)'}} className='xxl:top-0 sm:h-[255px] sm:w-[240px] sp:w-[80%] sp:h-auto sm:p-[15px] xxl:left-0 w-[280px] rounded-[10px] flex relative top-[20px] left-[100px] flex-col h-[380px] bg-white p-[22px]'>
                      <div className='sm:gap-[20px] gap-[27px] flex flex-col justify-between'>
                          <img className='sm:w-[27px] w-12' src='/icon4.png'/>
                          <h1 onClick={()=>{navigate('/Mobile')}} className='sm:text-[15px] text-gray-600 text-[20px]  ease-linear duration-200 hover:text-yellow-400'>Mobile Consulting</h1>
                          <p className='sm:text-[12px] text-gray-600 text-1xl'>In an era where mobile communications play a pivotal role in remote workplaces, we ensure our clients have a solution that meets their needs while keeping costs in check.</p>
                          <div className='h-[1px] w-[150px] border-slate-800 border-2 ease-linear duration-200 hover:h-[10px] rounded-md bg-black'></div>
                      </div>
                  </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <div id='Number' style={{backgroundImage:"url('/p20.png')",backgroundSize:'cover',backgroundRepeat:'repeat',}} className='sm:mt-0 w-full h-auto mt-[120px] flex justify-center '>
        <div className='w-full pm:p-10 p-40 '>

          <div className='justify-center w-full items-center flex flex-col gap-10'>
            <h1 className='font-sans font-bold pm:w-[220px] pm:text-[18px] md:text-center text-white text-3xl'>We Take Pride in Our Numbers</h1>

            <div data-aos={'fade-up'} className='slg:flex-col flex items-center justify-between gap-10'>

              <div className='Card pm:p-3 pm:w-[200px] pm:border-none sp:w-[90%] justify-center items-center flex flex-col gap-4 border-b-2 w-full p-5'>
                <h1 className='pm:text-2xl sp:text-3xl text-yellow-400 text-4xl'>{<Number n={4} isVisible={isNumberVisible}/>}</h1>
                <p className='pm:text-[11px] pm:w-auto text-gray-100 text-[13px] w-[130px] '>Years of Experience</p>
              </div>
              <div className='pm:border-none pm:p-3  sp:w-[90%] justify-center items-center flex flex-col gap-4 w-full border-b-2 p-5'>
                <h1 className='pm:text-2xl sp:text-3xl text-yellow-400 text-4xl flex'><Number n={100} isVisible={isNumberVisible}/>m+</h1>
                <p className='pm:text-[11px] pm:w-auto text-gray-100 text-[13px] w-[120px] '>Services Provided</p>
              </div>
              <div className='pm:border-none pm:p-3  sp:w-[90%] justify-center items-center flex flex-col gap-4 w-full border-b-2 p-5'>
                <h1 className='pm:text-2xl sp:text-3xl text-yellow-400 text-4xl'><Number n={25} isVisible={isNumberVisible}/></h1>
                <p className='pm:text-[11px] pm:w-auto  text-gray-100 text-[13px] w-[120px]'>Industries Covered</p>
              </div>
              <div className='pm:border-none pm:p-3  sp:w-[90%] justify-center items-center flex flex-col gap-4 w-full border-b-2 p-5'>
                <h1 className='pm:text-2xl sp:text-3xl text-yellow-400 text-4xl'><Number n={20} isVisible={isNumberVisible}/></h1>
                <p className='pm:text-[11px] pm:w-auto text-center text-gray-100 text-[13px] w-[140px] '>Countrys</p>
              </div>
              <div className='pm:border-none pm:p-3  sp:w-[90%] justify-center items-center flex flex-col gap-4 w-full border-b-2 p-5'>
                <h1 className='pm:text-2xl sp:text-3xl text-yellow-400 text-4xl'><Number n={102} isVisible={isNumberVisible}/></h1>
                <p className='pm:text-[11px] pm:w-auto text-gray-100 text-[13px] w-[140px]'>Clients We've Helped</p>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div  className='sm:pt-0 w-full h-auto pt-[120px] sm:mb-0 flex justify-center items-center mb-20'>
        <div className='sm:w-full w-[90%] sm:bg-black'>
          
          <div className='lg:flex-col sm:h-auto flex h-[770px] justify-center items-center w-full bg-black'>

            <div className='lg:gap-[30px]  lg:p-10 lg:w-full w-[60%] flex gap-[55px] flex-col p-20'> 
              <h1 className='sm:text-[22px] text-white text-4xl ease-linear duration-200 hover:text-yellow-400'>Consulting Services</h1>
              <div className='flex flex-col gap-4  lg:w-full'>
                <p className='sm:text-[15px] text-gray-100 md:text-[17px] text-[20px] leading-6'>
                  Assessment - A thorough examination of technology and services.<br></br>
                  Strategic Planning - Defining your destination and outlining the path to reach it.<br></br>
                  Procurement Assistance - From gathering requirements to awarding contracts.<br></br>
                  Project Management - Guiding clients to achieve their objectives.<br></br>
                  Continuous Improvement - Providing ongoing enhancements and ensuring a positive ROI.<br></br>
                </p>
              </div>
              <button onClick={()=>navigate('/TelecomsAudit')} className='sm:w-[30vw] sm:p-2 sm:text-[3vw] ease-linear duration-200 hover:bg-black hover:text-white hover:border-[1px] p-4 rounded-[6px] bg-yellow-400 w-[200px]'>Learn More</button>
            </div>

            <div style={{backgroundImage:"url('/p17.png')",backgroundSize:'cover',backgroundRepeat:'no-repeat',}}  className='lg:w-full sm:h-[300px] lg:p-0 w-[40%] h-full flex justify-center items-center '>
              <h1 className='sm:text-[5vw] font-sans font-bold text-white text-4xl text-center ease-linear duration-200 hover:text-yellow-400'>Independent<br></br> Pragmatic<br></br> Collaborative</h1>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Home