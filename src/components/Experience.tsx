import React from 'react';

interface ExperienceItemProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description?: string;
  technologies?: string[];
  websiteUrl?: string;
}

const experienceData: ExperienceItemProps[] = [
  {
    company: "San Jose State University",
    position: "Undergraduate Researcher",
    startDate: "September 2024",
    endDate: "May 2025",
    description: "",
    technologies: ["Python", "PyTorch", "CAD", "MPNN", "GNN", "Fusion 360"],
  },
  {
    company: "SJSU College of Engineering",
    position: "Software Engineer Intern",
    startDate: "September 2024",
    endDate: "January 2025",
    technologies: ["Python", "Discord.py", "LangChain", "Groq", "FastAPI"],
  },
  {
    company: "SJSU Software and Computer Engineering Society",
    position: "Software Engineer Intern",
    startDate: "May 2024",
    endDate: "August 2024",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mocha", "Chai"]
    },
  // Add more experiences here
];

const Experience: React.FC = () => {
  return (
    <div>
      <h2>Experience</h2>

      {experienceData.map((exp, index) => (
        <div key={index} style={{ marginBottom: '2rem', borderLeft: '2px solid #ccc', paddingLeft: '1rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '0.25rem' }}>
          {exp.company} • {exp.position}
            {exp.websiteUrl && (
              <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}>
                [<a href={exp.websiteUrl} target="_blank" rel="noopener noreferrer">Website</a>]
              </span>
            )}
          </h3>

          <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>
            {exp.startDate} – {exp.endDate || "Present"}
          </p>

          <p style={{ margin: '0.5rem 0' }}>{exp.description}</p>

          {exp.technologies && exp.technologies.length > 0 && (
            <div style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
              <span style={{ fontWeight: 'bold' }}>Technologies: </span>
              {exp.technologies.join(', ')}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;