import { useState } from "react";

import Hero from "../components/Hero";
import PropertySearch from "../components/PropertySearch";
import Properties from "../components/Properties";
import Stats from "../components/Stats";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {

  const [searchInput, setSearchInput] =
    useState("");

  const [searchTerm, setSearchTerm] =
    useState("");

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  return (
    <>
      <Hero />

      <PropertySearch
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />

      <Properties
        searchTerm={searchTerm}
      />

      <Stats />

      <About />

      <Contact />
    </>
  );
}

export default Home;