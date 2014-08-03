goog.provide('app.angular.DialogView');
goog.require('app.angular.ComposedView');

app.angular.DialogView = function(ViewData){
  goog.base(this,ViewData);
};

goog.inherits(app.angular.DialogView,app.angular.ComposedView);

app.angular.DialogView.prototype.draw = function(){
  
  var markup = ''+ 
  '<div class="modal fade">'+
  ' <div class="modal-dialog">'+
  '  <div class="modal-content">'+
  '    <div class="modal-body" data-view="body">'+
  '   </div>'+
  '  </div>'+
  ' </div>'+
  '</div>';
  
  this.setElement($(markup));
  
  var Iterator = this.CreateIterator();
  
  while(!Iterator.isDone()){
    var ChildView = Iterator.Next();
    ChildView.draw();
  }
  
  delete Iterator;
  
  this.appendToParent(this.getElement());
  return this;
};