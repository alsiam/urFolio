import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
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
                  <h2>
                    Simone Guarnuccio <span>Frontend Developer</span>
                  </h2>

                  <p>I am Simone, an Enthusiastic Developer with experience building beautiful and user-friendly mobile applications using React Native at Creationdose, a Catania, Italy-based creator economy company.</p>
                  <p> I thrive on automating workflows and tackling the challenges of cross-platform development. I am a passionate learner, constantly seeking new advancements in this ever-evolving field.</p>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education and Training</h3>  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April 2022  </h6>
                          <h4 className="timeline-title">
                            Responsive Web Design Course
                          </h4>  <p className="timeline-text">
                            FreeCodeCamp.org
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2014-2019  </h6>
                          <h4 className="timeline-title">
                            Bachelor's Degree in Computer Science
                          </h4>  <p className="timeline-text">
                            University of Catania, Department of Computer Science (Italy)  <br/>
                            Final grade: 91/110
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> March 2018 - July 2018  </h6>
                          <h4 className="timeline-title">
                            Training Internship as Entertainment Industry Operator
                          </h4>  <p className="timeline-text">
                            Note International Accademy, Associazione meridies sc, Catania (Italy)  <br/>
                            - Assembly and disassembly of audio and lighting services  - Assistant to the audio director (studio and live sessions)  </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience padd-15">
                  <h3 className="title">Professional Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> July 2022 - Present
                          </h6>
                          <h4 className="timeline-title">Front-End Developer</h4>
                          <p className="timeline-text">
                          Creationdose, Catania, Italy <br/>
                          • Developement of company Design Systems 
                          • Maintenance of company website <br/>
                          • Maintenance of company website <br/>
                          • Maintenance of mobile applications (Vidoser)
                          </p>
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
    </main>
  );
};

export default About;
