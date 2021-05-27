import React, { useState } from "react";

import "../BreakingBad.css";
const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onTextChange = (e) => {
    setText(e.target.value);
    getQuery(e.target.value);
  };
  return (
    <section className="search" style={{ marginTop: "20px" }}>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Character"
          value={text}
          onChange={(e) => onTextChange(e)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
