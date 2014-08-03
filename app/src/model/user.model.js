goog.provide('app.model.User');
goog.require('app.model.Model');
goog.require('app.model.Attribute');
goog.require('app.validator.ValidatorFactory');

app.model.User = function(){
  goog.base(this);
};

goog.inherits(app.model.User,app.model.Model);