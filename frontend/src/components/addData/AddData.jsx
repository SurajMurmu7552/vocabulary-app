//hooks
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";

//reudcer
import { setPopupText } from "../../redux/popupSlice";

//schema
import { ADD_DATA } from "../../schema/mutation";

//import css
import "./AddData.css";

export default function AddData({ handleToggle }) {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");

  //Mutation
  const [addData, { data, loading, error }] = useMutation(ADD_DATA);

  const handleAddWord = (e) => {
    e.preventDefault();
    if (word !== "") {
      //use mutation
      addData({
        variables: {
          addDataId: word,
        },
      });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    handleToggle();
  };

  if (data) {
    console.log(data);
    if (data.addData === null) {
      dispatch(setPopupText(`${word} already added or doesn't exists`));
    } else {
      dispatch(setPopupText(`${word} added to dictionary`));
    }

    handleToggle();
  }

  if (error) {
    dispatch(setPopupText("error occured try again"));
  }

  return (
    <form className="add-form">
      <h3 className="add-heading">Add to Dictionary</h3>
      <div className="add-input">
        <label htmlFor="add">New Word</label>
        <input
          type="text"
          name="add"
          id="add"
          onChange={(e) => setWord(e.target.value)}
        />
      </div>
      <div className="btn">
        <button type="submit" onClick={handleCancel}>
          CANCEL
        </button>
        <button
          type="submit"
          disabled={loading ? true : false}
          onClick={handleAddWord}
        >
          ADD
        </button>
      </div>
    </form>
  );
}
