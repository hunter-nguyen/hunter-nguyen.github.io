import React from 'react';

const researchData = {
  publications: [
    {
      title: "AI-Supported Design Mistake Detection and Verification through Sequential Data Extraction in Technical Drawings",
      authors: "Hunter Nguyen, Yunjian Qiu",
      venue: "Submitted to International Mechanical Engineering Congress and Exposition (IMECE), 2025",
      link: "",
      description: "We utilize a pretrained message passing neural network (MPNN) to detect design mistakes in 3D CAD models. Using sequential design data, we develop a confidence-based approach to verify design specifications and classify potential errors."
    }
    // Add more publications here
  ]
};

const Research: React.FC = () => {
  return (
    <div>
      <h2>Research</h2>

      {researchData.publications.length > 0 && (
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Publications</h3>
          {researchData.publications.map((pub, index) => (
            <div key={index} style={{ marginBottom: '1rem', borderLeft: '2px solid #ccc', paddingLeft: '1rem' }}>
              <p style={{ margin: '0', fontWeight: 'bold' }}>
                {pub.title} <span style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>[
                  {pub.link ? (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">Paper</a>
                  ) : (
                    <span>Paper</span>
                  )}
                ]</span>
              </p>
              <p style={{ margin: '0.2rem 0', fontSize: '0.9rem', fontStyle: 'italic' }}>
                {pub.authors.includes("Hunter Nguyen")
                  ? pub.authors.split("Hunter Nguyen").map((part, i, arr) =>
                      i < arr.length - 1 ?
                        <React.Fragment key={i}>
                          {part}<strong>Hunter Nguyen</strong>
                        </React.Fragment> :
                        part
                    )
                  : pub.authors}
              </p>
              <p style={{ margin: '0.2rem 0', fontSize: '0.85rem' }}>{pub.venue}</p>
              {pub.description && (
                <p style={{ margin: '0.3rem 0 0', fontSize: '0.8rem', color: '#555' }}>
                  {pub.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Research;