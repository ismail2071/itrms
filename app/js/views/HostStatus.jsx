/**
 *
 */
var actions = require('../actions/AppActionCreator');


/**
 * 
 */
var comp = React.createClass({



  /**
   * 
   */
  render: function() {
    
    var hostStatus = this.props.truth.hostStatus;

    return (
      
      <div >
          <b>{hostStatus}</b>
      </div>
    );
  
  
  },


  //
  noop: function(){
      console.log( 'd: ', new Date(this.state.selectedItem.created) );
  }

});

module.exports = comp;