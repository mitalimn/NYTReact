// Include React
var React = require("react");

var Save = React.createClass({
    getInitialState: function(){
        return {
            something : 123
        };
    },

    render: function(){
        return        (
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Saved Articles</h3>
              </div>
              <div className="panel-body">
                  Article title goes here 
                    <button class="btn btn-default pull-right">Remove</button>
                    <div class="clearfix"></div>
              </div>
            </div>
        );
    }
});

module.exports = Save;