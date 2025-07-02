"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa';
import ItemPage from '../components/ItemPage';
import '../styles/experiences.css';

interface Experience {
    title: string;
    position: string;
    description?: string;
    liveLink?: string;
}

export default function Experiences() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleBackClick = () => {
        router.push('/matthew');
    };

    const experiences: Experience[] = [
        {
            title: "ZOR!",
	position: "Machine Learning Engineer",
            description: "Generating insights for ZOR!’s seizure monitoring app while developing AI pipeline for future prediction",
	liveLink: "https://zor.llc",
        },
        {
            title: "SINRG Laboratory",
	position: "AJC Merit Research Scholar",
            description: "Engineered embedded systems for XR/AI smart glasses using Arduino, integrating sensor inputs and microcontroller logic; and developed backend infrastructure for companion mobile application, facilitating acoustic data exchange between embedded software in smart glasses and LLMs/Speech-to-Text using Deepgram and Assembly AI in Python",
	liveLink: "https://sinrg.org",
        },
        {
            title: "National Energy Technology Laboratory",
	position: "Research Associate",
            description: "Characterized simulated acoustic signals using machine learning to develop early kick detection algorithm in offshore wells as part of the Mickey Leland Energy Fellowship Program",
	liveLink: "https://orise.orau.gov/mlef/default.html",
        },
        {
            title: "Mayflower Communications Company",
	position: "Software Engineering Co-op"
            description: "Developed C software for implementation of digital signal processing algorithms in order to find directions of arrival of meaconing spoofers and generate weights that can null them, allowing planes to use GPS without interference from spoofers, also implemented residual neural network (RNN) converted from Python to C to perform automatic modulation classification on signals being received from jammer for five different classes, achieving 88% accuracy rate",
	liveLink: "https://www.mayflowercom.com"
        },
        {
            title: "MENTIS Laboratory",
	position: "Undergraduate Researcher"
            description: "Awarded Peak Base Camp Award to implement deep learning algorithm using Pytorch that was able to perform single-image super resolution in order to bring low resolution images to higher resolutions with data from lab’s omnidirectional camera",
        }
    ];

    return (
        <div className={`experiences-container ${isVisible ? 'visible' : ''}`}>
            <div className="playful-back-button" onClick={handleBackClick}>
                <FaChevronLeft />
            </div>
            <ItemPage Icon={FaBriefcase} title="My Experiences" color="#2B70C9">
                <div className="experiences-grid">
                    {experiences.map((experience, index) => (
                        <div key={index} className="experience-item">
                            <h3>{experience.title}</h3>
                            <p className="experiences-description">{experience.description}</p>
	                <p className="experiences-position">{experience.position}</p>
                            {experience.liveLink && (
                               <div className="experience-links">
      			<a href={experience.liveLink} target="_blank" rel="noopener noreferrer">
        			   <FaExternalLinkAlt /> Live Link
      			</a>
    		     </div>
  		)}
                        </div>
                    ))}
                </div>
            </ItemPage>
            <style jsx>{`
                .experiences-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }

                .experiences-container.visible {
                    opacity: 1;
                }

                .playful-back-button {
                    position: fixed;
                    top: 20px;
                    left: 20px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #2B70C9;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 1000;
                }

                .playful-back-button:hover {
                    transform: scale(1.1);
                    box-shadow: 0 0 15px rgba(43, 112, 201, 0.5);
                }

                .playful-back-button :global(svg) {
                    color: white;
                    font-size: 24px;
                }

                @media (max-width: 768px) {
                    .experiences-container {
                        padding: 10px;
                    }

                    .playful-back-button {
                        width: 40px;
                        height: 40px;
                    }

                    .playful-back-button :global(svg) {
                        font-size: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .experiences-container {
                        padding: 5px;
                    }

                    .playful-back-button {
                        width: 30px;
                        height: 30px;
                    }

                    .playful-back-button :global(svg) {
                        font-size: 16px;
                    }
                }
            `}</style>
        </div>
    );
}
