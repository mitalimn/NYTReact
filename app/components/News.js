// Include React
var React = require("react");

var News = React.createClass({
    // getInitialState: function(){
    //     //return

    // },
// handleClick: function(){

// },

render: function(){
    return(
          <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>New York Times Article Scrubber</h2>
            <p><em>FInd news article bassed on the search term !</em></p>
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
              </div>
              <div className="panel-body text-center">
                {/* Displaying this component's clicks */}
                <h1></h1>
                {/*
                  Here we'll deploy the Child component. We'll pass it the setParent function
                  defined above for setting this component's state
                */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

})

// Export the component back for use in other files
module.exports = News;