// JobPostForm.jsx

/*import React, { useState } from 'react';

const JobPostForm = ({ onSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobType, setJobType] = useState('');

  const handleSubmit = () => {
    onSubmit({
      title: jobTitle,
      company: company,
      type: jobType,
      // Add other form fields as needed
      postedOn: new Date(),
    });

    // Reset form fields
    setJobTitle('');
    setCompany('');
    setJobType('');

    // Close the form after submitting
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)} className='w-60 bg-blue-500 text-white font-bold py-3 rounded-md absolute top-5 right-10 p-4'>
        Post a Job
      </button>

      {showForm && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              className="w-full px-3 py-2 border rounded shadow appearance-none"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              className="w-full px-3 py-2 border rounded shadow appearance-none"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobType">
              Job Type
            </label>
            <input
              type="text"
              id="jobType"
              className="w-full px-3 py-2 border rounded shadow appearance-none"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            />
          </div>

          <button onClick={handleSubmit} className='w-full bg-blue-500 text-white font-bold py-3 rounded-md'>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default JobPostForm;*/


import { useState } from 'react';

function JobPostForm({ onSubmit }) {
  const [jobRole, setJobRole] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [applyLink, setApplyLink] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = () => {
    // Validate form data (add validation as needed)

    // Split skills into an array
    const skillsArray = skills.split(',').map((skill) => skill.trim());

    // Call the onSubmit prop with the job details
    onSubmit({
      jobRole,
      jobType,
      location,
      company,
      experience,
      skills: skillsArray,
      applyLink,
      postedOn: new Date(),
    });

    // Reset form fields
    setJobRole('');
    setJobType('');
    setLocation('');
    setCompany('');
    setExperience('');
    setSkills('');
    setApplyLink('');

    // Close the form
    setShowForm(false);
  };

  return (
    <div className="absolute top-5 right-5 p-4">
      <button onClick={() => setShowForm(true)} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>
        Post a Job
      </button>

      {showForm && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow max-w-md w-full overflow-y-auto max-h-full">
          <h2 className="text-2xl font-bold mb-4">Post a Job</h2>

          
          <div className="mb-4">
            <label htmlFor="jobRole" className="block text-gray-700">Job Role:</label>
            <input type="text" id="jobRole" value={jobRole} onChange={(e) => setJobRole(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          
          <div className="mb-4">
            <label htmlFor="jobType" className="block text-gray-700">Job Type:</label>
            <input type="text" id="jobType" value={jobType} onChange={(e) => setJobType(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700">Location:</label>
            <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          
          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700">Company:</label>
            <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          
          <div className="mb-4">
            <label htmlFor="experience" className="block text-gray-700">Experience:</label>
            <input type="text" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          
          <div className="mb-4">
            <label htmlFor="skills" className="block text-gray-700">Skills (comma-separated):</label>
            <textarea id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          
          <div className="mb-4">
            <label htmlFor="applyLink" className="block text-gray-700">Apply Link:</label>
            <input type="text" id="applyLink" value={applyLink} onChange={(e) => setApplyLink(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
          </div>

          
          <button onClick={handleSubmit} className='w-full bg-blue-500 text-white font-bold py-3 rounded-md'>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default JobPostForm;


