
import ReactDOM from "react-dom";
import React from "react";
import SSRPage from "./SSRPage";

ReactDOM.hydrate(
    <SSRPage />,
    document.getElementById("app")
);