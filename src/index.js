import React from "react";
import ReactDOM from "react-dom";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.esm.bundle.js";
import "swiper/dist/js/swiper.min.js";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
