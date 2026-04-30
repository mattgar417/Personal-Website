"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaExternalLinkAlt, FaUsers } from 'react-icons/fa';
import ItemPage from '../components/ItemPage';
import '../styles/extracurriculars.module.css';

interface Extracurricular{
    title: string;
    position: string;
    description?: string;
    liveLink?: string;
	image?: string;
	gradient: string;
}

export default function Extracurriculars() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleBackClick = () => {
        router.push('/mainpage');
    };

    const extracurriculars: Extracurricular[] = [
        {
            title: "IEEE",
			position: "President",
            description: "Served as the head of the Northeastern chapter of IEEE, overseeing a 10-person e-board and organizing hackathons, outreach events, workshops, and company visitations",
			liveLink: "https://coe.northeastern.edu/orgs/ieee-institute-of-electrical-and-electronics-engineers-nu-student-chapter/",
			image: "IEEE-Logo.png",
			gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        },
        {
            title: "SHPE",
			position: "Treasurer",
            description: "Served as the treasurer of Northeastern’s chapter of SHPE, planning the club’s annual budget, planning for convention, and handling reimbursements",
			liveLink: "https://shpe.sites.northeastern.edu",
			image: "SHPE-Logo.png",
			gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        },
        {
            title: "AI NU",
			position: "Director of Education",
            description: "Served as the VP of Northeastern's AI club, planning hackathons, speaker events, bootcamps, and organizing projects",
			liveLink: "https://aineu.org",
			image: "AINU-Logo.png",
			gradient: "linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)",
        }
    ];

    return (
        <div className={`extracurricular-container ${isVisible ? 'visible' : ''}`}>
            <div className="playful-back-button" onClick={handleBackClick}>
                <FaChevronLeft />
            </div>
            <ItemPage Icon={FaUsers} title="My Extracurriculars" color="#2B70C9">
                <div className="extracurricular-grid">
                    {extracurriculars.map((extracurricular, index) => (
						<div key={index} className="extracurricular-card">
								<div className="card-banner" style={!extracurricular.image ? { background: extracurricular.gradient } : {}}>
                                	{extracurricular.image ? (
        								<Image
            								src={extracurricular.image}
            								alt={extracurricular.title}
            								fill
            								sizes="100vw"
            								className="card-image"
        								/>
    								) : null}
                       			</div>

							<div className="card-content">
                            	<h3>{extracurricular.title}</h3>
		     					<p className="extracurriculars-position">{extracurricular.position}</p>
                            	<p className="extracurriculars-description">{extracurricular.description}</p>
                            
								{extracurricular.liveLink && (
                               	<div className="extracurricular-links">
      								<a href={extracurricular.liveLink} target="_blank" rel="noopener noreferrer">
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
                .extracurricular-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }

                .extracurricular-container.visible {
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

				.extracurriculars-grid {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 1.5rem;
                    margin-top: 1rem;
                }

                .extracurricular-card {
                    background: #2B2B2B;
                    border-radius: 12px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    border: 1px solid #3a3a3a;
                }
                .extracurricular-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
                }

				.card-banner {
                    height: 260px;
					width: 260px;
					position: relative;
    				overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
				.card-image {
    				width: auto;
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
                    flex: 1;
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
                    .extracurricular-container {
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
                    .extracurricular-container {
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
