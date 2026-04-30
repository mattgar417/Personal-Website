"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa';
import ItemPage from '../components/ItemPage';
import '../styles/experiences.module.css';

interface Experience {
    title: string;
    position: string;
    description?: string;
    liveLink?: string;
	image?: string;
	gradient: string;
}

export default function Experiences() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleBackClick = () => {
        router.push('/mainpage');
    };

    const experiences: Experience[] = [
        {
            title: "ZOR!",
			position: "Software Engineer",
            description: "Generating insights for ZOR!’s seizure monitoring app while developing AI pipeline for future prediction",
			liveLink: "https://zor.llc",
			image: "ZOR-Logo.png",
			gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        },
        {
            title: "SINRG Laboratory",
			position: "AJC Merit Research Scholar",
            description: "Developed embedded systems for XR/AI smart glasses and created a backend to stream sensor/audio data from Arduino to LLMs and STT services",
			liveLink: "https://sinrg.org",
			image: "SINRG-Logo.png",
			gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        },
        {
            title: "National Energy Technology Laboratory",
			position: "Research Associate",
            description: "Characterized simulated acoustic signals using machine learning to develop early kick detection algorithm in offshore wells as part of the Mickey Leland Energy Fellowship Program",
			image: "NETL-Logo.png",
			gradient: "linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)",
        },
        {
            title: "Mayflower Communications Company",
			position: "Software Engineering Co-op",
            description: "Programmed DSP algorithms in C to detect and neutralize GPS spoofers; ported a ResNet from Python to C for real-time signal classification",
			image: "Mayflower Logo.png",
			gradient: "linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #800000 100%)",
        },
    ];

    return (
        <div className={`experiences-container ${isVisible ? 'visible' : ''}`}>
            <div className="playful-back-button" onClick={handleBackClick}>
                <FaChevronLeft />
            </div>
            <ItemPage Icon={FaBriefcase} title="My Experiences" color="#2B70C9">
                <div className="experiences-grid">
                    {experiences.map((experience, index) => (
						<div key={index} className="experience-card">
								<div className="card-banner" style={!experience.image ? { background: experience.gradient } : {}}>
                                	{experience.image ? (
        								<Image
            								src={experience.image}
            								alt={experience.title}
            								fill
            								sizes="100vw"
            								className="card-image"
        								/>
    								) : null}
                       			</div>

							<div className="card-content">
                            	<h3>{experience.title}</h3>
		     					<p className="experiences-position">{experience.position}</p>
                            	<p className="experiences-description">{experience.description}</p>
                            
								{experience.liveLink && (
                               	<div className="experience-links">
      								<a href={experience.liveLink} target="_blank" rel="noopener noreferrer">
        			   					<FaExternalLinkAlt /> Link
      								</a>
    		     			  	</div>
  		     					)}
                			</div>
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
					margin-bottom: 1rem
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

				.experiences-grid {
                    display: grid;
    				grid-template-columns: repeat(2, 1fr);
    				gap: 1.5rem;
    				margin-top: 1rem;
                }

                .experience-card {
                    background: #2B2B2B;
                    border-radius: 12px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    border: 1px solid #3a3a3a;
                }
                .experience-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
                }

				.card-banner {
                    height: 260px;
					position: relative;
    				overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
				.card-image {
    				width: 100%;
    				height: auto;
    				display: block;
				}
                .card-icon {
                    font-size: 3rem;
                    color: rgba(255, 255, 255, 0.85);
                    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5));
                }

				.card-content {
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .card-title {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                }
                .card-description {
                    font-size: 0.8rem;
                    color: #aaaaaa;
                    margin: 0;
                    flex: 1;
                }

				.card-links {
                    display: flex;
                    gap: 0.5rem;
                    margin-top: 0.5rem;
                }
                .card-link {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    font-size: 0.78rem;
                    padding: 4px 12px;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: opacity 0.2s;
                }
                .card-link:hover { opacity: 0.8; }
                .ext-link {
                    background: #2B70C9;
                    color: #ffffff;
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
