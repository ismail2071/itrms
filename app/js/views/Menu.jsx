/**
 *
 */
var actions = require('../actions/AppActionCreator');

/**
 * 
 */
var comp = React.createClass({

  handleShow: function(){

          var menu = {};
          menu.type = 'hostStatus';
          actions.showHostStatus( menu );



  },

  /**
   * 
   */
  render: function() {



    // 當上面這段跑完時，arr[] 的內容會就是一包 <ListItem> 元件
    // 下面就可直接使用

    return (
      
       <menu className="menu">
      <div className="menu">
         <ul className="nav nav-pills nav-stacked">
          <li className="active"  ><a href="#" onClick={this.handleShow} >主機狀態</a></li>
          <li ><a href="#">監控設定</a></li>
          <li ><a href="#">註冊碼</a></li>
         </ul>
      </div>
      </menu>
    );
  
  },



});

module.exports = comp;