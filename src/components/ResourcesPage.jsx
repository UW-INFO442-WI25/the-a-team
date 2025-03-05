import React from 'react';

export function ResourcesPage() {
    return (
        <>
            <div className='resources-container'>
                <div className='resources-content'>
                    <h1>Resources</h1>
                    <h2>UN SDG 11: Sustainable Cities and Communities</h2>
                    <div className="sdg-image-container">
                        <img src="sdg11.jpg" alt="UN Sustainable Development Goal 11 logo" className="sdg-image" />
                    </div>
                    <p>The United Nations' eleventh goal, sustainable cities and communities, aims to make cities inclusive, safe, resilient, and sustainable. By 2030, they aim to ensure that everyone has access to sufficient, safe, and affordable housing and basic services.</p><br></br>

                    <p>SDG 11.1 focuses on ensuring access to safe, affordable housing for all, and our platform directly supports this goal by making student housing in Seattle's University District easier to find. We are committed to helping students secure reliable, budget-friendly accommodations that fit their needs, reducing housing insecurity and financial stress. By connecting students with trusted listings, we create a more inclusive and accessible living environment. Our mission aligns with SDG 11.1 by promoting sustainable urban living and ensuring that students have the resources and confidence to find a place they can truly call home.</p><br></br>

                    <h2>Affordable Housing Crisis</h2>
                    <p>As of 2022, over half of the eight billion people in our world live in urban areas. By 2050, it is estimated that 70 percent of the world population will live in cities. More and more people are moving to cities faster than these cities can develop housing, public transit, services, and infrastructure. Developers cannot build new housing fast enough to meet demands, and the competition for an already limited supply of affordable housing options drives up housing prices.</p><br></br>

                    <p>The affordable housing crisis affects many college students. Some students have to postpone their college plans or opt for either community college or a job instead of attending university. Others may either enroll part time, commute from home farther from campus, or work long hours in addition to their schooling <a href='https://www.aacu.org/liberaleducation/articles/the-campus-housing-crisis'>(Budd, 2024)</a>. Students of any income level are likely to struggle with the limited housing supply, and this especially affects low-income and marginalized students. Many students find it difficult to find housing options that fit their specific needs.</p><br></br>

                    <h2>Resources for Students</h2>
                    <p><a href="https://www.seattle.gov/utilities/your-services/accounts-and-payments">Seattle Public Utilities</a>: Information about utility services, account management, and payment options for Seattle residents.</p><br></br>
                    
                    <p><a href="https://www.seattle.gov/city-light/start-or-stop-service">Seattle City Light</a>: Start or stop electricity service to ensure your power is on when you move in.</p><br></br>
                    
                    <p><a href="https://depts.washington.edu/slsuw/">UW Student Legal Services</a>: Contact Student Legal Services for free legal advice on lease agreements, tenant rights, and landlord disputes.</p><br></br>

                    <h2>Moving Services on Campus</h2>
                    <p><a href="https://www.washington.edu/parents/move-in-and-out-resources/">UW Move-In and Move-Out Resources</a>: The University of Washington provides resources and information to help students with the moving process, including schedules, storage options, and transportation services.</p><br></br>

                    <h2>Educational Video: Sustainable Housing Solutions</h2>
                    <p>Watch this informative video about sustainable cities and affordable housing:</p>
                    <div className="video-container">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/xpJlgbh2lq4" 
                            title="YouTube video about sustainable cities and affordable housing" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    );
}