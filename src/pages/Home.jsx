import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../component/Nav";
import himage from "../images/home.svg";
import load from "../images/loading.gif";

const Home = () => {
  const [meal, setMeal] = useState("");
  const [query, setQuery] = useState("Breakfast");
  const [food, setFood] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const APP_ID = "e0550b67";
  const APP_KEY = "b9fce4db63d154f4247d4d944c3fba8f";
  const url = `https://api.edamam.com/search?q=${meal}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${query}`;

  const getRecipe = async () => {
    setLoading(true);
    if (query) {
      const {
        data: { hits },
      } = await axios.get(url);
      setFood(hits);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    getRecipe();
    setFood("");
    setMeal("");
    setQuery("");
  };
  if (loading) {
    return <div className="w-full h-[100vh] bg-slate-100 flex justify-center items-center"><img src={load} alt="" className="w-96"/></div>;
  }
  else {
    return (
      <div className="bg-slate-500  shadow-2xl shadow-slate-800">
        <Nav />
        <div className="text-3xl font-bold text-center py-4 bg-slate-600 text-slate-400 ">
          Food App
        </div>
        <div className="flex items center justify-center bg-slate-400 py-6 gap-4">
          <input
            type="text"
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
            className="h-8 w-60 rounded-md indent-4 text-lg font-bold text-slate-600 "
          />
          <button
            onClick={(e) => handleSearch()}
            className="bg-slate-600 py-1 px-5 font-bold text-md text-slate-300 rounded-md active:scale-95 active:bg-slate-300 active:text-slate-600 duration"
          >
            Search
          </button>
          <select
            name="food"
            value="select"
            onChange={(e) => setQuery(e.target.value)}
            className="h-8 w-60 rounded-md indent-4 text-lg font-bold text-slate-600 "
          >
            <option value="Breakfast" className="font-bold text-slate-600">
              Breakfast
            </option>
            <option value="Lunch" className="font-bold text-slate-600">
              Lunch
            </option>
            <option value="Dinner" className="font-bold text-slate-600">
              Dinner
            </option>
            <option value="Snack" className="font-bold text-slate-600">
              Snack
            </option>
            <option value="TeaTime" className="font-bold text-slate-600">
              TeaTime
            </option>
          </select>
        </div>
        <div className="flex justify-center flex-wrap gap-5 mt-14">
          {food ? (
            food.map((item, index) => {
              const { recipe } = item;
              return (
                <div
                  className="bg-slate-700 px-10 py-10 flex justify-center flex-col items-center w-86 gap-4 shadow-xl shadow-slate-300 rounded-xl"
                  key={index}
                >
                  <p className="w-[340px] text-center font-semibold text-slate-200 ">
                    {recipe.label}
                  </p>
                  <img
                    src={recipe.image}
                    className="w-40 rounded-lg shadow-md shadow-slate-300"
                    alt=""
                  ></img>
                  <button
                    onClick={(e) => {
                      navigate("/details", { state: recipe });
                    }}
                    className=" bg-slate-800 text-slate-200 py-1 px-3 rounded-lg active:scale-95 mt-2 font-bold"
                  >
                    View More
                  </button>
                </div>
              );
            })
          ) : (
            <img src={himage} className="w-96 mt-32 mb-8" alt=""></img>
          )}
        </div>
      </div>
    );
  };
  }
  

export default Home;
