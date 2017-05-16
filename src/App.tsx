import * as React from "react";
import {render} from "react-dom";
import Map from "./Map";
import "./style.css";

const App = () => (<Map />);

render(<App />, document.getElementById("root"));