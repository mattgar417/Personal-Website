"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaExternalLinkAlt, FaGithub, FaLaptopCode, FaRobot } from 'react-icons/fa';
import ItemPage from '../components/ItemPage';
import '../styles/projects.module.css';

interface Projects{
    title: string;
    description?: string;
    technologies?: string[];
    githubLink?: string;
    Link?: string;
	icon?: any;
	image?: string;
	gradient: string;
}

export default function Projects() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleBackClick = () => {
        router.push('/mainpage');
    };

    const projects: Projects[] = [
        {
            title: "Personal Website",
            description: "Website containing my experiences and projects",
            technologies: ["TypeScript", "Next.js", "React"],
            githubLink: "https://github.com/mattgar417Personal-Website",
			image: "Personal-Website-Page.png",
			gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        },
        {
            title: "Machine Learning Compendium",
            description: "Document compiling information about machine learning and deep learning algorithms with associated code",
            technologies: ["Python", "Pytorch"],
            Link: "https://docs.google.com/document/d/1qpSZIiWX02kXmSOw8MFxGwPH_y2vtTG1jvBXJrj75J0/edit?usp=sharing",
			image: "NB-Confusion-Matrix.png",
			gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        },
        {
            title: "Research Paper Extraction Tool",
            description: "Tool to extract and analyze data from research papers",
            technologies: ["Python", "Pytorch", "HTML"],
            githubLink: "https://github.com/mattgar417/AI-Research-Tool",
			icon: FaRobot,
			gradient: "linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)",
        },
		{
            title: "The Curse of La Llorona",
            description: "Interactive board game based off of Mexican folklore",
            technologies: ["C++", "Arduino"],
            githubLink: "https://github.com/mattgar417/Curse-Of-LaLlorona",
			image: "Llorona-Card.png",
			gradient: "linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #800000 100%)",
        },
        {
            title: "Mecha Mayhem",
            description: "Educational and interactive game presented at the Boston’s Children Museum",
            technologies: ["C++ ", "Arduino", "Processing"],
            githubLink: "https://github.com/mattgar417/Mecha-Mayhem",
			image: "Mecha-Mayhem.png",
			gradient: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #333 100%)",
        },
        {
            title: "Sudoku Generator",
            description: "Generates and populates a solvable sudoku grid",
            technologies: ["Python"],
            githubLink: "https://github.com/mattgar417/Sudoku-Generator",
			image: "Generated-Sudoku-Grid.png",
			gradient: "linear-gradient(135deg, #001f3f 0%, #003366 50%, #0055a5 100%)",
        },
        {
            title: "Omnidirectional Super-Resolution Reconstruction Application",
            description: "Performs single image super-resolution on omnidirectional cameras, reconstructing images from low to high resolution",
            technologies: ["Python", "Pytorch"],
            githubLink: "https://github.com/mattgar417/Omnidirectional-Super-Resolution",
			image: "EDSR-Diagram.png",
			gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        },
        {
            title: "Electrocardiogram System",
            description: "An analog and digital system able to filter and analyze an ECG signal",
            technologies: ["Circuit Design", "Matlab"],
	    	Link: "https://docs.google.com/document/d/152AmXvRAE57zt7r68lldgBgvrbklMp7Xmk-hy2SVsYg/edit?usp=sharing",
			image: "EKG-Circuit.png",
			gradient: "linear-gradient(135deg, #004d00 0%, #006600 50%, #008000 100%)",
        },
        {
            title: "Smart City Resource Allocation",
            description: "An application able to allocate resources to various sectors of a digital smart city",
            technologies: ["C++"],
            githubLink: "https://github.com/mattgar417/Smart-City",
			icon: FaRobot,
			gradient: "linear-gradient(135deg, #1a1a00 0%, #333300 50%, #4d4d00 100%)",
        },
        {
            title: "RISC-V Architecture",
            description: "Simulates and tests the architecture of a RISC-V processor",
            technologies: ["SystemVerilog, ", "RISC-V"],
            githubLink: "https://github.com/mattgar417/RISCV-Architecture",
			image: "RISCV-Board.jpg",
			gradient: "linear-gradient(135deg, #1a001a 0%, #330033 50%, #4d004d 100%)",
        },
        {
            title: "Smart Glasses",
            description: "XR Glasses that interacts with speakers and microphones, connecting via Bluetooth to an app to access LLMs",
            technologies: ["C++", "Arduino", "Python", "Javascript", "Kotlin"],
            githubLink: "https://github.com/SINRG-Lab",
			image: "Smart-Glasses.png",
			gradient: "linear-gradient(135deg, #001a33 0%, #003366 50%, #2B70C9 100%)",
        },
        {
       	    title: "ZOR! - Seizure Monitoring App",
            description: "iOS application that visualizes seizure patterns and generates insights",
            technologies: ["Python", "Pytorch"],
            githubLink: "https://github.com/ZOR-app",
			image: "ZOR-Trends-Page.png",
			gradient: "linear-gradient(135deg, #1a0d00 0%, #4d2600 50%, #804000 100%)",
        },
    ];

    return (
        <div className={`projects-container ${isVisible ? 'visible' : ''}`}>
            <div className="playful-back-button" onClick={handleBackClick}>
                <FaChevronLeft />
            </div>
            <ItemPage Icon={FaLaptopCode} title="My Projects" color="#2B70C9">
                <div className="projects-grid">
                    {projects.map((project, index) => {
						const IconComponent = project.icon;
						return (
                        	<div key={index} className="project-card">
								<div className="card-banner" style={!project.image ? { background: project.gradient } : {}}>
                                	{project.image ? (
        								<Image
            								src={project.image}
            								alt={project.title}
            								fill
            								sizes="100vw"
            								className="card-image"
        								/>
    								) : (
        								<IconComponent className="card-icon" />
    								)}
                       			</div>

								<div className="card-content">
                            		<h3>{project.title}</h3>
                            		<p className="project-description">{project.description}</p>
                            		<div className="project-technologies">
                                		{project.technologies?.map((tech, techIndex) => (
                                    		<span key={techIndex} className="tech-tag">{tech}</span>
                                		))}
                            		</div>
								
                            		<div className="project-links">
                                		{project.githubLink && (
                                    		<a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        		<FaGithub /> GitHub
                                    		</a>
                                		)}
                                		{project.Link && (
                                    		<a href={project.Link} target="_blank" rel="noopener noreferrer">
                                        		<FaExternalLinkAlt /> Link
                                    		</a>
                                		)}
                            		</div>
                        		</div>
                			</div>
						);
					})}
				</div>
            </ItemPage>
			
            <style jsx>{`
                .projects-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }

                .projects-container.visible {
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

				.projects-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-top: 1rem;
                }

                .project-card {
                    background: #2B2B2B;
                    border-radius: 12px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    border: 1px solid #3a3a3a;
                }
                .project-card:hover {
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

				.tech-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.35rem;
                    margin-top: 0.25rem;
                }
                .tech-tag {
                    background: #3a3a3a;
                    color: #2B70C9;
                    font-size: 0.7rem;
                    padding: 2px 8px;
                    border-radius: 999px;
                    border: 1px solid #2B70C9;
                    font-weight: 500;
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
                .github-link {
                    background: #ffffff;
                    color: #1a1a1a;
                }
                .ext-link {
                    background: #2B70C9;
                    color: #ffffff;
                }

                @media (max-width: 768px) {
                    .projects-container {
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
                    .projects-container {
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
