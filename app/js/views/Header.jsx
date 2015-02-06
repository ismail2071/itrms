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
        
        <p className="hostname"><label>主機名稱：<u>my-computer</u></label></p>
        <p className="logo"><label>查核監控管理系統4</label></p>
        <button className="btn btn-default bell">
                <span className="glyphicon glyphicon-flag" aria-hidden="true" ><span className="badge">9</span></span>

        </button>


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