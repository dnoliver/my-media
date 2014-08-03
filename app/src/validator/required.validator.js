goog.provide('app.validator.RequiredValidator');
goog.require('app.validator.Interface');

app.validator.RequiredValidator = function(){

};

goog.mixin(app.validator.RequiredValidator.prototype,app.validator.Interface);

app.validator.RequiredValidator.prototype.validate = function(value){
  if(_.isNull(value) || _.isUndefined(value)){
    throw new Error('RequiredValidator Error');
  }
};