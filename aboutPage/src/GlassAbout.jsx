import React from 'react';
import "./GlassAbout.css";
import quote from "./images/quote.png";
import astronaut from "./images/astronaut.png";

function GlassAbout() {
    return (
        <section id="glass_about" >
            <div id="glass_about_wrapper" >
                <div id="glass_about_text" data-aos="fade-up">
                    <img src={quote} alt=""></img>
                    <div id="glass_about_desc">
                        <h1>Our Impact</h1>
                        <br />
                        <h3>Both landing on the moon and landing on a great career require a strong commitment and great efforts. As the spaceship is the most important tool for completing the moon ride, we may be one of the most important tools for completing your career ride.</h3>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div id="glass_about_goals" data-aos="fade-up">
                    <div id="goals_collage">
                        <div id="horizontal1">
                            <div id="institute">
                                <h1>50+ </h1>
                                <br />
                                <p>Institute's Students</p>
                            </div>
                            <div id="students">
                                <h1>15000+</h1>
                                <br />
                                <p>Students's Community</p>
                            </div>
                        </div>
                        <div id="horizontal2">
                            <div id="portfolio">
                                <h1>2500+</h1>
                                <br />
                                <p>Live Portfolios</p>
                            </div>
                            <div id="projects">
                                <h1>10000+</h1>
                                <br />
                                <p>Live Projects and Assignments</p>
                            </div>
                        </div>
                    </div>
                    <div id="collage_image">
                        <img src={astronaut} alt=""></img>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h3 data-aos="fade-up" id="technologies">We build technologies that help students connect with recruiters, develop professionalism, and help them to grow in career.</h3>
                <br />
                <br />
                <br />
                <div id="mission_links" data-aos="fade-up">
                    <div className="horizontal">
                        <div className="mission_links_individual one">
                            <h4>Our Mission</h4>
                            <div className="mission_links_desc">
                                <p>Make at least 10 million students meet their career goals through us by 2022 and help them to discover new and better career paths.</p>
                            </div>
                        </div>
                        <div className="mission_links_individual two">
                            <h4>Our Essence</h4>
                            <div className="mission_links_desc">
                                <p>Good ideas deserve to be found & should be presented with professionalism.</p>
                            </div>
                        </div>
                    </div>
                    <div className="horizontal">
                        <div className="mission_links_individual three">
                            <h4>Our Vision</h4>
                            <div className="mission_links_desc">
                                <p>Dilute the boundaries of education between the youth and providing them a one spot for all to scale up their career, to help students develop and create an impression on the innovations that are occurring globally.</p>
                            </div>
                        </div>
                        <div className="mission_links_individual four">
                            <h4>Our Vibe</h4>
                            <div className="mission_links_desc">
                                <p>Here we work hard with smart people and stand apart from the crowd.  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GlassAbout
