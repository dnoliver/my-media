goog.provide('app.Application');
goog.require('app.dao.TempDataAccess');
goog.require('app.command.LoginCommand');
goog.require('app.angular.Engine');
goog.require('app.angular.DialogController');
goog.require('app.angular.DialogView');
goog.require('app.angular.ButtonView');

app.Application = function(ApplicationData){
  
};

app.Application.prototype.run = function(){
  
  var dialogController = app.angular.DialogController.getInstance();
  var engine = app.angular.Engine.getInstance();
  
  engine.configure({id: 'my-media', context: document});
  engine.addController('my-modal-controller',dialogController);
  engine.createEngine();
  engine.startEngine();
};

goog.addSingletonGetter(app.Application);