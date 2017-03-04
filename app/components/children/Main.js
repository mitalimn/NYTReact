// Include React
var React = require("react");

var Form = require('./children/Form.js');
var Result = require('./children/Result.js');
var Save = require('./children/Save.js');


var Main = React.createClass({
    getInitialState: function(){
        return {
          test: 123
        };

    },
// handleClick: function(){

// },

render: function(){
    return(
          <div className="container">
 
          <div className="page-header">
            <h2>New York Times Article Scrubber</h2>
            <p><em>FInd news article bassed on the search term !</em></p>
          </div>
             
  <Form />
  <Result />
  <Save />

        </div>
    );
}

});

// Export the component back for use in other files
module.exports = Main;