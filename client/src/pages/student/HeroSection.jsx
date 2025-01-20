import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery, setSeachQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search/?query=${searchQuery}`);
    }
    setSeachQuery("")
  };

  return (
    <div className="w-full relative bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the Best Courses for You
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Discover, Learn, and Upskill with our wide range of courses
        </p>
      </div>
      <form
        onSubmit={searchHandler}
        className="flex item-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6"
      >
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSeachQuery(e.target.value)}
          placeholder="Search for courses..."
          className="flex-grow bg-white border-none focus-visible:ring-0 focus:outline-none px-6 py-6 text-gray-900 dark:text-gray-800 placeholder-gray-400 dark:placeholder-gray-500"
        />
        <button
          type="submit"
          className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 hover:dark:bg-blue-800"
        >
          Search
        </button>
      </form>

      <Button onClick={()=> navigate(`/course/search?query`)} className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200">
        Explore Courses
      </Button>
    </div>
  );
};

export default HeroSection;
