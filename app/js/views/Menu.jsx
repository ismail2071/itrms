/**
 *
 */
var actions = require('../actions/AppActionCreator');
var ListItem = React.createFactory(require('./ListItem.jsx'));

/**
 * 
 */
var comp = React.createClass({



  /**
   * 
   */
  render: function() {



    // 當上面這段跑完時，arr[] 的內容會就是一包 <ListItem> 元件
    // 下面就可直接使用

    return (
      
      <div className="menu">
         <ul className="nav nav-pills nav-stacked">
          <li className="active"><a href="#">主機狀態</a></li>
          <li ><a href="#">監控設定</a></li>
          <li ><a href="#">註冊碼</a></li>
         </ul>
      </div>
    );
  
  },



});

module.exports = comp;