import React from 'react';
import '../styles/Skills.css';

// Skill Component
const Skill = ({ icon, title }) => (
  <div className="skill">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
  </div>
);

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <Skill icon="💻" title="Front-end Development" />
        <Skill icon="📐" title="Prototyping & Wireframing" />
        <Skill icon="🎨" title="Design Tools: Figma, Adobe XD, Sketch, Canva" />
        <Skill icon="🔍" title="Working with Research Findings" />
        <Skill icon="🚀" title="Methodologies: Agile, Design Thinking, Lean UX" />
      </div>
    </section>
  );
};

export default Skills;
