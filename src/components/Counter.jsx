import React , { useEffect, useState } from "react";

const Counter = () => {
    const [temp , setTemp] = useState(0)

    const handleDecrease = (e) => {
        // e.preventDefault()
        setTemp(temp - 1)
    }
    const handleIncrease = (e) => {
        // e.preventDefault()
        setTemp(temp + 1)
    }    

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-3xl shadow-2xl w-64">
        {/* نمایش دما */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-7xl font-bold text-gray-800 tabular-nums">
            {temp}°
          </span>
          <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">
            Celsius
          </span>
        </div>

        {/* دکمه‌ها */}
        <div className="flex items-center gap-4">
          {/* Decrease */}
          <button
            onClick={handleDecrease}
            className="w-14 h-14 rounded-2xl bg-blue-50 hover:bg-blue-100 active:scale-95 text-blue-500 text-2xl font-bold transition-all duration-150 flex items-center justify-center"
          >
            −
          </button>

          {/* Increase */}
          <button
            onClick={handleIncrease}
            className="w-14 h-14 rounded-2xl bg-orange-50 hover:bg-orange-100 active:scale-95 text-orange-500 text-2xl font-bold transition-all duration-150 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
