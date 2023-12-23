import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const MissionBox = (props) => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-out-back',
        });
    }, []);

    const navigate = useNavigate();

    const handleLink = () => {
        localStorage.setItem('img',props.img);
        localStorage.setItem('time',props.time);
        localStorage.setItem('title',props.title);
        localStorage.setItem('text',props.text);
        navigate('/Blog')
    }

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }

    return (
        <div data-aos={'fade-up'} className="slg:w-[100%] w-[940px] h-auto  mt-6 mb-6">
            <div className="flex lg:flex-col">

                <img src={props.img} className="lg:w-full lg:h-full w-[60%] h-[363px] border-[1px] border-gray-600"/>

                <div className="lg:w-full lg:h-auto p-5 w-[40%] h-[363px] border-[1px] border-gray-600 text-white justify-between flex flex-col">
                    <div className="flex flex-col gap-5">
                        <span className="pm:text-[10px] text-[12px] text-gray-100">{props.time} min</span>
                        <Link className="pm:text-[18px] text-[22px] ease-linear duration-200 hover:text-yellow-400 cursor-pointer">{props.title}</Link>
                        <p className="pm:text-[13px] text-gray-200">{truncateText(props.text, 80)}</p>
                    </div>
                   <div className="lg:mt-20 w-full flex justify-center items-center">
                        <button  onClick={handleLink} className="lg:w-[310px] border-2 w-[100%] border-black hover:border-white ease-linear duration-200 text-black hover:bg-black hover:text-white hover:border-2 p-2 rounded-[6px] bg-yellow-400 ">Keep Reading</button>
                   </div>
                </div>

            </div>
        </div>
    )
}
export default MissionBox