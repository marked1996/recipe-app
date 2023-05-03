import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const apiKey = import.meta.env.VITE_API_KEY;
  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
    console.log(details);
  }, [params.name]);

  return (
    <section className="mt-16 mb-12 flex">
      <h2 className="mb-8"></h2>
    </section>
  );
}

export default Recipe;
