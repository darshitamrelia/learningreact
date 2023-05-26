import React, { useEffect, useState } from "react";

const url = `https://course-api.com/react-tabs-project`;

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchjobs = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    setJobs(newjobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchjobs();
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Loading....</h1>
      </section>
    );
  }
  const { title, dates, duties, company, id } = jobs[value];
  return (
    <section className="container">
      <h1 className="text-center text-primary">Expreierance</h1>
      <div className="underline"></div>
      <div className="jobs-container">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                className="btn btn-outline-success"
                key={item.id}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
      </div>

      <>
        <div key={id} className="col-6 col-md-3 mb-4 ">
          <h3 src={company} alt=""></h3>

          <h3>Post: {title}</h3>
          <p>{duties}</p>
        </div>
        <h2 className="btn btn-info">{dates}</h2>
      </>
    </section>
  );
}

export default App;
