// Include React
var React = require("react");

var News = React.createClass({
    getInitialState: function(){
        //return
    },
handleClick: function(){

},

render: function(){
    return(
          <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>New York Times Article Scrubber</h2>
            <p><em>Children influence parent via callbacks given to them by the parent.</em></p>
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
              </div>
              <div className="panel-body text-center">
                {/* Displaying this component's clicks */}
                <h1>{this.state.clicks}</h1>
                {/*
                  Here we'll deploy the Child component. We'll pass it the setParent function
                  defined above for setting this component's state
                */}
                <Child setParent={this.setParent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

})

