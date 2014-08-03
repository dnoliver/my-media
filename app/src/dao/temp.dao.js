goog.provide('app.dao.TempDataAccess');
goog.require('app.dao.Interface');

app.dao.TempDataAccess = function(){
  
  this._data = {
    users: [],
    sessions: []
  };
  
};

goog.mixin(app.dao.TempDataAccess.prototype,app.dao.Interface);

app.dao.TempDataAccess.prototype.get = function(Query){
  return this._data[Query.entity][Query.id];
};

app.dao.TempDataAccess.prototype.put = function(Query){
  this._data[Query.entity][Query.id] = Query.data;
};

app.dao.TempDataAccess.prototype.post = function(Query){
  this._data[Query.entity][Query.id] = Query.data;
};

app.dao.TempDataAccess.prototype.delete = function(Query){
  delete this._data[Query.entity][Query.id];
};

goog.addSingletonGetter(app.dao.TempDataAccess);

