import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const NewBox = () => {

    useEffect(() => {
        AOS.init({
          duration: 1500,
          easing: 'ease-out-back',
        });
        window.scrollTo(0, 0);
    }, []);

    return (
        <section style={{ overflow: 'hidden' }} className="fade-in w-full bg-black justify-center items-center flex flex-col">
            <div style={{backgroundImage:"url('/p23.png')",backgroundSize:'cover'}} className="pm:h-[333px] h-[644px] text-white flex justify-center items-center w-full">
                <h1 data-aos='fade-up' className="pm:text-4xl text-black font-sans font-bold text-6xl">Blog</h1>
            </div>
            <div className="h-auto w-full flex justify-center items-center mt-20">
                <div className="sr:w-[80%] pm:p-0 bt:p-6 text-white w-[900px] border-gray-500 border-[1px] p-20 flex flex-col gap-10">
                    <span data-aos='fade-up'  className="text-[15px] text-gray-100">{localStorage.getItem('time')} min</span>
                    <h1 data-aos='fade-up'  className=" pm:text-[14px] md:text-[24px] w-[90%] text-5xl">{localStorage.getItem('title')}</h1>
                    <img data-aos='fade-up'  src={localStorage.getItem('img')} className="sr:w-full w-4/5"/>
                    <p data-aos='fade-up'  className="md:text-[13px] whitespace-pre-line text-[15px] text-gray-300">{localStorage.getItem('text')}</p>
                </div>
            </div>

        </section>
    )
}
export default NewBox