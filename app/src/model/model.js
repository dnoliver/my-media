goog.provide('app.model.Model');
goog.require('app.model.Attribute');
goog.require('app.validator.ValidatorFactory');

app.model.Model = function(){
  this.attributes = {};
  this.attributes.id = new app.model.Attribute();
  
  var validatorFactory = app.validator.ValidatorFactory.getInstance();
  var requiredValidator = validatorFactory.getValidatorFor('RequiredValue');
  this.attributes.id.addValidator(requiredValidator);
};

app.model.Model.prototype.set = function(key,value){
  this.attributes[key].value(value);
};

app.model.Model.prototype.get = function(key){
  return this.attributes[key].value();
};