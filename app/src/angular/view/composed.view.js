goog.provide('app.angular.ComposedView');
goog.require('app.angular.View');
goog.require('app.iterator.ArrayIterator');

app.angular.ComposedView = function(ViewData){
  goog.base(this,ViewData);
  this._childrens = [];
};

goog.inherits(app.angular.ComposedView,app.angular.View);

app.angular.ComposedView.prototype.addChild = function(ChildView){
  if(ChildView.getParent() === null && ChildView.getParent() !== this) {
    this._childrens.push(ChildView);  
    ChildView.setParent(this);
  }
};

app.angular.ComposedView.prototype.removeChild = function(ChildView){
  var index = this._childrens.indexOf(ChildView);
  if(index !== -1){
    this._childrens.slice(index,1);
    ChildView.setParent(null);
  }
};

app.angular.ComposedView.prototype.appendElement = function(Element){
  $(this.getElement()).find("[data-view=body]").append(Element);
};

app.angular.ComposedView.prototype.CreateIterator = function(){
  return new app.iterator.ArrayIterator(this._childrens);
};
