"use strict";function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:String(i)}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var LinkedList=_createClass((function LinkedList(){_classCallCheck(this,LinkedList);var _head=null,_tail=null,_size=0;var Node=_createClass((function Node(item){_classCallCheck(this,Node);this.value=item;this.next=null}));var privateMethods={isEmpty:function isEmpty(){if(_head==null&&_tail==null&&_size==0)return true;return false},filter:{range:function range(index,min,max,methodName){if(index<min||index>max){throw new RangeError("The index is out of the specified limit. <Method Call : '.".concat(methodName,"' & Input Index : '").concat(index,"' & Input Expected : 'index > ").concat(min," && ").concat(index," < ").concat(max,"'>"))}},type:function type(input,_type,methodName){if(_typeof(input)!=_type){throw new TypeError("The input type is not correct. <Method Call : '.".concat(methodName,"' & Input : '").concat(input,"' & Input Type : '").concat(_typeof(input),"' & Type Expected : '").concat(_type,"'>"))}}}};this.add=function(item){var index=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_size;privateMethods.filter.type(index,"number","add");privateMethods.filter.range(index,0,_size,"add");var newNode=new Node(item);if(privateMethods.isEmpty())_head=_tail=newNode;else if(index==0){newNode.next=_head;_head=newNode}else if(index==_size){_tail.next=newNode;_tail=newNode}else{var current=_head.next,beforeCurrent=_head,cursor=0;while(current!==null){if(cursor==index-1)break;current=current.next;beforeCurrent=beforeCurrent.next;cursor++}beforeCurrent.next=newNode;newNode.next=current}_size++};this.remove=function(){var index=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_size-1;if(privateMethods.isEmpty())return;privateMethods.filter.range(index,0,_size-1,"remove");if(index==0){var head=_head;_head=_head.next;head.next=null}else{var current=_head.next,beforeCurrent=_head,cursor=1;while(current!==null){if(cursor==index)break;current=current.next;beforeCurrent=beforeCurrent.next;cursor++}beforeCurrent.next=current.next;current.next=null}_size--};this.isEmpty=function(){return privateMethods.isEmpty()};this.size=function(){return _size};this.item=function(){var index=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_size-1;privateMethods.filter.type(index,"number","item");if(privateMethods.isEmpty()){return undefined}else if(index==0){return _head.value}else if(index==_size-1){return _tail.value}else{var current=_head.next;var cursor=1;while(current!==null){if(cursor==index){break}current=current.next;cursor++}return current===null?undefined:current.value}};this.indexOf=function(item){var startIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var endIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:_size;privateMethods.filter.type(startIndex,"number","indexOf");privateMethods.filter.type(endIndex,"number","indexOf");privateMethods.filter.range(startIndex,0,_size,"indexOf");privateMethods.filter.range(endIndex,0,_size,"indexOf");var current=_head;var cursor=0;while(cursor<startIndex){current=current.next;cursor++}while(cursor<endIndex){if(current.value===item){return cursor}cursor++;current=current.next}return-1};this.lastIndexOf=function(item){var startIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_size;var endIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;privateMethods.filter.type(startIndex,"number","lastIndexOf");privateMethods.filter.type(endIndex,"number","lastIndexOf");privateMethods.filter.range(startIndex,0,_size,"lastIndexOf");privateMethods.filter.range(endIndex,0,_size,"lastIndexOf");var current=_head;var cursor=0;var find=[-1];while(cursor<endIndex){current=current.next;cursor++}while(cursor<startIndex){if(current.value===item){find.push(cursor)}cursor++;current=current.next}return find[find.length-1]};this.include=function(item){var startIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var endIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:_size;privateMethods.filter.type(startIndex,"number","include");privateMethods.filter.type(endIndex,"number","include");privateMethods.filter.range(startIndex,0,_size,"include");privateMethods.filter.range(endIndex,0,_size,"include");var current=_head;var cursor=0;while(cursor<startIndex){current=current.next;cursor++}while(cursor<endIndex){if(current.value===item){return true}cursor++;current=current.next}return false};this.findAll=function(item){var startIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var endIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:_size;privateMethods.filter.type(startIndex,"number","findAll");privateMethods.filter.type(endIndex,"number","findAll");privateMethods.filter.range(startIndex,0,_size,"findAll");privateMethods.filter.range(endIndex,0,_size,"findAll");var current=_head;var cursor=0;var find=[];while(cursor<startIndex){current=current.next;cursor++}while(cursor<endIndex){if(current.value===item){find.push(current.value)}cursor++;current=current.next}return find};this.forEach=function(functionToCall){var startIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var endIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:_size;privateMethods.filter.type(startIndex,"number","findAll");privateMethods.filter.type(endIndex,"number","findAll");privateMethods.filter.range(startIndex,0,_size,"forEach");privateMethods.filter.range(endIndex,0,_size,"forEach");var current=_head;var cursor=0;while(cursor<startIndex){current=current.next;cursor++}while(cursor<endIndex){functionToCall(current.value);cursor++;current=current.next}};this.toArray=function(){var startIndex=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var endIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_size;privateMethods.filter.type(startIndex,"number","toArray");privateMethods.filter.type(endIndex,"number","toArray");privateMethods.filter.range(startIndex,0,_size,"toArray");privateMethods.filter.range(endIndex,0,_size,"toArray");var arr=[];var cursor=0;var current=_head;var i=0;while(i<startIndex){current=current.next;i++}while(startIndex<endIndex){arr[cursor++]=current.value;current=current.next;startIndex++}return arr}}));module.exports={LinkedList:LinkedList};