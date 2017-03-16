var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");


var Result = React.createClass({
    getInitialState: function(){
        return {
            arrayofArt : []
        };
    },

    handleSave: function(e){
        var articleId = e.target.value;
        var artObj;
        for(var i=0; i<this.state.arrayofArt.length;i++){
            if(this.state.arrayofArt[i].id == articleId){
                 artObj = this.state.arrayofArt[i];
            }           
        }

        var that= this;
        helpers.apiSave(artObj).then(function(){
            helpers.apiGet().then(function(query){
                that.props.resetdbRes(query.data);
            })
            
        }.bind(this))
},

    render: function(){
        var that= this;

        return  (      
           <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Results</h3>
              </div>
              <div className="panel-body">
                  Article title goes here 
                  <ul className="list-group col-md-8">
                     {this.props.apiResults.map(function(search, i){
                         that.state.arrayofArt.push({
                             id: search.id,
                             title: search.headline.main,
                             date: search.pub_date,
                             url: search.web_url
                         });

                         return(
                             <li key= "search.id" className="list-group-item">
                                  <div className="input-group">
                                        <div type="text" className="form-control">
                                            <a href="{search.web_url}" target="_new">{search.headline.main}</a>
                                            {search.pub_date}
                                        </div>
                                         <span className="input-group-btn">
                                        <button type="button" className="btn btn-default pull-right" onClick={that.handleSave}
                                        value={search.id}>Save</button>
                                        </span>
                                        </div>
                                        </li>
                         );
                     })}
                      </ul>                   
              </div>
            </div>
        );
    }
});

module.exports = Result;