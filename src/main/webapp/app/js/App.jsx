import "../styles/main.scss";


import React from "react/addons";
import MicroEvent from "microevent";

import ProspektBox from "./components/prospect-box/prospectBox.react.jsx";

import GlobalStore from "./actions/GlobalStore.jsx";

MicroEvent.mixin(GlobalStore);
const store = new GlobalStore();

React.render(<ProspektBox st={store} />, document.getElementById("content"));
