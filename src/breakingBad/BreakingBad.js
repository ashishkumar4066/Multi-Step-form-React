import React, { useEffect, useState } from "react";
import axios from "axios";

import "./BreakingBad.css";
import Header from "./Ui/Header";
import CharacterGrid from "./characters/CharacterGrid";
import Search from "./Ui/Search";

const BreakingBad = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setLoading(false);
    };
    fetchItems();
  }, [query]);
  // Query is a dependency of useEffect which means whenever there is change in query useEffect will fire off
  // If the array is empty (i.e.- []) which mean useEffect will fire off only once
  return (
    <div className="background">
      <header className="breaking">
        <div className="container">
          <Header />
          <Search getQuery={(q) => setQuery(q)} />
          <CharacterGrid items={items} isLoading={isLoading} />
        </div>
      </header>
    </div>
  );
};

export default BreakingBad;
