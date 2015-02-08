/**
 *
 */
var actions = require('../actions/AppActionCreator');

/**
 * 
 */
var Header = React.createClass({

  /**
   * 
   */
  render: function() {


    return (
      
      <header className="header">
        <div className="row">

          <div className="col-md-2">
            <p className="hostname"><label>主機名稱：<u>my-computer</u></label></p>
          </div>

          <div className="col-md-8">
            <p className="logo"><label>查核監控管理系統</label></p>
          </div>

          <div className="col-md-1">
            <button className="btn btn-default btn-lg bell" type="submit">
                <span className="glyphicon glyphicon-flag" aria-hidden="true" ><span className="badge">9</span></span>
            </button>
          </div>

          <div className="col-md-1">
            <p className="version">v0.0.1</p>
          </div>


        </div>

      </header>
    );
  
  },

  /**
   * 

        <input className="search-box right" 
               type="text" 
               placeholder="search here" 
               onChange={this.handleChange} />
   */
  handleChange: function(evt){
      var val = evt.target.value.trim();
      actions.doSearch(val);
  },

  //
  noop: function(){
  }

});

module.exports = Header;