import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <section className="grid gap-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cuisine.map((recipe) => {
        return (
          <article
            key={recipe.id}
            className="bg-cover rounded-xl md:rounded-2xl lg:rounded-3xl "
          >
            <div className="img-wrapper w-full h-auto object-cover rounded-xl md:rounded-2xl lg:rounded-3x overflow-hidden shadow-md">
              <img
                src={recipe.image}
                alt=""
                className="object-center object-cover w-full h-full scale-125"
              />
            </div>
            <h3 className="w-full text-[rgb(22,22,22)] text-center font-medium text-lg mt-4">
              {recipe.title}
            </h3>
            {/* <div
              id="gradient"
              className="top-0 left-0 absolute w-full h-full z-[3] bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent"
            ></div> */}
          </article>
        );
      })}
    </section>
  );
}

export default Cuisine;
