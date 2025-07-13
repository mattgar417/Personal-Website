"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaExternalLinkAlt, FaGithub, FaLaptopCode } from 'react-icons/fa';
import ItemPage from '../components/ItemPage';
import '../styles/projects.module.css';

interface Projects{
    title: string;
    description?: string;
    technologies?: string[];
    githubLink?: string;
    Link?: string;
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
            description: "My Portfolio Website",
            technologies: ["TypeScript, ", "Next.js, ", "React"],
            githubLink: "https://github.com/mattgar417Personal-Website",
            Link: "https://matthew.garcia",
        },
        {
            title: "Machine Learning Compendium",
            description: "Document compiling information about machine learning and deep learning algorithms with associated code",
            technologies: ["Python"],
            Link: "https://docs.google.com/document/d/1qpSZIiWX02kXmSOw8MFxGwPH_y2vtTG1jvBXJrj75J0/edit?usp=sharing",
        },
        {
            title: "Research Paper Extraction Tool",
            description: "Tool to extract and analyze data from research papers",
            technologies: ["Python, ", "HTML"],
            githubLink: "https://github.com/mattgar417/AI-Research-Tool",
        },
        {
            title: "Mecha Mayhem",
            description: "Educational and interactive game presented at the Boston’s Children Museum",
            technologies: ["C++, ", "Arduino, ", "Processing"],
            githubLink: "https://github.com/mattgar417/Mecha-Mayhem",
        },
        {
            title: "Sudoku Generator",
            description: "Generates and populates a solvable sudoku grid",
            technologies: ["Python"],
            githubLink: "https://github.com/mattgar417/Sudoku-Generator",
        },
        {
            title: "Omnidirectional Super-Resolution Reconstruction Application",
            description: "Performs single image super-resolution on omnidirectional cameras, reconstructing images from low to high resolution",
            technologies: ["Python, ", "Pytorch"],
            githubLink: "https://github.com/mattgar417/Omnidirectional-Super-Resolution",
        },
        {
            title: "Electrocardiogram System",
            description: "An analog and digital system able to filter and analyze an ECG system",
            technologies: ["Circuit Design, ", "Matlab"],
	    Link: "https://docs.google.com/document/d/152AmXvRAE57zt7r68lldgBgvrbklMp7Xmk-hy2SVsYg/edit?usp=sharing",
        },
        {
            title: "Smart City Resource Allocation",
            description: "Allocates resources to various sectors of a digital smart city",
            technologies: ["C++"],
            githubLink: "https://github.com/mattgar417/Smart-City",
        },
        {
            title: "RISC-V Architecture",
            description: "Simulates and tests the architecture of a RISC-V processor",
            technologies: ["SystemVerilog, ", "RISC-V"],
            githubLink: "https://github.com/mattgar417/RISCV-Architecture",
        },
        {
            title: "Smart Glasses",
            description: "XR Glasses that interacts with speakers and microphones, connecting via Bluetooth to an app to access LLMs",
            technologies: ["C++, ", "Arduino, ", "Python, ", "Javascript"],
            githubLink: "https://github.com/SINRG-Lab",
        },
        {
       	    title: "ZOR! - Seizure Monitoring App",
            description: "iOS application that visualizes seizure patterns and generates insights",
            technologies: ["Python, ", "Pytorch"],
            githubLink: "https://github.com/ZOR-app",
        },
    ];

    return (
        <div className={`projects-container ${isVisible ? 'visible' : ''}`}>
            <div className="playful-back-button" onClick={handleBackClick}>
                <FaChevronLeft />
            </div>
            <ItemPage Icon={FaLaptopCode} title="My Projects" color="#2B70C9">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-item">
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
                    ))}
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
