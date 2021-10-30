import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { setView } from "../../redux/viewSlice";

//import css
import "./Card.css";

export default function Card({ ele }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setView(ele.results[0].word));
    history.push("/view");
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-heading">
        <h3>{ele.results[0].word} </h3>
      </div>

      <div className="card-content">
        {ele.results[0].lexicalEntries.map((entry) => (
          <p>
            [{entry.lexicalCategory.text}]{" "}
            {entry.entries[0].senses[0].definitions[0]}
          </p>
        ))}
      </div>
    </div>
  );
}
