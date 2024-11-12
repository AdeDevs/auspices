function HomePage() {
  return (
    <div className="home">
      <header>
        <h1>
          a <span className="creative"></span> creative{" "}
          <span className="color">ui/ux</span> designers studio{" "}
          <span className="studio">
            <button>
              <ion-icon name="play"></ion-icon>
            </button>
          </span>
        </h1>
        <section className="header-info">
          <div className="pub"></div>
          <div className="growth">
            <section className="work"></section>
            <section className="touch">
              <p>
                We are helping people to grow their business. We are providing
                the best designs and development service for your next dream
                project
              </p>
              <button>Get In Touch</button>
            </section>
          </div>
        </section>
      </header>
      <main>
        <div className="creating">
          <h1>
            <span className="color">creating</span> designs that solve{" "}
            <i>problems</i>
          </h1>
          <section className="creating-options">
            <div className="image-box"></div>
            <ul>
              <li>
                {" "}
                <span className="hot">
                  <ion-icon name="arrow-redo"></ion-icon>
                </span>{" "}
                ui/ux design
              </li>
              <li>
                {" "}
                <span className="hot">
                  <ion-icon name="arrow-redo"></ion-icon>
                </span>{" "}
                graphic design
              </li>
              <li>
                {" "}
                <span className="hot">
                  <ion-icon name="arrow-redo"></ion-icon>
                </span>{" "}
                illustration
              </li>
              <li>
                {" "}
                <span className="hot">
                  <ion-icon name="arrow-redo"></ion-icon>
                </span>{" "}
                logo & branding
              </li>
            </ul>
          </section>
        </div>
        <div className="base">
          <h1>
            ui/ux <span className="color">design agency</span> based in{" "}
            <i>usa</i>
          </h1>
          <div className="about-base">
            <div className="base-img"></div>
            <div className="base-info">
              <p>
                Located in the USA. We are professional creative design agency
                that has done many projects with various clients across the
                world.
                <br />
                <br />
                We are a team of creative people who are committed to giving the
                world a little touch of beauty with our designs. We love what we
                do and we do it with passion. We believe in using business to
                drive positive changes in the world & never setting for what
                worked in the past.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="numbers">
            <section>
              <h1>07+</h1>
              <p>Years Of Experience</p>
            </section>
            <section>
              <h1>50+</h1>
              <p>Projects Completed</p>
            </section>
            <section>
              <h1>4.8</h1>
              <p>Client Ratings</p>
            </section>
          </div>
          <div className="text">
            <p>
              We are helping people to grow their business. We are providing the
              best designs and development services for your next dream project.
            </p>
          </div>
        </div>
        <div className="projects">
          <h1>
            our <i>latest</i> clients <span className="color">projects</span>
          </h1>
          <div className="projects-box">
            <div className="project-card">
              <div className="project-img">
                <h3>see details</h3>
              </div>
              <p>Weather/Mobile/AppDesign</p>
              <h2>locus - a smart city and iot mobile application</h2>
            </div>
            <div className="project-card">
              <div className="project-img2">
                <h3>see details</h3>
              </div>
              <p>Portfolio/LandingPage/Website</p>
              <h2>ben kolde - personal Portfolio landing page</h2>
            </div>
            <div className="project-card">
              <div className="project-img3">
                <h3>see details</h3>
              </div>
              <p>Productivity/LandingPage/Website</p>
              <h2>saas - Productivity saas website</h2>
            </div>
            <div className="project-card">
              <div className="project-img4">
                <h3>see details</h3>
              </div>
              <p>SaaS/LandingPage/Website</p>
              <h2>mailchimp - email marketing website</h2>
            </div>
          </div>
          <button>View All Project</button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
