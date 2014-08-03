goog.provide('app.angular.ButtonView');
goog.require('app.angular.View');

app.angular.ButtonView = function(ViewData){
  goog.base(this,ViewData);
};

goog.inherits(app.angular.ButtonView,app.angular.View);

app.angular.View.prototype.draw = function(){
  this.setElement($('<button type="button" class="btn btn-primary">Button</button>'));
  this.appendToParent(this.getElement());
  return this;
};