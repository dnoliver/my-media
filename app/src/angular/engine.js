goog.provide('app.angular.Engine');

app.angular.Engine = function(){
  this._id = null;
  this._context = null;
  this._controllers = {};
  this._engine = null;
};

app.angular.Engine.prototype.configure = function(EngineData){
  this._id = EngineData.id;
  this._context = EngineData.context;
};

app.angular.Engine.prototype.createEngine = function(){
  this._engine = angular.module(this._id, []);
};

app.angular.Engine.prototype.addController = function(id,Controller){
  this._controllers[id] = Controller;
};

app.angular.Engine.prototype.startEngine = function(){
  
  for( var id in this._controllers ) {
    this._engine.controller(id, this._controllers[id].controller());
  }
  
  angular.bootstrap(this._context, [this._id]);
};

goog.addSingletonGetter(app.angular.Engine);