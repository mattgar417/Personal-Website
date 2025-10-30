"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { FaBullseye, FaCode, FaEnvelope, FaPenNib, FaGithub, FaLinkedin, FaLaptopCode, FaBriefcase, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { GrDocumentUser } from "react-icons/gr";

const matthewData = [
    { Icon: FaGithub, label: 'Github', color: '#CE82FF', externalLink: 'http://github.com/mattgar417' },
    { Icon: FaLinkedin, label: 'LinkedIn', color: '#0077B5', externalLink: 'https://www.linkedin.com/in/mattgar417' },
    { Icon: FaPenNib, label: 'Substack', color: '#FF4B4B', externalLink: 'https://substack.com/@mattgar417' },
    { Icon: FaEnvelope, label: 'Email', color: '#58CC02', action: 'copyEmail' },
    { Icon: GrDocumentUser, label: 'Resume', color: '#1CB0F6', action: 'openResume' },
];

const matthewBanner = [
    {label: 'Home', path: '/mainpage'},
    { label: 'Experiences', path: '/experiences' },
    { label: 'Extracurriculars', path: '/extracurriculars' },
    { label: 'Projects', path: '/projects' },
];

export default function Matthew() {
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setShowCopiedMessage(false);
    }, []);

    const handleItemClick = (
  	path?: string,
  	externalLink?: string,
 	 action?: string
     ) => {
       if (action === 'copyEmail') {
    	navigator.clipboard.writeText('gmatthew022@gmail.com').then(() => {
      	 setShowCopiedMessage(true);
     	 setTimeout(() => setShowCopiedMessage(false), 2000);
         });
   } else if (action === 'openResume') {
      window.open('/Matthew Garcia Resume.pdf', '_blank');
   } else if (externalLink) {
      window.open(externalLink, '_blank');
   } else if (path) {
      router.push(path);
   }
};

    return (
        <div className="min-h-screen flex flex-col justify-end items-center gap-6 p-4 relative bg-[#1E1E1E] pr-8 overflow-hidden border-b border-gray-600 pb-4">
            {/* Banner at the Top */}
            <div className="flex justify-center space-x-8 mt-8 mb-8">
                {matthewBanner.map((item, index) => (
                    <div
                        key={index}
                        className="banner-item text-white bg-[#2B2B2B] px-4 py-2 rounded-full cursor-pointer hover:bg-[#3A3A3A]"
                        onClick={() => handleItemClick(item.path, undefined, undefined)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-x-8 space-y-8 md:space-y-0">
                {/* Left Column: Text Box */}
                <div className="text-box flex-1 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-white mb-4">Hello, I'm Matthew!</h1>
                    <p className="text-lg text-white">
                        I am a 4th year Electrical and Computer Engineering student at Northeastern University. At this moment, I'm currently on co-op at the SINRG Laboratory and working as a software developer at ZOE!. I'm passionate about machine learning, embedded software, and electrical design. My goal is to combine these interests in pursuit of a PhD, applying them to AI wearables in health. Feel free to explore my work in this website and connect with me through the links below.
                    </p>
                </div>

                {/* Right Column: Profile Picture */}
                <div className="profile-picture">
                    <Image
                        src="Matthew Garcia.png"
                        alt="Matthew's profile picture"
                        width={350}
                        height={500}
                        className="rounded-full"
                    />
                </div>
            </div>

            {/* Icons below the picture/text box */}
            <div className="flex justify-center flex-row flex-wrap gap-6 mt-8">
                {matthewData.map((item, index) => (
                    <div
                        key={index}
                        className="about-me-item"
                        style={{
                            borderBottom: `6px solid ${item.color}`,
                        }}
                        onClick={() => handleItemClick(undefined, item.externalLink, item.action)}
                    >
                        <div className="icon-wrapper" style={{ color: item.color }}>
                            <item.Icon />
                        </div>
                        <span className="item-label">{item.label}</span>
                    </div>
                ))}
            </div>

            {showCopiedMessage && (
                <div className="copied-message">
                    Email copied to clipboard!
                </div>
            )}

            <style jsx>{`
                .about-me-item {
                    background: #2B2B2B;
                    border-radius: 20px;
                    padding: 0.75rem 1.25rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.6rem;
                    cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    border-bottom-width: 6px;
                    white-space: nowrap;
                    height: 60px;
                }


                .about-me-item:hover {
                    transform: scale(1.1);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.3);
                }

                .icon-wrapper {
                    font-size: 2rem;
                    margin-bottom: 0.4rem;
                }

                .item-label {
                    font-size: 0.9rem;
                    font-weight: 700;
                    margin-top: 0.4rem;
                    color: #FFFFFF;
                }

                .profile-picture {
                    position: relative;
                    z-index: 2;
                }

                .copied-message {
                    position: fixed;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 5px;
                    z-index: 1000;
                }

                .banner-item {
                    font-size: 1.1rem;
                    font-weight: 600;
                    padding: 0.6rem 1.5rem;
                    text-align: center;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .banner-item:hover {
                    background-color: #3A3A3A;
                }

                @media (max-width: 768px) {
                    .text-box {
                        text-align: center;
                    }

                    .profile-picture {
                        margin-top: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .text-box {
                        font-size: 1.25rem;
                    }
                }
            `}</style>
        </div>
    );
}
