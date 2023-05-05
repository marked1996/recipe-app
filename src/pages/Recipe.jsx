import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const apiKey = import.meta.env.VITE_API_KEY;
  let params = useParams();
  const [details, setDetails] = useState({});

  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
    console.log(details);
  }, [params.name]);

  return (
    <section className="mt-16 mb-12 flex gap-24">
      <div>
        <h2 className=" text-[rgb(22,22,22)] font-medium text-4xl pb-12">
          {details.title}
        </h2>
        <img
          src={details.image}
          alt={details.title}
          className="shadow-lg rounded-3xl"
        />
      </div>
      <article className="flex-1">
        <div className="btn-container flex justify-center gap-16 pb-8">
          <button
            onClick={() => setActiveTab("instructions")}
            className={` ${
              activeTab === "instructions" ? "active-btn" : ""
            } rounded-2xl border-solid border-2 border-[#313131] py-3 px-10 hover:bg-[#313131] hover:text-white ease-in-out duration-300`}
          >
            Instructions
          </button>
          <button
            onClick={() => setActiveTab("ingredients")}
            className={` ${
              activeTab === "ingredients" ? "active-btn" : ""
            } rounded-2xl border-solid border-2 border-[#313131] py-3 px-10 hover:bg-[#313131] hover:text-white ease-in-out duration-300`}
          >
            Ingredients
          </button>
        </div>
        {activeTab === "instructions" && (
          <div className="flex flex-col gap-6">
            <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </article>
    </section>
  );
}

export default Recipe;
