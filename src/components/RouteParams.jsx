import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const RouteParams = () => {
  const [urlStatus, setUrlStatus] = useState(false);
  const [idStatus, setIdStatus] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  
  const getPath = () => {
    setUrlStatus((prev) => !prev);
    setIdStatus((prev) => !prev);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-3xl shadow-2xl">
        <div>url is : {urlStatus ? location.pathname : "Nothing"}</div>
        {idStatus ? <div>param is : {id}</div> : ""}
        <button
          onClick={getPath}
          className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold transition-all duration-150"
        >
          {urlStatus ? 'Clear' : 'Get'}
        </button>
      </div>
    </div>
  );
};

export default RouteParams;
