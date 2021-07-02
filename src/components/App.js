import React, { useState, useEffect } from "react";
// Category Component
import Category from "./Category";
// Data component
import Data from "./Data";
// Food Component
import Food from "./Food";

//Creating a unique value with set
//Since we need to pass the unique value dynamically
const categoryFilter = ["all", ...new Set(Data.map((dt) => dt.category))];

const App = () => {
  // For Loading State
  const [isLoading, setLoading] = useState(true);
  // For storing the data in food
  const [food, setFood] = useState(Data);
  // Storing the unique value in category
  const [category, setCategory] = useState(categoryFilter);

  //   Filtering Food
  const filteringFood = (categories) => {
    //   If the category == all then pass the set food as data
    if (categories === "all") {
      setFood(Data);
      return;
    }
    // Else data.category === categories which is the unique value
    const filterFood = Data.filter((data) => data.category === categories);
    // And storing the value
    setFood(filterFood);
  };

  //   If Error it shows the erro
  const errorHandles = () => {
    setLoading(true);
    try {
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //   Passing parameter empty so that it stop the infinity loop
  useEffect(() => {
    errorHandles();
  }, []);

  //   Loading Case
  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  //   JSX
  return (
    <main className="container">
      <div className="food__Headers">
        <h1>Our Menu</h1>
        <div className="underLine"></div>
      </div>
      <section className="component__Container">
        {/* Two components */}
        {/* Passing the value of props in the category component */}
        <Category unique={category} filtersFood={filteringFood} />
        {/* Mapping and passing the value in the food */}
        {/* Using spread operator to get the all value of the object */}
        {food.map((fd) => {
          return <Food key={fd.id} {...fd} />;
        })}
      </section>
    </main>
  );
};

export default App;
