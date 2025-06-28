"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { FaBullseye, FaCode, FaEnvelope, FaPenNib, FaGithub, FaLinkedin, FaLaptopCode, FaBriefcase, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { GrDocumentUser } from "react-icons/gr";

const matthewData = [
    { Icon: FaGithub, label: 'Github', color: '#CE82FF', externalLink: 'http://github.com/mattgar417' },
    { Icon: FaLinkedin, label: 'LinkedIn', color: '#FF4B4B', externalLink: 'https://www.linkedin.com/in/mattgar417' },
    { Icon: FaPenNib, label: 'Substack', color: '#FF4B4B', externalLink: 'https://substack.com/@mattgar417' },
    { Icon: FaEnvelope, label: 'Email', color: '#58CC02', action: 'copyEmail' },
    { Icon: GrDocumentUser, label: 'Resume', color: '#1CB0F6', action: 'openResume' },
    // Add more icons and links as needed
];

const matthewBanner = [
    {label: 'Home', path: '/mainpage'
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



        if (action === 'openResume') {
            window.open('/Matthew Garcia Resume.pdf', '_blank');
            return;
        }

        if (externalLink) {
            window.open(externalLink, '_blank');
            return;
        }

        if (path) {
            router.push(path);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-[#1E1E1E] overflow-hidden">
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
                        I'm an electrical and computer engineering student passionate about machine learning, embedded software, and electrical design. I enjoy working on exciting projects and love learning new technologies. Feel free to explore my work and connect with me through the links below.
                    </p>
                </div>

                {/* Right Column: Profile Picture */}
                <div className="profile-picture">
                    <Image
                        src="/Garcia_Matthew.png"
                        alt="Matthew's profile picture"
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                </div>
            </div>

            {/* Icons below the picture/text box */}
            <div className="flex justify-center mt-8 space-x-6">
                {matthewData.map((item, index) => (
                    <div
                        key={index}
                        className="about-me-item"
                        style={{
                            borderBottom: `6px solid ${item.color}`,
                        }}
                        onClick={() => handleItemClick(item.path, item.externalLink, item.action)}
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
                    width: 100px;
                    height: 100px;
                    background: #2B2B2B;
                    border-radius: 20px;
                    padding: 0.8rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
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
