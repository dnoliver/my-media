goog.provide('app.iterator.ArrayIterator');
goog.require('app.iterator.Iterator');

app.iterator.ArrayIterator = function(Array){
  this._index = 0;
  this._array = Array;
};

goog.mixin(app.iterator.ArrayIterator.prototype,app.iterator.Iterator);

app.iterator.ArrayIterator.prototype.First = function(){
  return this._array[0];
};

app.iterator.ArrayIterator.prototype.Next = function(){
  return this._array[this._index++];
};

app.iterator.ArrayIterator.prototype.isDone = function(){
  return this._array.length <= this._index;
};

app.iterator.ArrayIterator.prototype.CurrentItem = function(){
  return this._array[this._index];
};