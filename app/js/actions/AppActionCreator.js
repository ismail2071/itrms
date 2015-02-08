/**
 * 
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var Promise = require('es6-promise').Promise;

/**
 * 這是一個 singleton 物件
 */
var AppActionCreators = {

    /**
     * app 啟動後，第一次載入資料
     */
    load: function(){
		//        
    },

    /**
     * 
     */
    createTodo: function( item ) {

        // 1. 廣播給 store 知道去 optimistic 更新 view
        AppDispatcher.handleViewAction({

            // type 是為了方便將來所有 Store 內部判斷是否要處理這個 action
            actionType: AppConstants.TODO_CREATE,

            // 這裏是真正要傳出去的值
            item: item
        });

    },

    /**
     * 
     */
    selectTodo: function( item ) {

        AppDispatcher.handleViewAction({
            actionType: AppConstants.TODO_SELECT,
            item: item
        });
        
    },

    /**
     * 
     */
    removeTodo: function( item ) {

        AppDispatcher.handleViewAction({
            actionType: AppConstants.TODO_REMOVE,
            item: item
        });

    },

    /**
     * 
     */
    updateTodo: function( item, newVal ) {

        AppDispatcher.handleViewAction({
            actionType: AppConstants.TODO_UPDATE,
            item: item, 
            newVal: newVal
        });

    },

    /**
     * 
     */
    doSearch: function( val ) {

        AppDispatcher.handleViewAction({
            actionType: AppConstants.TODO_FILTER,
            val: val
        });

    },


    showHostStatus: function( menu ) {

        //if (menu.type == 'hostStatus')
        //var hostStatus = this.socketConnect();
        //console.log(hostStatus);
        var hostStatus = "test";

        AppDispatcher.handleViewAction({
            actionType: AppConstants.SHOW_HOST_STATUS,
            hostStatus: hostStatus
        });

    },


    socketConnect : function(){
      
      var socketResult='';

      var that=this;  
      /*save this class as that,because 'this' frequently changes when we change the scope by calling a new function (e.g client.on() ) , we can't access the original  
      value, alias to 'that' allows u can access the original value of object 'this' 

      var host='127.0.0.1';
      var port='8080';

      var client=new net.Socket();
      client.connect(port,host,function(){
        console.log('connected to:'+host+':'+port);     
        client.write("C");
      });

      client.on('data',function(data){
        console.log('DATA:'+data);
        console.dir(data);
        socketResult=data.toString();
        console.log(socketResult);

        
      });

      client.on('close',function(){
        console.log("close");
      });
    */

        socketResult="abc";
      return socketResult;

    },



    // dummy
    noop: function(){}
};

module.exports = AppActionCreators;
