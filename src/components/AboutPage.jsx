import React from 'react';

export function AboutPage() {
    const teamMembers = [
        {
            name: 'Cindy Susanto',
            role: 'UI/UX Designer',
            bgColor: '#FFE6E6',
            image: '/img/cindy.png'
        },
        {
            name: 'Nathaniel Sayasack',
            role: 'Developer',
            bgColor: '#F5E6D3',
            image: '/img/nathaniel.jpg'
        },
        {
            name: 'Maya Lukalapu',
            role: 'Project Manager',
            bgColor: '#FFE6E6',
            image: '/img/maya.png'
        },
        {
            name: 'Nandita Raman',
            role: 'Developer',
            bgColor: '#E6F0FF',
            image: '/img/nandita.jpg'
        },
        {
            name: 'Natalie Olson',
            role: 'Developer',
            bgColor: '#E6FFF9',
            image: '/img/natalie.jpg'
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
                                you with trusted options that fit your needs. Our goal is to make the search 
                                process simple, reliable, and stress-free, so you can focus on what truly 
                                matters—your studies and your student experience.
                            </p>
                        </div>

                        <div className="stats">
                            <div className="stat-item">
                                <h3>300+</h3>
                                <p>Curated Stays,</p>
                                <p>Tailored for You</p>
                            </div>
                            <div className="stat-item">
                                <h3>15+</h3>
                                <p>Personalized Services,</p>
                                <p>Just for You</p>
                            </div>
                        </div>
                    </div>

                    <div className="brand-right">
                        <img 
                            src="/img/ModernView.png" 
                            alt="Modern apartment view" 
                            className="apartment-image" 
                        />
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
                        focuses on this sustainable development goal in order to help college students 
                        at the University of Washington find affordable housing options within adequate 
                        commuting distance to school that fit their needs.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;