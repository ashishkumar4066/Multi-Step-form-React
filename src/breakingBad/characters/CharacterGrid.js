import React from "react";

import spinner from "../img/spinner.gif";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={spinner} alt="" />
    </div>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem item={item} key={item.char_id} />
      ))}
    </section>
  );
};

export default CharacterGrid;
