import React, { useEffect, useState } from "react";
import "./style.css";
import Api from "./Api";

const getLocalData = () => {
  const lists = localStorage.getItem("mylist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Findmeal = () => {
  const [searchVal, setSearchVal] = useState("");
  const [message, setMessage] = useState("");
  const [tempInfo, setTempInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isclick, setIsClick] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setSearchVal(message);
  };

  // getting data from API
  const fetching = async () => {
    setIsLoading(true); // Set loading to true while fetching
    try {
      if (!searchVal) {
        setTempInfo([]);
        setIsClick(true);
        setIsLoading(false); // Reset loading state
        return;
      }

      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`;

      let res = await fetch(url);
      let data = await res.json();

      if (data.meals === null || data.meals.length === 0) {
        setTempInfo([]);
        setIsClick(true);
      } else if (data.meals && data.meals.length > 0) {
        const meals = data.meals.map((curVal) => ({
          pic: curVal.strMealThumb,
          name: curVal.strMeal,
          recipee: curVal.strInstructions,
          category: curVal.strCategory,
          vid: curVal.strYoutube,
        }));
        setTempInfo(meals);
        setIsClick(true);
        localStorage.setItem("mylist", JSON.stringify(meals));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Reset loading state after fetch completion
    }
  };

  useEffect(() => {
    fetching();
    const storedData = getLocalData();
    setIsClick(false);
    console.log(storedData);
    if (storedData.length > 0) {
      setTempInfo(storedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVal]);

  return (
    <>
      <div className="main-div">
        <div className="heading">Find Meals For Your Ingredients</div>
        <div className="quote">
          Real food doesn't have ingredients, real food is ingredients. <br />
          <span className="author"> - Jame Oliver</span>
        </div>
        <div className="searching">
          <input
            type="text"
            className="searchbar"
            name="searchbar"
            placeholder="Enter an Ingredient"
            onChange={handleChange}
          ></input>
          <button
            className="searchbtn fa-solid fa-magnifying-glass"
            onClick={handleClick}
          ></button>
        </div>
        <h1 className="resulttag">Your Search Results:</h1>
        {isLoading ? (
          <p id="loading">Loading...</p>
        ) : isclick && tempInfo.length === 0 ? (
          <div className="notFound">
            <h1 className="error">Sorry, we didn't find any meal!</h1>
          </div>
        ) : (
          tempInfo.length > 0 && <Api mealData={tempInfo} />
        )}
      </div>
    </>
  );
};

export default Findmeal;
