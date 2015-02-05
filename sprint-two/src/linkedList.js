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
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
