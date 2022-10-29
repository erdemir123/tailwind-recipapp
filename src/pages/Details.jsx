import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../component/Nav";
import meal from "../images/meal2.svg";
const Details = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="overflow-hidden bg-slate-300">
      <Nav />
      <div>
        <div className="flex justify-around items-center py-5 bg-slate-200 text-slate-500">
          <div className="text-2xl font-bold">{state.label}</div>
          <img src={meal} alt="" className="w-40" />
        </div>
      </div>
      <div className="bg-slate-300 py-5 font-bold text-center text-2xl text-slate-500">
        Calorie {Math.trunc(state.calories)}
      </div>
      <div className="flex justify-around bg-slate-500 py-12  items-center flex-col md:flex-row px-5">
        <div>
          {state.ingredientLines.map((item) => {
            return (
              <div className="font-bold text-slate-200 text-xl ">-{item}</div>
            );
          })}
        </div>
        <img src={state.image} alt="" className="rounded-md shadow-lg shadow-gray-200 w-[300px] h-[300px] " />
      </div>
    </div>
  );
};

export default Details;
