goog.provide('app.model.Attribute');

/**
 * AttributeData
 *  value
 *  required
 *  default
 */
app.model.Attribute = function(value){
  this._value = value? value : null;
  this._validators = [];
};

app.model.Attribute.prototype.addValidator = function(Validator){
  if( this._validators.indexOf(Validator) === -1){
    this._validators.push(Validator);
  }
};

app.model.Attribute.prototype.validate = function(){
   for( var i = 0; i < this._validators.length; i++ ) {
     this._validators[i].validate(this.value());
   }
};

app.model.Attribute.prototype.value = function(value){
  this._value = value? value : this._value;
  if(value) this.validate();
  return this._value;
};