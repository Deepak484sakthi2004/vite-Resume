import React from 'react';
import "../styles/App.css";
import DatabaseSchema from './DatabaseSchema';

const App: React.FC = () => {
  // Define the SQL queries
  const useDbQry = `
MariaDB [none]> use JobApplicants;
  `.trim();

    const countDbQry = `
  MariaDB [JobApplicants]> SELECT COUNT(*) as TotalCandidates FROM Candidates;
    `.trim();


  const findTables = 
`MariaDB [JobApplicants]> show tables;
     `.trim(); 

  const candidatesQuery = `
MariaDB [JobApplicants]> SELECT * FROM Candidates WHERE candidate_name = "DEEPAKSAKTHI VELLORE KUMAR";
  `.trim();

  const educationQuery = `
MariaDB [JobApplicants]>  SELECT 
                                e.institution_name AS InstitutionName,
                                e.city,
                                e.country,
                                ce.discipline,
                                ce.type,
                                DATE_FORMAT(ce.start_time, '%m/%Y') AS start,
                                DATE_FORMAT(ce.end_time, '%m/%Y') AS end,
                                ce.grade
                          FROM 
                                Candidates c
                          JOIN 
                                CandidateEducation ce ON c.applicantID = ce.candidateID
                          JOIN 
                                Education e ON ce.institutionID = e.institutionID
                          WHERE 
                                c.applicantID = 'Chin Tapak Dum Dum';
  `.trim();

  const workExperienceQuery = `
MariaDB [JobApplicants]>  SELECT 
                                cwe.role,
                                comp.company_name as company,      
                                CONCAT(DATE_FORMAT(cwe.start_time, '%m/%Y'), ' - ', 
                                IF(cwe.end_time IS NULL, 'Present', DATE_FORMAT(cwe.end_time, '%m/%Y'))) AS duration,
                                comp.company_location sa location
                          FROM 
                                Candidates c
                          JOIN 
                                CandidateWorkExperience cwe ON c.applicantID = cwe.candidateID
                          JOIN 
                                Company comp ON cwe.companyID = comp.companyID
                          WHERE 
                                c.applicantID = 'Chin Tapak Dum Dum';
  `.trim();

  const projectsQuery = `
MariaDB [JobApplicants]>  SELECT cp.title, cp.description AS url FROM CandidateProjects cp WHERE cp.candidateID = 'Chin Tapak Dum Dum';
  `.trim();

  const totalCandidatesData = [{ TotalCandidates: 987654321 }];
  const candidatesData = [
    { applicant_id: 'Chin Tapak Dum Dum', candidate_name: 'DEEPAKSAKTHI VELLORE KUMAR', contact: '+91 9787558677', email: 'deepak2004sakthi@gmail.com', location: 'Chennai, India' }
  ];
  const educationData = [
    { InstitutionName: 'sri chaitanya techno school', city: 'Bangalore', country: 'India', discipline: 'Math', type: 'High School', start: '07/2019', end: '05/2021', grade: '93.8%' },
    { InstitutionName: 'st josephs college of engineering', city: 'Chennai', country: 'India', discipline: 'Information Technology', type: 'Undergraduate', start: '10/2021', end: '04/2025', grade: '8.2 GPA' }
  ];
  const workExperienceData = [
    { JobTitle: 'SDE Intern', Company: 'SuperOps', Duration: '08/2024 - Present', Location: 'Chennai, India' },
    { JobTitle: 'Fullstack AI Developer Intern', Company: 'KoworkerAI', Duration: '04/2024 - Present', Location: 'Dubai, UAE' },
    { JobTitle: 'AI/ML Engineer Intern', Company: 'ToToys AI', Duration: '06/2024 - 08/2024', Location: 'Bangalore, India' },
    { JobTitle: 'Conversational Chatbot Developer Intern', Company: 'Bimbasree Private Limited', Duration: '06/2024 - 07/2024', Location: 'Chennai, India' },
    { JobTitle: 'Data Science Trainee', Company: 'Innomatics Research Labs', Duration: '02/2023 - 05/2023', Location: 'Hyderabad, India' },
    { JobTitle: 'Student Intern', Company: 'Edunet Foundations', Duration: '11/2022', Location: 'Bangalore, India' }
  ];
  const projectsData = [
    { title: 'Terminal Based Portfolio Website', description: 'A simple Command Line Based Personal Portfolio Website using react.', url: 'https://deepaksakthi-v-k-terminal-portfolio.vercel.app/' },
    { title: 'Fullstack Portfolio Website!', description: 'MVC Based Portfolio website along with my chat assistant for visitors to get know about me!.', url: 'https://portfolio-finale.web.app/' },
    { title: 'Audio/Video Summarizer', description: 'Developed a comprehensive audio extraction and transcription solution for videos/audios using Whisper and Gemini Pro.', url: 'https://github.com/Deepak484sakthi2004/audioSummaryApp' },
    { title: 'Character Level GPT Model', description: 'Implemented a Character-Level Generative Pre-trained Transformer (GPT) model from scratch, achieving a model size of approximately 0.212 million parameters.', url: 'https://github.com/Deepak484sakthi2004/Character_Level_GPT' },
    { title: 'RAG - Personal Chatbot', description: 'Responsible for contributing to the development and implementation of AI models, participating in research and development activities, and assisting in the creation of innovative Gen AI solutions.', url: 'https://lasttry-7irc.onrender.com' },
    { title: 'MLP - Implementation', description: 'Implemented character-level Multilayer Perceptrons (MLPs) inspired by the research paper by Bengio. The aim is to predict the next character or word in a given sequence.', url: 'https://github.com/Deepak484sakthi2004/neuralNetworks/tree/main/MLP_characterLevel_Bengio' }
  ];

  const tables = [
    { name: "Candidates" },
    { name: "Education" },
    { name: "Company" },
    { name: "CandidateWorkExperience" },
    { name: "CandidateEducation" },
    { name: "CandidatesProjects" },
    { name: "CandidatesSkills" },
  ];
  return (
    <div>
      <div id="header">
        <h2>Here’s my resume, just in case you need a little help navigating through your maze of profiles.</h2>
      </div>

      <h4>Use the appropriate Database!</h4>
      <pre>{useDbQry}</pre>
      <table>
        
        <tbody>
          <tr>  Database changed
          </tr>        
        </tbody>
      </table>

      {/* SQL Query for total candidates */}
      <h4>Its my checking number of candidates applied 🤯 </h4>
      <pre>{countDbQry}</pre>
      <table>
        <thead>
          <tr>
            <th>TotalCandidates</th>
          </tr>
        </thead>
        <tbody>
          {totalCandidatesData.map((row, index) => (
            <tr key={index}>
              <td>{row.TotalCandidates}</td>
            </tr>
          ))}
        </tbody>
      </table>


  
      <pre>{findTables}</pre>
      <table>
        <thead>
          <tr>
            <th>Tables_in_JobApplicants</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table, index) => (
            <tr key={index}>
              <td>{table.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <DatabaseSchema />

      {/* SQL Query for candidates */}
      <h2>Finding me in the pile:</h2>
      <pre>{candidatesQuery}</pre>
      <table>
        <thead>
          <tr>
            <th>applicantID</th>
            <th>candidate_name</th>
            <th>contact</th>
            <th>email</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>
          {candidatesData.map((row, index) => (
            <tr key={index}>
              <td>{row.applicant_id}</td>
              <td>{row.candidate_name}</td>
              <td>{row.contact}</td>
              <td>{row.email}</td>
              <td>{row.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* SQL Query for education */}
      <h2>Getting my Educational Background:</h2>
      <pre>{educationQuery}</pre>
      <table>
        <thead>
          <tr>
            <th>InstitutionName</th>
            <th>city</th>
            <th>country</th>
            <th>discipline</th>
            <th>type</th>
            <th>start</th>
            <th>end</th>
            <th>grade</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((row, index) => (
            <tr key={index}>
              <td>{row.InstitutionName}</td>
              <td>{row.city}</td>
              <td>{row.country}</td>
              <td>{row.discipline}</td>
              <td>{row.type}</td>
              <td>{row.start}</td>
              <td>{row.end}</td>
              <td>{row.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* SQL Query for work experience */}
      <h2>Fetching my Work Experience:</h2>
      <pre>{workExperienceQuery}</pre>
      <table>
        <thead>
          <tr>
            <th>role</th>
            <th>company</th>
            <th>duration</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>
          {workExperienceData.map((row, index) => (
            <tr key={index}>
              <td>{row.JobTitle}</td>
              <td>{row.Company}</td>
              <td>{row.Duration}</td>
              <td>{row.Location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* SQL Query for projects */}
      <h2>Some of My projects:</h2>
      <pre>{projectsQuery}</pre>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {projectsData.map((row, index) => (
            <tr key={index}>
              <td>{row.title}</td>
              <td>{row.description}</td>
              <td><a href={row.url} target="_blank" rel="noopener noreferrer">Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default App;
