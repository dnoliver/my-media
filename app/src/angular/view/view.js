goog.provide('app.angular.View');

app.angular.View = function(ViewData){
  this._parent = null;
  this._markup = null;
};

app.angular.View.prototype.setParent = function(ParentView){
  this._parent = ParentView;
};

app.angular.View.prototype.getParent = function(){
  return this._parent;
};

app.angular.View.prototype.getElement = function(){
  return this._markup;
};

app.angular.View.prototype.setElement = function(Element){
  this._markup = Element;
};

app.angular.View.prototype.appendToParent = function(Element){
  if(this.getParent()) {
    this.getParent().appendElement(Element);
  }
};

app.angular.View.prototype.draw = function(){};

app.angular.View.prototype.appendElement = function(Element){};
app.angular.View.prototype.addChild = function(ChildView){};
app.angular.View.prototype.removeChild = function(ChildView){};
app.angular.View.prototype.getChild = function(index){};