goog.provide('app.validator.ValidatorFactory');
goog.require('app.validator.RequiredValidator');

app.validator.ValidatorFactory = function(){
  this._validators = { };
};

app.validator.ValidatorFactory.VALIDATORS = {
  'RequiredValue': app.validator.RequiredValidator
};

goog.addSingletonGetter(app.validator.ValidatorFactory);

app.validator.ValidatorFactory.prototype.getValidatorFor = function(Strategy){
  var validators = app.validator.ValidatorFactory.VALIDATORS;
  
  if(!this._validators[Strategy]) {
    this._validators[Strategy] = new validators[Strategy]();
  }
  
  return this._validators[Strategy];
};