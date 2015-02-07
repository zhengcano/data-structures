var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null){
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail.next.previous = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.addToHead = function(value){
    if (list.tail === null){
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.head.previous = Node(value);
      list.head.previous.next = list.head;
      list.head = list.head.previous;
    }
  };

  list.removeTail = function(){
    var temp = list.tail.value;
    if (this.tail.previous){
      list.tail = list.tail.previous;
      list.tail.next = null;
    }
    else if (list.head === list.tail){
      list.head = null;
      list.tail = null;
    }
    return temp;
  };

  list.removeHead = function(){
    var temp = list.head.value;
    if (this.head.next){
      list.head = list.head.next;
      list.head.previous = null;
    }
    else if (list.head === list.tail){
      list.head = null;
      list.tail = null;
    }
    return temp;
  };

  list.contains = function(target, node){
    var isThere = false;
    var node = node || list.head;
    if (node.value === target){
      isThere = true;
    } else {
      if (node.next !== null){
        if (list.contains(target, node.next)){
          isThere = true;
        }
      }
    }
    return isThere;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
