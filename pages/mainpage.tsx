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
        <div className="min-h-screen flex flex-col relative bg-[#1E1E1E] overflow-hidden">
            {/* Banner at the Top */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-8 mt-8 mb-8 w-full border-b border-gray-600 pb-4 px-6 sm:px-12 md:px-32" style={{ paddingRight: '8rem', paddingLeft: '8rem' }}>
                {matthewBanner.map((item, index) => (
                    <div
                        key={index}
                        className="banner-item text-white bg-[#2B2B2B] px-4 py-2 rounded-full cursor-pointer hover:bg-[#3A3A3A] whitespace-nowrap"
                        onClick={() => handleItemClick(item.path, undefined, undefined)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>

            {/* Divider */} 
            <hr className="w-full border-t border-gray-600 mb-16" />

            {/* Main content */}
            <div className="px-6 sm:px-12 md:px-24 py-8 md:py-12 w-full max-w-4xl mx-auto box-border">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 md:mb-8">
                    Matthew Garcia
                </h1>

                <div className="text-white">
                    <div className="float-right ml-6 mb-4 rounded-full overflow-hidden border-[3px] border-[#3A3A3A] w-[clamp(120px,30vw,220px)] h-[clamp(120px,30vw,220px)]">
                        <Image
                            src="/Matthew Garcia.jpg"
                            alt="Matthew's profile picture"
                            width={220}
                            height={220}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    <p className="text-base sm:text-lg mb-6">
                        Hello! I'm a 4th year Electrical and Computer Engineering student at Northeastern University. At the
                        moment, I currently work at the ACT Lab under Professor Megan Hofmann, where my research focus
                        is on guiding stable diffusion for generating digital fabrication images. Previously, I worked
                        as a researcher at the SINRG Lab under Professor Mallesham Dasari, where I contributed to an
                        open-source platform for testing various AI modalities for smart glasses. In addition, I've also worked
                        as a software engineer for a seizure monitoring startup, ZOR!, where I led the creation of an insights
                        pipeline for users to track their seizure patterns and associated metrics.
                    </p>

                    <p className="text-base sm:text-lg clear-both md:clear-none">
                        My core research interests lie in machine learning, mobile systems, ubiquitous computing, and human-computer interaction.
                        My goal is to combine these interests, applying them to AI systems that are able to sense and reason within
                        the physical world, whether that be in the design of fabrics or embedded within smart glasses. Outside of work,
                        I enjoy reading, writing essays, and working on my own projects. Feel free to explore my work in this website and
                        connect with me through the links below!
                    </p>
                </div>
            </div>

            {/* Icons below the picture/text box */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-2 pb-10 md:pb-12 px-6 sm:px-12 md:px-24 w-full max-w-7xl mx-auto box-border">
                {matthewData.map((item, index) => (
                    <div
                        key={index}
                        className="about-me-item"
                        style={{ borderBottom: `6px solid ${item.color}` }}
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
                    gap: 0.9rem;
                    cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    white-space: nowrap;
                    height: 60px;
                }

                .about-me-item:hover {
                    transform: scale(1.05);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.3);
                }

                .icon-wrapper {
                    font-size: clamp(1.4rem, 2vw, 2rem);
                }

                .item-label {
                    font-size: clamp(0.8rem, 1.5vw, 0.9rem);
                    font-weight: 700;
                    color: #FFFFFF;
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
                    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
                    font-weight: 600;
                    padding: 0.6rem 1.5rem;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .banner-item:hover {
                    background-color: #3A3A3A;
                }
            `}</style>
        </div>
    );
}
