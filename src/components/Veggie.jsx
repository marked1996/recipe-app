import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Veggie() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [veggieRecipes, setVeggieRecipes] = useState([]);

  useEffect(() => {
    getVeggies();
  }, []);

  const getVeggies = async () => {
    const checkStorage = localStorage.getItem("veggieRecipes");
    if (checkStorage) {
      setVeggieRecipes(JSON.parse(checkStorage)); //local storage is only for strings => we need (an array of) objects for the setPopularRecipes state
    } else {
      //fetch data
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8&tags=vegetarian`
      );
      const data = await api.json();
      setVeggieRecipes(data.recipes);

      //save into storage after fetching
      localStorage.setItem("veggieRecipes", JSON.stringify(data.recipes));
    }
  };

  return (
    <section id="popular" className=" overflow-hidden">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 mt-16">
        Our vegeterian picks
      </h2>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {veggieRecipes.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to={"/recipe/" + recipe.id}>
                <article className="bg-cover h-80 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden relative shadow-md">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="object-center object-cover h-full w-full"
                  />
                  <h3 className="w-full text-white text-center font-medium absolute bottom-2 md:bottom-3 lg:bottom-4 z-10">
                    {recipe.title}
                  </h3>
                  <div
                    id="gradient"
                    className="top-0 left-0 absolute w-full h-full z-[3] bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent"
                  ></div>
                </article>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}

export default Veggie;
