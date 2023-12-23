import React,{useEffect, useState} from "react";

import MissionBox from "../../components/Mission";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import axios from "axios";

const News = () => {
    const [newsData,setNewsData] = useState([])

    useEffect(()=>{
        const fetchData = async() => {
            try {
                const response = await axios.get('https://anita-impex.onrender.com/getNews')
                setNewsData(response.data.news);
                console.log(response.data.news)
            } catch (error) {
                console.error("Error fetching news data:", error);   
            };
        }

        fetchData()
;    },[])

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-out-back',
        });
        window.scrollTo(0, 0);
    }, []);

    const data = [
        {
            img:'/N1.png',
            time:'6',
            title:'Five ways to improve customer service.',
            text:'Enhance Communication Channels: Provide multiple communication channels for customers to reach out and receive support. This can include phone, email, live chat, social media, and self-service options. Ensure prompt and consistent responses across all channels, and train your customer service representatives to communicate effectively and empathetically. Focus on Personalisation: Treat each customer as an individual and tailor your interactions accordingly. Use customer data and CRM systems to understand their preferences, purchase history, and previous interactions. Personalise your communication and recommendations to provide a more personalised and relevant experience. Empower Customer Service Representatives: Equip your customer service representatives with the necessary tools, knowledge, and authority to resolve customer issues effectively. Provide comprehensive training programs to enhance their product knowledge and customer service skills. Encourage them to take ownership of customer issues and empower them to make decisions that benefit the customer.  Proactive Support and Anticipation: Anticipate customer needs and reach out to them proactively. Monitor customer behaviour and usage patterns to identify potential issues before they escalate. Send proactive notifications, updates, and recommendations to customers to ensure they feel supported and valued. Collect and Act on Customer Feedback: Regularly collect customer feedback through surveys, feedback forms, and social media monitoring. Actively listen to customer concerns and suggestions and use the feedback to improve your products, services, and customer support processes. Communicate the changes and improvements made based on customer feedback to demonstrate your commitment to their satisfaction. Remember, consistently providing excellent customer service requires a customer-centric mindset throughout the organization. Encourage a culture that prioritizes customer satisfaction and invest in ongoing training and improvement initiatives for your customer service team.'
        },
        {
            img:'/N2.png',
            time:'4',
            title:'What do telecommunications consultants do?',
            text:"A telecommunications consultant is a professional who provides expert advice and assistance to individuals, businesses, or organizations in the field of telecommunications. Their role involves understanding the specific communication needs and goals of their clients and providing strategic recommendations, solutions, and support to optimise their telecommunication systems and services. Here are some key responsibilities and activities typically associated with a telecommunications consultant: 1.    Needs Assessment: Telecommunications consultants assess the communication requirements of their clients by evaluating existing infrastructure, technologies, and workflows. They analyse the organization's goals, budget, and growth plans to determine the most suitable telecommunications solutions.2.    Technology Evaluation and Selection: Consultants research and evaluate various telecommunications technologies, systems, and vendors to recommend the most appropriate options for their clients. This can include analysing voice systems, data networks, video conferencing solutions, mobile solutions, cloud services, wireless technologies, and security measures.3.    Telecommunications Strategy: Development: Consultants assist in developing a comprehensive telecommunications strategy aligned with the organisation's goals. This involves outlining the communication objectives, identifying the required infrastructure and systems, and developing a roadmap for implementation and ongoing management."
        },
        {
            img:'/N3.png',
            time:'3',
            title:'What are the characteristics of a zero trust network?',
            text:"It requires authentication and authorization for every access request, regardless of whether it originates from inside or outside the network perimeter. Here are some key characteristics of a zero trust network: Identity-centric security: Zero trust networks focus on user identities and device characteristics rather than relying solely on network perimeters. Access decisions are based on factors like user identity, device health, location, and behaviour. Least privilege access: Zero trust networks enforce the principle of least privilege, meaning that users and devices are granted only the minimum level of access necessary to perform their specific tasks. Access rights are assigned based on job roles, responsibilities, and specific contextual factors. Continuous authentication: Authentication is required for every access attempt, even after the initial login. Zero trust networks employ multi-factor authentication (MFA), adaptive authentication, and contextual factors (e.g., user location, time of access) to ensure that users are verified at each step. Micro-segmentation: Zero trust networks implement micro-segmentation to divide the network into smaller, isolated segments. Each segment has its own security controls and policies, which reduces the potential attack surface and limits lateral movement within the network. Network visibility and monitoring: Zero trust networks emphasize continuous monitoring and visibility of network traffic, user behaviours, and device activities. Real-time monitoring helps identify anomalies, detect potential threats, and respond promptly to security incidents. Encryption and secure communication: Zero trust networks enforce encryption for data both in transit and at rest. Encrypted communication protocols and secure data handling mechanisms are utilized to protect sensitive information and prevent unauthorized access. Zero trust access controls: Access controls are implemented at various levels, including user access, application access, and network access. Access decisions are made dynamically based on real-time assessments of user and device trustworthiness.  Automation and orchestration: Zero trust networks leverage automation and orchestration tools to streamline security processes and ensure consistent application of security policies. Automation helps reduce manual errors, improve efficiency, and enable rapid response to security events. Continuous monitoring and risk assessment: Zero trust networks implement continuous monitoring and risk assessment mechanisms to identify emerging threats, vulnerabilities, and suspicious activities. Regular risk assessments help adapt security measures to changing circumstances and maintain a proactive security"
        },
        {
            img:'/N4.png',
            time:'3 ',
            title:'Revolutionizing Customer Service: The Impact of AI',
            text:"With the advent of artificial intelligence (AI), a new era has emerged, transforming the way customer service is delivered. From chatbots to intelligent virtual assistants, AI is revolutionizing customer service, providing businesses with efficient and personalized experiences for their customers. In this article, we will explore how AI is changing customer service and the benefits it brings to both businesses and consumers. Enhanced Customer Engagement: AI-powered chatbots have become a cornerstone of customer service, offering immediate assistance and support 24/7. These intelligent virtual agents can handle a wide range of inquiries, from basic FAQs to complex problem-solving. By utilizing natural language processing and machine learning algorithms, chatbots can understand and respond to customer queries accurately and in real-time. This instant engagement improves customer satisfaction by providing timely assistance and reducing response times. Personalized Customer Experiences: AI empowers businesses to deliver highly personalized experiences to their customers. Through data analysis and predictive algorithms, AI systems can gather and analyse customer information, such as purchase history, preferences, and browsing behaviour. This enables businesses to offer tailored recommendations, personalized product suggestions, and customized promotions. By understanding individual customer needs and preferences, businesses can strengthen customer loyalty and drive sales. Efficient and Scalable Support: AI-driven customer service solutions offer scalability and cost-effectiveness. Unlike human agents, chatbots and virtual assistants can handle multiple customer inquiries simultaneously without fatigue or delays. They can process vast amounts of data and provide consistent responses across multiple channels, ensuring a seamless customer experience. This scalability allows businesses to handle high volumes of customer interactions efficiently, reducing operational costs and increasing overall productivity. Proactive Issue Resolution: AI not only assists in reactive customer support but also facilitates proactive issue resolution. By leveraging AI technologies, businesses can identify potential problems or patterns based on customer interactions and behaviours. This enables them to address issues before they escalate, improving customer satisfaction and loyalty. For instance, AI-powered systems can detect signs of dissatisfaction in customer conversations and alert human agents to intervene and resolve the problem promptly. Continuous Learning and Improvement: One of the remarkable advantages of AI is its ability to learn and improve over time. AI systems can analyse vast amounts of customer data, interactions, and feedback to identify patterns and trends. This data-driven analysis helps businesses understand customer preferences, pain points, and areas of improvement. By continuously learning from customer interactions, AI systems can refine their responses, provide more accurate information, and offer increasingly personalized experiences, ultimately raising the overall quality of customer service. AI is transforming customer service by offering businesses innovative tools to enhance customer engagement, provide personalized experiences, and streamline support processes. Through chatbots, virtual assistants, and data analytics, AI empowers businesses to deliver efficient, scalable, and proactive customer service. By embracing AI technologies, businesses can build stronger customer relationships, drive customer loyalty, and gain a competitive edge in today's dynamic marketplace. As AI continues to advance, we can expect even more exciting developments that will reshape the future of customer service."
        },
    ];

    const combinedData = [...data, ...newsData];

    return (
        <section style={{ overflow: 'hidden' }} className="fade-in w-full bg-black justify-center items-center flex flex-col">

            <div style={{backgroundImage:"url('/p28.png')",backgroundSize:'cover',backgroundPosition:'top'}} className="pm:h-[333px] h-[604px] text-white flex justify-center items-center w-full">
                <div data-aos='fade-right' className="w-[90%]">
                    <h1 className="pm:text-4xl font-sans font-bold text-black  text-center mt-10 text-6xl">Blog</h1>
                </div>
            </div>
            <div className="h-auto w-full mt-10 flex justify-center items-center relative">
                <div className="w-[90%]">
                    <div className="flex justify-around items-center flex-col">
                        {combinedData.map((Box)=>(<MissionBox key={Box.title} img={Box.img} title={Box.title} time={Box.time} text={Box.text}/>))}
                    </div>  
                </div>
            </div>

        </section>
    )
}
export default News