import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <>
        <section className="about section" id="about">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>About Me</h2>
      </div>
    </div>
    <div className="row">
      <div className="about-content padd-15">
        <div className="row">
          <div className="about-text padd-15">
            <h2>I am Al Siam and <span>Web Designer</span></h2>
            <p>Hi! My name is Saif Al Siam. I am a Web Designer, and I am very passionate and dedicated to my
              work. With 1 years experience as a Web Designer, I have acquired the skills and
              knowledge necessary to make your project a success. I enjoy every step of the design process, from
              discussion and collaboration.</p>
          </div>
        </div>
        <div className="row">
          <div className="personal-info padd-15">
            <div className="row">
              <div className="info-item padd-15">
                <p>Age : <span>19</span></p>
              </div>
              <div className="info-item padd-15">
                <p>Website : <span>www.alsiam.com</span></p>
              </div>
              <div className="info-item padd-15">
                <p>Email : <span>alsiam.dev@gmail.com</span></p>
              </div>
              <div className="info-item padd-15">
                <p>Degree : <span>SSC</span></p>
              </div>
              <div className="info-item padd-15">
                <p>Phone : <span>+88 017********</span></p>
              </div>
              <div className="info-item padd-15">
                <p>City : <span>Dhaka, Bangladesh</span></p>
              </div>
              <div className="info-item padd-15">
                <p>Freelance : <span>Available</span></p>
              </div>
            </div>
            <div className="row">
              <div className="buttons padd-15">
                <a href="/assets/docs/resume.pdf" target="_target" className="btn">Download CV</a>
                <a href="#contact" data-section-index={0} className="btn hire-me">Hire
                  Me</a>
              </div>
            </div>
          </div>
          <div className="skills padd-15">
            <div className="row">
              <div className="skill-item padd-15">
                <h5>Html5</h5>
                <div className="progress">
                  <div className="progress-in" style={{width: '80%'}} />
                  <div className="skill-percent">80%</div>
                </div>
              </div>
              <div className="skill-item padd-15">
                <h5>Css3</h5>
                <div className="progress">
                  <div className="progress-in" style={{width: '60%'}} />
                  <div className="skill-percent">60%</div>
                </div>
              </div>
              <div className="skill-item padd-15">
                <h5>Javascript</h5>
                <div className="progress">
                  <div className="progress-in" style={{width: '50%'}} />
                  <div className="skill-percent">50%</div>
                </div>
              </div>
              <div className="skill-item padd-15">
                <h5>Bootstrap</h5>
                <div className="progress">
                  <div className="progress-in" style={{width: '70%'}} />
                  <div className="skill-percent">70%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="education padd-15">
            <h3 className="title">Education</h3>
            <div className="row">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  {/* Timeline Item */}
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h6 className="timeline-date">
                      <i className="fa fa-calendar" /> 2020 to Present
                    </h6>
                    <h4 className="timeline-title">Self Taught (Programming)</h4>
                    <p className="timeline-text">Since 2020 I started to learn Programming. I have learn Html, Css,
                      Sass, JavaScript, Bootstrap. Now I am a Professional Web Designer..</p>
                  </div>
                  {/* Timeline Item end */}
                  {/* Timeline Item */}
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h6 className="timeline-date">
                      <i className="fa fa-calendar" /> 2019 to Present
                    </h6>
                    <h4 className="timeline-title">Diploma in Civil Engineering</h4>
                    <p className="timeline-text">From 2019 I started my journey to be a Civil Engineer on Shyamoli
                      Ideal Polytechnic Institute. It still Running to Present.</p>
                  </div>
                  {/* Timeline Item end */}
                  {/* Timeline Item */}
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h6 className="timeline-date">
                      <i className="fa fa-calendar" /> 2014 to 2019
                    </h6>
                    <h4 className="timeline-title">Secondary School Certificate</h4>
                    <p className="timeline-text">In 2019 I passed SSC Exam from Science Group with GPA- 4.56. My
                      school name was Patgram Anath Bondhu Govt. High School.</p>
                  </div>
                  {/* Timeline Item end */}
                </div>
              </div>
            </div>
          </div>
          <div className="experience padd-15">
            <h3 className="title">Experience</h3>
            <div className="row">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  {/* Timeline Item */}
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h6 className="timeline-date">
                      <i className="fa fa-calendar" /> 2019 to Present
                    </h6>
                    <h4 className="timeline-title">Graphics Design</h4>
                    <p className="timeline-text">From 2018 I am woking on Graphics Design. The software I use
                      Photoshop, Illustrator for Graphics design.</p>
                  </div>
                  {/* Timeline Item end */}
                  {/* Timeline Item */}
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h6 className="timeline-date">
                      <i className="fa fa-calendar" /> 2020 to Present
                    </h6>
                    <h4 className="timeline-title">Web Design</h4>
                    <p className="timeline-text">Since 2020 I started to learn Coding. I have learn Html, Css, Sass,
                      JavaScript, Bootstrap. Now I am a Professional Web Designer..</p>
                  </div>
                  {/* Timeline Item end */}
                  {/* Timeline Item */}
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h6 className="timeline-date">
                      <i className="fa fa-calendar" /> 2020 to Present
                    </h6>
                    <h4 className="timeline-title">Wordpress</h4>
                    <p className="timeline-text">Since 2020 I started to learn Wordpress. I can install, Customize, &amp;
                      fix bug on wordpress. </p>
                  </div>
                  {/* Timeline Item end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default About;
