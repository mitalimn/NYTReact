// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the News Component
var News = require("./components/News");

// This code here allows us to render our main component (in this case Form)
ReactDOM.render(<News />, document.getElementById("app"));
