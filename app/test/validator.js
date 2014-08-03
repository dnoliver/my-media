goog.provide('app.test.suite.Validator');
goog.require('app.validator.ValidatorFactory');
goog.require('app.model.Attribute');

app.test.suite.Validator = function(){
  describe('ValidatorFactory Suite',function(){
    
    var ValidatorFactory = app.validator.ValidatorFactory;
    
    it('#Constructor',function(){
      chai.assert(ValidatorFactory.getInstance() !== null);
    });
    
    it('#CreateValidatorFor',function(){
      var factory = ValidatorFactory.getInstance();
      chai.assert(factory.getValidatorFor('RequiredValue') !== null);
      var validator = factory.getValidatorFor('RequiredValue');
      var attribute = new app.model.Attribute('string');
      
      attribute.addValidator(validator);
      attribute.validate();
    });
  });
};
