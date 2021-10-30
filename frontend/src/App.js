import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

//config
import client from "./config/apolloConnect";

//import css
import "./App.css";

//import components
import Dashboard from "./components/dashboard/Dashboard";
import FullView from "./components/fullView/FullView";
import Notification from "./components/notification/Notification";

//import hooks
import { useDispatch, useSelector } from "react-redux";

//import reducer
import { removePopupText } from "./redux/popupSlice";

function App() {
  const dispatch = useDispatch();

  //for desktop view
  const [width, setWidth] = useState(0);
  const app = useRef(null);

  const { popupText } = useSelector((state) => state.popupText);

  //2s timer for popup notification
  if (popupText.length > 0) {
    setTimeout(() => dispatch(removePopupText()), 2000);
  }

  useEffect(() => {
    setWidth(app.current.clientWidth);
  }, [app]);

  console.log(width);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App" ref={app}>
          {width < 768 ? (
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/view" component={FullView} />
            </Switch>
          ) : (
            <div className="App-web">
              <Dashboard />
              <Route path="/view" component={FullView} />
            </div>
          )}

          {popupText.length > 0 ? <Notification popupText={popupText} /> : null}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
