import { useState } from "react";
import cactus from "../assets/cactus.png";
import cloud from "../assets/cloud.png";
import greenish from "../assets/greenish.png";
import hues from "../assets/hues.png";
import leafe from "../assets/leafe.png";
import proline from "../assets/proline.png";
import snowflake from "../assets/snowflake.png";
import vision from "../assets/vision.png";

function HomePage() {
  const [scrollActive, isScrollActive] = useState(null);
  const [optionActive, isOptionActive] = useState(null);
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
              <li className={optionActive === 0 ? "active" : ""} onClick={() => isOptionActive(0)}>
                <span className="hot">
                  <ion-icon name="arrow-redo"></ion-icon>
                </span>
                ui/ux design
              </li>
              <li className={optionActive === 1 ? "active" : ""} onClick={() => isOptionActive(1)}>
                <span className="hot">
                  <ion-icon name="arrow-redo"></ion-icon>
                </span>
                graphic design
              </li>
              <li className={optionActive === 2 ? "active" : ""} onClick={() => isOptionActive(2)}>
                <span className="hot">
                  <ion-icon name="arrow-redo"></ion-icon>
                </span>
                illustration
              </li>
              <li className={optionActive === 3 ? "active" : ""} onClick={() => isOptionActive(3)}>
                <span className="hot">
                  <ion-icon name="arrow-redo"></ion-icon>
                </span>
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
        <div className="reviews">
          <h1>What <i>Clients</i> are <span className="color">saying</span></h1>
          <div className="review-box">
            <h2>
              "Auspices agency team are just amazing. We have had some personal websites and dashboards. The team always delivered on time. The best quality with endless iterations. Good Job!"
            </h2>
            <h3>James Anderson</h3>
            <p>Fast Bowler, England</p>
          </div>
          <div className="review-nav">
            <button className={scrollActive === 0 ? "active" : ""} onClick={() => isScrollActive(0)}></button>
            <button className={scrollActive === 1 ? "active" : ""} onClick={() => isScrollActive(1)}></button>
            <button className={scrollActive === 2 ? "active" : ""} onClick={() => isScrollActive(2)}></button>
            <button className={scrollActive === 3 ? "active" : ""} onClick={() => isScrollActive(3)}></button>
            <button className={scrollActive === 4 ? "active" : ""} onClick={() => isScrollActive(4)}></button>
          </div>
        </div>
        <div className="sponsors-container">
          <ul className="sponsors">
            <li>
              <img src={snowflake} alt="snowflake" />
            </li>
            <li>
              <img src={hues} alt="hues" />
            </li>
            <li>
              <img src={cactus} alt="cactus" />
            </li>
            <li>
              <img src={vision} alt="vision" />
            </li>
            <li>
              <img src={greenish} alt="greenish" />
            </li>
            <li>
              <img src={cloud} alt="cloud" />
            </li>
            <li>
              <img src={proline} alt="proline" />
            </li>
            <li>
              <img src={leafe} alt="leafe" />
            </li>
          </ul>
        </div>
        <div className="cook">
          <h1>let's make <i>something</i> cool together</h1>
          <p>
            We are helping people to grow their businesses. We are providing the best designs and development services for your next dream project.
          </p>
          <button>Get In Touch</button>
        </div>
      </main>
      <footer>
        <div className="head">
          <section className="first">
            <h1><button></button><button className="logo"></button> Auspices</h1>
            <br />
            <h1>Follow Us</h1>
            <ul className="socials">
              <li><ion-icon name="logo-facebook"></ion-icon></li>
              <li><ion-icon name="logo-linkedin"></ion-icon></li>
              <li><ion-icon name="logo-twitter"></ion-icon></li>
              <li><ion-icon name="logo-instagram"></ion-icon></li>
            </ul>
          </section>
          <section className="second">
            <ul>
              <li className="bold">About</li>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Project</li>
            </ul>
            <ul>
              <li className="bold">Support</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Menu</li>
            </ul>
            <ul>
              <li className="bold">Join Community</li>
              <li>community@agency.com</li>
            </ul>
          </section>
        </div>
        <div className="tail">
          <p>&#169; Copyright 2024, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
