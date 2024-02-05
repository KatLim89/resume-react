function Experience() {
  return (
    <>
      <h3>Experience</h3>
      <div className="exp-header">Inari Technology Sdn Bhd</div>
      <p>Process Engineer</p>
      <ul>
        <li>Buy-off Automated Optical Inspection (AOI) machine for production use; including preparation of one-point lessons, work instructions and log records</li>
        <li>Set-up weighing station for production use; including documentation of weight specifications for all products</li>
        <li>Prepared work instruction documents for scrap management control</li>
        <li>Prepared and distributed weekly reports for production cycle time and Automated Visual Inspection (AVI) yield</li>
        <li>Coordinated inter-departmental Manufacturing Execution System (MES) projects</li>
      </ul>
      <div className="exp-header">Koon Hoe Enterprise Sdn Bhd</div>
      <p>General Clerk</p>
      <ul>
        <li>Prepared price quotations for customers</li>
        <li>Managed customers orders; including payment collection</li>
        <li>Recorded monthly sales and general accounts balancing</li>
        <li>Performed regular in-house stock checking</li>
      </ul>
      <div className="exp-header">Knowles Electronics (M) Sdn Bhd</div>
      <p>Intern</p>
      <ul>
        <li>Learnt Quality Assurance (QA) process work flow from receiving incoming raw material to manufacturing end product</li>
        <li>Gained hands-on knowledge in geometric dimension measurement of mechanical parts</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Katherine Lim</h1>
      <h2>Software Developer</h2>
      <Experience />
    </>
  )
}

export default App
