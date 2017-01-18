"use strict";

function Stack(){
this.myStack = new Array();
var that = this;
that.empty = function(){
  if (that.myStack.length === 0) {
    return true
    }else {
    return false
  }
  }
  that.peek = function(){
    var len = that.myStack.length;
    if (len !==0) {
      return that.myStack[0]
    }else {
      return null
    }
  }
that.push = function(data){
  that.myStack.push(data)
  return data;
  };
that.pop = function(){
 return that.myStack.pop()

}

}



module.exports = Stack;
