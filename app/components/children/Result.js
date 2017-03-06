// Include React
var React = require("react");

var Result = React.createClass({
    getInitialState: function(){
        return {
            something : 123
        };
    },

    render: function(){
        return  (      
           <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Results</h3>
              </div>
              <div className="panel-body">
                  Article title goes here 
                    <button className="btn btn-default pull-right">Save</button>
                    
              </div>
            </div>
        );
    }
});

module.exports = Result;