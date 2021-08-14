import React from 'react';
import "./RecruiterTerms.css";
import termsForRecruiters from "./images/termsForRecruiters.png";
import SignUpHeader from './SignUpHeader';

function TermsForRecruiters() {
    return (
        <>
            <SignUpHeader />
            <section className="content_page" >
                <div className="content_page_wrapper" >
                    {/* <h1 className="watermark" > Clause 8 </h1> */}
                    <img className="content_page_image" src={termsForRecruiters} alt="" />
                    <div className="content_page_text" >
                        <br />
                        <br />
                        <div class="textHead">
                            <h1>Guidelines for Recruiters</h1>
                        </div>
                        <br />
                        <br />
                        <ul>
                            <li><h3>Important tips to help you hire Better.</h3></li>
                            <p>Hiring the right person is a difficult task. Hiring the incorrect person is costly, time-consuming, and damaging to your work environment. Hiring the appropriate person, on the other hand, will pay off in terms of employee productivity, a successful employment relationship, and a good influence on your whole work environment.</p>
                            <p>Hiring the appropriate person improves your work culture and pays for itself a thousand times over in terms of good staff morale, positive forward-thinking planning, and achieving difficult targets. It also guarantees that you are making the most of the time and energy that your existing workers put in developing a connection with the new employee, which is a costly and emotional process.</p>
                            <h4>Before hiring an employee, define the Job.</h4>
                            <p>A job analysis is the first step in hiring the ideal person. The job analysis allows you to gather information on a certain job's tasks, responsibilities, required skills, results, and work environment.
                                The information gleaned from the job analysis is critical in creating the job description for the new employee. The job description might help you design your recruitment strategy for hiring the appropriate person.
                            </p>
                            <h4>Plan Your Employee Recruiting Strategy</h4>
                            <p>Once you have the job description, convene a recruiting strategy meeting with the key workers who will be hiring the new employee. The recruiting manager is essential to the planning process. Your recruiting strategy is designed during this meeting, and the implementation begins. Teams that have regularly worked together to hire an employee may typically accomplish this stage through email.</p>
                            <h4>Use a Checklist for Hiring an Employee</h4>
                            <p>This checklist for hiring an employee can assist you in systematizing your hiring process. Whether it's your first employee or one of many, our employee hiring checklist will help you keep track of your recruitment efforts. The hiring employee checklist keeps your recruiting efforts on track and communicates progress to interested candidates and the hiring manager.</p>
                            <h4>Recruit the Right Candidates When Hiring an Employee</h4>
                            <p>You may build relationships with possible candidates long before you need them when hiring an employee. When you have a current post open, these suggestions will also assist you in recruiting a broad pool of people.
                                When it comes to recruiting an employee, the more suitable prospects you can cultivate, the more likely you are to find a qualified future employee. Continue reading to learn the best strategies to grow your skill pool when recruiting an employee.
                            </p>
                            <h4>Evaluate Credentials and Applications with Care</h4>
                            <p>A well-written job description is the foundation for assessing resumes, cover letters, job applications, and job application letters. As part of the recruitment strategy process, you created a bulleted list of the most desirable attributes of the most qualified prospect.
                                All applicants should be evaluated against this list of credentials, abilities, experience, and traits. When it comes to recruiting an employee, you'll want to spend your time with the most qualified individuals. And it's a good way to spend your time.
                            </p>
                            <h4>Prescreening </h4>
                            <p>The most significant reason to prescreen candidates before employing an employee is to save time for the interviewing and selection committee. While a candidate may appear to be a good fit on paper, a prescreening interview will reveal whether their qualifications are actually a match for your position.

                                Furthermore, during a prescreening interview, you may assess whether their wage expectations are in line with your job. A good phone interviewer will also gather information regarding whether or not the prospect will fit into your culture.
                            </p>
                            <h4>Ask the Right Job Interview Questions</h4>
                            <p>Hiring a new employee is influenced by the job interview. The job interview is the most important tool that companies use when hiring. The job interview questions you ask are essential in amplifying the power of the job interview and assisting you in hiring the ideal person.
                                When recruiting an employee, interview questions that assist you differentiate good applicants from ordinary candidates are critical. Employers care about job interview questions. Here are a few examples of job interview questions.
                            </p>
                            <h5>7 Factors to Consider</h5>
                            <p>•	Reference Checks</p>
                            <p>•	Culture Fit</p>
                            <p>•	Ability to Do the Job</p>
                            <p>•	Commitment to Growth</p>
                            <p>•	Leadership Potential</p>
                            <p>•	Strategic Value</p>
                            <p>•	Team Feedback</p>
                            <h3>Important Note </h3>
                            <li><p>Always evaluate the candidate with a brief task or interview. Don't hire just on the basis of an application.</p></li>
                            <li><p>When you choose a candidate, always extend a formal offer letter with important data (stipend, profile, duration, and so on) and request a signed copy as acceptance.</p></li>
                            <li><p>Change the selected candidate's application status to 'Hired' after that.</p></li>
                            <li><p>If you continue to have issues with any of the applicants, please contact <a href="mailto:employer@thesocialcomment.com.">employer@thesocialcomment.com.</a></p></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsForRecruiters
