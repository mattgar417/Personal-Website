"use client";

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
            description: "Serve as the head of the Northeastern chapter of IEEE, overseeing a 10-person e-board and organizing hackathons, outreach events, workshops, and company visitations",
        },
        {
            title: "SHPE",
	position: "Treasurer",
            description: "Serve as the treasurer of Northeastern’s chapter of SHPE, planning the club’s annual budget, planning for convention, and handling reimbursements",
	liveLink: "https://shpe.sites.northeastern.edu"
        },
        {
            title: "AI Club",
	position: "Director of Education",
            description: "Lead the AI Club’s education division, overseeing the club’s forums and bootcamps.",
	liveLink: "https://aineu.org"
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
                        <div key={index} className="extracurricular-item">
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
