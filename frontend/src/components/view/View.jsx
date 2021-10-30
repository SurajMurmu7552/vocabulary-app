import { useEffect, useState } from "react";
//import component
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { GET_ALL_DATA } from "../../schema/query";
import Card from "../card/Card";

//import icons
import { Close } from "@mui/icons-material";

//import css
import "./View.css";

import AddData from "../addData/AddData";

export default function View() {
  const [toggle, setToggle] = useState(false);
  const { loading, error, data, refetch } = useQuery(GET_ALL_DATA);

  const { searchText } = useSelector((state) => state.searchText);

  const re = searchText.length > 0 ? `(${searchText})` : "()";
  const condition = new RegExp(re, "g");

  const handleToggle = () => {
    setToggle(!toggle);
    refetch();
  };

  if (loading) <div className="view">loading...</div>;

  if (error) <div className="view">Error,load again</div>;

  if (data) {
    return (
      <div className="view">
        <div className="add-icon" onClick={handleToggle}>
          <Close fontSize="large" />
        </div>
        {toggle ? (
          <div className="add-container">
            <AddData handleToggle={handleToggle} />
          </div>
        ) : null}
        <div className="view-heading">
          <p>Words lists</p>
        </div>
        <div className="view-list">
          {data.getAllData !== null
            ? data.getAllData
                .filter((ele) => condition.test(ele.results[0].id))
                .map((ele) => <Card ele={ele} key={ele.results[0].id} />)
            : null}
        </div>
      </div>
    );
  }
  return <div className="view"></div>;
}
