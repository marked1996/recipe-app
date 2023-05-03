import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/searched/" + input);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-1/3 flex items-center justify-center my-16 relative mx-auto"
    >
      <input
        onChange={handleChange}
        value={input}
        type="text"
        className="w-full text-white outline-none py-1 px-8 rounded-lg"
      />
      <FaSearch className="absolute left-1 top-0 text-white translate-y-1/2 scale-75" />
    </form>
  );
}

export default Search;
