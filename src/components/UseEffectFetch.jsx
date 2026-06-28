import React, { useState, useEffect } from "react";

const UseEffectFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true)
          setError(null)
    
          try {
              const res = await fetch('http://localhost:8000/jobs')
              const data = await res.json();
              setData(data)
              console.log(data);
          } catch (error) {
              setError(error.message)
          }finally {
              setIsLoading(false)
          }
    
          
          return data;
    
      }
    
      fetchData();
      
  }, []);

  

  const handleReset = () => {
    setData([])
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-2xl w-72">
        {/* status */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">status</span>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              isLoading
                ? "bg-yellow-50 text-yellow-500"
                : error
                  ? "bg-red-50 text-red-500"
                  : "bg-green-50 text-green-500"
            }`}
          >
            {isLoading ? "Please wait" : error ? "❗" : "✔"}
          </span>
        </div>

        {/* نمایش داده */}
        <div className="min-h-24 bg-gray-50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
          {isLoading ? (
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-indigo-700 rounded-2xl animate-spin" />
              Loading data...
            </div>
          ) : error ? (
            <span className="text-red-400">{error}</span>
        ) : data.length === 0 ? (
            <span className="text-gray-400">Nope yet...</span>
          ) : (
            data.slice(0,1).map((job) => (
              <div key={job.id}>
                <h3>{job.title}</h3>
                <p>{job.location}</p>
                <p>{job.salary}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default UseEffectFetch;
