import React, { useState } from "react";
// import Mapinng from "./Mapinng";
import Data from "./Data";

export default function Home() {
  const [count, setcount] = useState(0);

  const [arr, setarr] = useState([]);
  const text = () => {
    setarr(Data.slice(0, count));
  };

  return (
    <div className="h-screen w-[100%]   bg-blue-200">
      <div className=" text-6xl font-semibold text-center p-5">
        <h1>LOREM PARAGRAPH GENRATOR</h1>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="h-[100px] w-[90%] flex justify-center gap-5 items-center bg-slate-500">
          <input
            value={count}
            min={0}
            max={30}
            className="h-[60px] w-[270px] text-2xl pl-5"
            type="number"
            onChange={(e)=>setcount(parseInt(e.target.value))}
          />
          <button onClick={text} className="transition-allll h-[55px] w-[200px] text-4xl text-[white] group:  bg-[#4bee4b] hover:opacity-[0.7] hover:translate-y-2 ">
            Genrator
          </button>
        </div>

      <div className="h-[auto] w-[90%] bg-[silver] mt-2  ">
        {arr.map((ele) => {
          return <p className="text-[25px] font-mono text-[black]"> {ele}</p>;
        })}
      </div>
      </div>

    </div>
  );
}
