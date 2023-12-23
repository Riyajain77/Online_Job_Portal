/*import Navbar from "./components/Navbar"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Jobcard from "./components/Jobcard"
import { useEffect, useState } from "react"
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config"

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn","desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async(jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location) ,orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  useEffect(() => {
    fetchJobs()
  },[])


  return (      
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customSearch && 
        <div className="flex justify-end mb-2 pr-4">
          <button onClick={fetchJobs} className="bg-blue-500 px-4 py-2 rounded-md text-white">
            Clear Filters
          </button>
        </div>
      }

      {jobs.map((job)=> (
        <Jobcard key={job.id} {...job}/>
      ))}
    </div>
  )
}

export default App */


import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Jobcard from "./components/Jobcard";
import JobPostForm from "./components/JobPostForm";
import { useEffect, useState } from "react";
import { collection, query, orderBy, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(
      jobsRef,
      where("type", "==", jobCriteria.type),
      where("title", "==", jobCriteria.title),
      where("experience", "==", jobCriteria.experience),
      where("location", "==", jobCriteria.location),
      orderBy("postedOn", "desc")
    );
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleJobPost = async (jobDetails) => {
    try {
      // Add job to Firestore
      const docRef = await addDoc(collection(db, 'jobs'), jobDetails);
      console.log('Job posted successfully! Document ID:', docRef.id);

      // Fetch jobs again to update the list
      fetchJobs();
    } catch (error) {
      console.error('Error posting job:', error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customSearch && (
        <div className="flex justify-end mb-2 pr-4">
          <button onClick={fetchJobs} className="bg-blue-500 px-4 py-2 rounded-md text-white">
            Clear Filters
          </button>
        </div>
      )}

      {/* Add the JobPostForm component */}
      <JobPostForm onSubmit={handleJobPost} />

      {jobs.map((job) => (
        <Jobcard
          key={job.id}
          title={job.title} 
          company={job.company} 
          type={job.type} 
          experience={job.experience} 
          location={job.location} 
          skills={job.skills} 
          postedOn={job.postedOn}
          applyLink={job.jobLink} 
        />
      ))}

    </div>
  );
}

export default App;

