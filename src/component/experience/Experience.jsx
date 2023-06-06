import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>marketing skill, entrepreneurial skills and UX design</h5>
      <h2>have been working with santa lucia for the pass 1 year.</h2>
      <h2>i am have part of the actions of the company "la boiderie"</h2>
      <h2>i am a member of Renewed Mind Leaders (RNL)</h2>
      <div className="container experience__container">
        <ListExperiences />
      </div>
    </section>
  );
};
export default Experience;
