import React from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

//import icons
import { Close } from "@mui/icons-material";

//import css
import "./FullView.css";

import { GET_SINGLE_DATA } from "../../schema/query";
import { removeView } from "../../redux/viewSlice.js";

export default function FullView() {
  const history = useHistory();

  const dispatch = useDispatch();

  const viewText = useSelector((state) => state.viewText);

  const { loading, error, data } = useQuery(GET_SINGLE_DATA, {
    variables: {
      getSingleDataId: viewText.viewText,
    },
  });

  const handleClick = () => {
    dispatch(removeView());
    history.push("/");
  };

  if (loading) <div className="full-view">loading ...</div>;

  if (error) <div className="full-view">Error, load again...</div>;

  if (data) {
    if (data.getSingleData) {
      const results = data.getSingleData.results;

      return (
        <div className="full-view">
          <div className="full-view-nav">
            <div className="full-view-icon">
              <Close onClick={handleClick} />
            </div>
            <div className="full-view-heading">
              <h2>{results[0].id} </h2>
            </div>
          </div>

          <div className="results">
            {results.map((result) => (
              <div className="result">
                <div className="lexicalEntries">
                  {result.lexicalEntries.map((lexicalEntry) => (
                    <div className="lexicalEntry">
                      <div className="lexicalEntry-heading">
                        {lexicalEntry.lexicalCategory.text}
                      </div>
                      <div className="entries">
                        {lexicalEntry.entries.map((entry) => (
                          <div className="entry">
                            <div className="etymologies">
                              {entry.etymologies.map((e) => (
                                <p className="etymologies-text">{e}</p>
                              ))}
                            </div>
                            <div className="senses">
                              {entry.senses.map((sense) => (
                                <div className="sense">
                                  <div className="definitions">
                                    {sense.definitions.map((e) => (
                                      <p>{e}</p>
                                    ))}
                                  </div>
                                  <ul className="examples">
                                    {sense.examples.map((example) => (
                                      <li className="example">
                                        {example.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
  return <div className="full-view"></div>;
}
