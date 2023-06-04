import React from 'react'
import './about.css'
// import me from '../../assets/salif1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              {/* <img src={me} alt="Salifu " /> */}
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>3 world widely</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>3 Completed</small>
              </article>
            </div>
            <p>
              I am a young software engineer under going training at the Faculty of
              Engineering and Technology(FET) of the University of Buea . Being on demand for experience, I applied to
              open source projects with  which all accepted me and gave me the chance to work on real
              business projects in order to gain experience. From Ocober 2022 to
              today, I've learned technologies such as react, JavaScript, TypeSrcipt, Java, C++ and version control like git and github.
              I am still learning and counting on the
              support of all the organizations and their amazing developers to increase my knowledge at end of being an
              engineer not only graduate, but also qualified.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About