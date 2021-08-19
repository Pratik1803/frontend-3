import React from 'react';
import "./Achievements.css";
import logos from "./images/logos.png";
import linkedin from "./images/linkedin.png";
import issuewire from "./images/issuewire.png";
import medium from "./images/medium.png";
import newsorchai from "./images/newsorchai.png";
import startupfyi from "./images/startupfyi.png";
import startupusa from "./images/startupusa.png";
import certificate from "./images/certificateOfNomination.png";
import grpPhoto from "./images/grp.png";
import innoprenuers from "./images/innoprenuers.png";

function Achievements() {
    return (
        <section id="achievements_section">
            <br />
            <br />
            <br />
            <h1 data-aos="fade-up">Our Achievements</h1>
            <br />
            <div id="achievements_wrapper">
                <br />
                <br />
                <h2 data-aos="fade-up">Nominations and Winnings</h2>
                <br />
                <div className="achievement first" data-aos="flip-left">
                    <div className="achievement_image">
                        <img src={grpPhoto} alt=""></img>
                    </div>
                    <div className="achievement_desc">
                        <br />
                        <ul><li><h4>Change-Makers Seed Grant 2021 Winner: thesocialcomment</h4></li></ul>
                        <br />
                        <p>We triumphed.</p>
                        <br />
                        <p>We are delighted to announce that we are the winners of the USA Change-Maker Seed Grant 2021 by @startup.xs. Out of 1232 applications from 75 different countries, thesocialcomment team from India has won the competition. From dreaming to living a dream! </p>
                    </div>
                </div>
                <br />
                <div className="achievement second" data-aos="flip-right">
                    <div className="achievement_image">
                        <img src={certificate} alt=""></img>
                    </div>
                    <div className="achievement_desc">
                        <ul><li><h4>Nominated by India 500 Startup awards as a most promising IT startup.</h4></li></ul>
                        <br />
                        <p>Our company was nominated as a most promising technology startup by India 500 Startup Awards for quality of excellence. Benchmark trust organized the event, which included Media partner CNBC Awaaz, Supporting partner Bombay stock exchange, and Knowledge partner TQV.</p>
                    </div>
                </div>
                <br />
                <div className="achievement third" data-aos="flip-left">
                    <div className="achievement_image">
                        <img src={innoprenuers} alt=""></img>
                    </div>
                    <div className="achievement_desc">
                        <ul><li><h4>Nailed under Asia top 500 startups by Innoprenuers.</h4></li></ul>
                        <br />
                        <p>We are one of the top 500 startups in the South Asia. On the occasion of its sixth edition, we were a part of India's most happening startup on contest in South Asia. We were recognized one of the top 500 startups in South Asia. Whereas main partners were German corporation discover dollar portescap and it was an initiative taken by lemon ideas.</p>
                    </div>
                </div>
                <br />
                <br />
                <h2 data-aos="fade-up">Recognized and Supported by </h2>
                <br />
                <div className="achievement fourth" data-aos="fade-up">
                    <div className="achievement_image">
                        <img src={logos} alt=""></img>
                    </div>
                    <div className="achievement_desc">
                        <br />
                        <h4>Aws Ed Tech Accelerator,  Startup India, DIPPT, istart Rajasthan</h4>
                        <br />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div id="press_release_links" data-aos="fade-up">
                    <h2>Press Release Links</h2>
                    <br />
                    <br />
                    <div id="press_links">
                        <a href="https://www.linkedin.com/pulse/platform-students-who-passionate-everything-gaurav-sharma/"><img src={linkedin} alt=""></img></a>
                        <a href="https://medium.com/@thesocialcomment"><img src={medium} alt=""></img></a>
                        <a href="https://newsaurchai.com/get-paid-do-your-homework-social-comment-founder/"><img src={newsorchai} alt=""></img></a>
                        <a href="https://startupxs.com/announcing-the-winner-of-the-startupxs-changemakers-seed-grant-opportunity-2021/"><img src={startupusa} alt=""></img></a>
                        <a href="https://www.issuewire.com/how-did-the-idea-pop-out-for-a-student-network-for-india-thesocialcommentcom-1708012417865878"><img src={issuewire} alt=""></img></a>
                        <a href="https://www.startupnews.fyi/post/how-did-the-idea-pop-out-for-a-student-network-for-india-thesocialcomment-com"><img src={startupfyi} alt=""></img></a>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </section>
    )
}

export default Achievements
