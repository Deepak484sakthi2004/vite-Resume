// src/components/DatabaseSchema.tsx

import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, ReactFlowProvider } from 'react-flow-renderer';

const DatabaseSchema: React.FC = () => {
  const nodes = [
    {
      id: 'candidates',
      data: {
        label: (
          <div style={{ textAlign: 'center' }}>
            <strong>Candidates</strong>
            <div style={{ fontSize: '12px' }}>
              applicantID: String<br />
              candidate_name: String<br />
              contact: String<br />
              email: String<br />
              location: String
            </div>
          </div>
        ),
      },
      position: { x: 100, y: 50 },
      style: { border: '2px solid #000', padding: '15px', borderRadius: '8px', background: '#f9f9f9', width: '200px' },
      draggable: true,
    },
    {
      id: 'education',
      data: {
        label: (
          <div style={{ textAlign: 'center' }}>
            <strong>Education</strong>
            <div style={{ fontSize: '12px' }}>
              institutionID: String<br />
              institution_name: String<br />
              city: String<br />
              country: String
            </div>
          </div>
        ),
      },
      position: { x: 350, y: 50 },
      style: { border: '2px solid #000', padding: '15px', borderRadius: '8px', background: '#f9f9f9', width: '200px' },
      draggable: true,
    },
    {
      id: 'candidateEducation',
      data: {
        label: (
          <div style={{ textAlign: 'center' }}>
            <strong>CandidateEducation</strong>
            <div style={{ fontSize: '12px' }}>
              candidateID: String<br />
              institutionID: String<br />
              discipline: String<br />
              type: String<br />
              start_time: Date<br />
              end_time: Date<br />
              grade: String
            </div>
          </div>
        ),
      },
      position: { x: 225, y: 300 },
      style: { border: '2px solid #000', padding: '15px', borderRadius: '8px', background: '#f9f9f9', width: '200px' },
      draggable: true,
    },
    {
      id: 'company',
      data: {
        label: (
          <div style={{ textAlign: 'center' }}>
            <strong>Company</strong>
            <div style={{ fontSize: '12px' }}>
              companyID: String<br />
              company_name: String<br />
              company_location: String
            </div>
          </div>
        ),
      },
      position: { x: -150, y: 50 },
      style: { border: '2px solid #000', padding: '15px', borderRadius: '8px', background: '#f9f9f9', width: '200px' },
      draggable: true,
    },
    {
      id: 'candidateWorkExperience',
      data: {
        label: (
          <div style={{ textAlign: 'center' }}>
            <strong>CandidateWorkExperience</strong>
            <div style={{ fontSize: '12px' }}>
              candidateID: String<br />
              companyID: String<br />
              start_time: Date<br />
              end_time: Date<br />
              role: String<br />
              contribution: String<br />
            </div>
          </div>
        ),
      },
      position: { x: -270, y: 295 }, // Adjusted vertical position
      style: { border: '2px solid #000', padding: '15px', borderRadius: '8px', background: '#f9f9f9', width: '200px' },
      draggable: true,
    },
    {
      id: 'candidateProjects',
      data: {
        label: (
          <div style={{ textAlign: 'center' }}>
            <strong>CandidateProjects</strong>
            <div style={{ fontSize: '12px' }}>
              candidateID: String<br />
              projectID: String<br />
              title: String<br />
              description: String
            </div>
          </div>
        ),
      },
      position: { x: -190, y: 550 }, // Adjusted vertical position
      style: { border: '2px solid #000', padding: '15px', borderRadius: '8px', background: '#f9f9f9', width: '200px' },
      draggable: true,
    },
    {
      id: 'candidateSkills',
      data: {
        label: (
          <div style={{ textAlign: 'center' }}>
            <strong>CandidateSkills</strong>
            <div style={{ fontSize: '12px' }}>
              candidateID: String<br />
              skill: String
            </div>
          </div>
        ),
      },
      position: { x: 120, y: 560 }, 
      style: { border: '2px solid #000', padding: '15px', borderRadius: '8px', background: '#f9f9f9', width: '200px' },
      draggable: true,
    },
  ];

  const edges = [
    { id: 'edge1', source: 'candidates', target: 'candidateEducation', animated: true },
    { id: 'edge2', source: 'education', target: 'candidateEducation', animated: true },
    { id: 'edge3', source: 'candidates', target: 'candidateWorkExperience', animated: true },
    { id: 'edge4', source: 'company', target: 'candidateWorkExperience', animated: true },
    { id: 'edge5', source: 'candidates', target: 'candidateProjects', animated: true },
    { id: 'edge6', source: 'candidates', target: 'candidateSkills', animated: true },
  ];

  return (
    <ReactFlowProvider>
      <div>
        {/* ER Diagram Visualization */}
        <h3>Entity-Relationship </h3>
        <div style={{ width: '100%', height: '600px' }}>
          <ReactFlow nodes={nodes} edges={edges} style={{ width: '100%', height: '100%' }}>
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </div>
      </div>
    </ReactFlowProvider>
  );
};

export default DatabaseSchema;
