import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";

export function AboutPage() {
    const teamMembers = [
        {
            name: 'Cindy Susanto',
            role: 'UI/UX Designer',
            bgColor: '#FFE6E6',
            image: '/img/cindy.png',
            linkedin: 'https://www.linkedin.com/in/cindy-susanto/'
        },
        {
            name: 'Nathaniel Sayasack',
            role: 'Developer',
            bgColor: '#F5E6D3',
            image: '/img/nathaniel.jpg',
            linkedin: 'https://www.linkedin.com/in/nathaniel-sayasack-86488821a/'
        },
        {
            name: 'Maya Lukalapu',
            role: 'Project Manager',
            bgColor: '#FFE6E6',
            image: '/img/maya.png',
            linkedin: 'https://www.linkedin.com/in/mayalukalapu/'
        },
        {
            name: 'Nandita Raman',
            role: 'Developer',
            bgColor: '#E6F0FF',
            image: '/img/nandita.jpg',
            linkedin: 'https://www.linkedin.com/in/raman-nandita/'
        },
        {
            name: 'Natalie Olson',
            role: 'Developer',
            bgColor: '#E6FFF9',
            image: '/img/natalie.jpg',
            linkedin: 'https://www.linkedin.com/in/nataliegolson/'
        }
    ];

    return (
        <div className="about-page">
            <div className="about-content">
                <div className="brand-section">
                    <div className="brand-left">
                        <div className="brand-header">
                            <div className="brand-title">
                                <h2>Husky</h2>
                                <h2>Habitat</h2>
                            </div>
                            <img src="/img/huskyhabitatfavicon.png" alt="Husky Logo" className="husky-logo" />
                        </div>

                        <div className="who-we-are">
                            <h3>Who <span className="highlight">We Are</span></h3>
                            <p>
                                We are a dedicated platform designed to help students find the perfect
                                place to stay with ease and confidence. Whether you're looking for a cozy
                                apartment, a shared living space, or student-friendly housing, we connect
                                you with trusted options that fit your needs.
                            </p>
                        </div>
                    </div>

                   <div className="brand-right">
                        <img 
                            src="/img/ModernView.png" 
                            alt="Modern apartment view" 
                            className="apartment-img" 
                        />
                        <div className="stats">
                            <div className="stat-item">
                                <h3>80+</h3>
                                <p>Curated Stays,</p>
                                <p>Tailored for You</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="team-section">
                    <h2>Our Team</h2>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="team-member"
                                style={{ backgroundColor: member.bgColor }}
                            >
                                <div className="member-image">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        onError={(e) => {
                                            e.target.src = '/images/placeholder-profile.jpg';
                                        }}
                                    />
                                </div>
                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="linkedin-link"
                                            aria-label={`${member.name}'s LinkedIn profile`}
                                        >
                                            <AiFillLinkedin size={24} color="#0077B5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        The United Nations' eleventh goal, sustainable cities and communities,
                        aims to make cities inclusive, safe, resilient, and sustainable. Our project
                        helps college students at the University of Washington find affordable housing
                        within commuting distance to school that fits their needs.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
