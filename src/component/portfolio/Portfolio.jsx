import React from "react";
import "./portfolio.css";
import numb1 from "../../asset/numb1.jpg";
import numb2 from "../../assets/numb2.jpg";
import numb3 from "../../assets/numb3.jpg";
import numb4 from "../../assets/numb4.jpg";
import numb5 from "../../assets/num5.jpg";
import numb6 from "../../assets/numb6.jpg";
import ListPortfolio from "./listPortfolio";

export const Portfolio = () => {
  const portfolioContent = [
    {
      image : img1,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 1,
      title:'Project 1'
    },
    {
      image : img2,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 2,
      title:'Project 2'
    },
    {
      image : img3,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 4,
      title:'Project 4'
    },
    {
      image : img5,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 5,
      title:'Project 5'
    },
    {
      image : img6,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 6,
      title:'Project 6'
    },
      {
      image : img7,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 7,
      title:'Project 7'
    },
    {
      image : img8,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 8,
      title:'Project 8'
    },
    {
      image : img9,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 9,
      title:'Project 9'
    },
    {
      image : img1,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 10,
      title:'Project 10'
    },
  ]
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
<ListPortfolio/>  
      <div className="container portfolio__container">
      {
        portfolioContent.map((content, id) =>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={content.image} alt=" one" className="portImage" />
              </div>
              <h3> {content.title} </h3>
              <div className="portfolio__item__cta">
                <a
                  href={content.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={content.demo}
                  className="btn btn-primary"
                  target="blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        }
        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio;
