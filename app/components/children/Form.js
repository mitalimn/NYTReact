// Include React
var React = require("react");

var Form = React.createClass({
    getInitialState: function(){
         return { topic: "" ,
            startyear : "",
            endyear: ""
        };
    },
      // This function will respond to the user input
  handleTopicChange: function(event) {

    this.setState({ topic: event.target.value });

  },

   handleStartYearChange: function(event) {

    this.setState({ topic: event.target.value });

  },

   handleEndYearChange: function(event) {

    this.setState({ topic: event.target.value });

  },


    // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setSearchFields(this.state.topic, this.state.startyear, this.state.endyear);
    this.setState({// topic: "" ,
      });
  },


    render: function(){
        return (
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
              </div>
              <div className="panel-body">
                  <form role="form" onSubmit={this.handleSubmit} >  
                    <div className="form-group">
                      <label for="topic">Enter Search Term</label>
                       <input type="text" className="form-control text-center"
                        id="topic" value={this.state.topic}  onChange={this.handleTopicChange}
                required />
                    </div>

                    <div className="form-group">
                      <label for="startyear">Start Year</label>
                       <input type="text" className="form-control" id="startyear" 
                       value={this.state.startyear}  onChange={this.handleStartYearChange}
                       required />
                    </div>

                    <div className="form-group">
                      <label for="endyear">End Year</label>
                       <input type="text" className="form-control" id="endyear"
                       value={this.state.endyear}  onChange={this.handleEndYearChange}
                required  />
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                  </form>                       
              </div>
            </div>
        );
    }
});
// Export the component back for use in other files
module.exports = Form;