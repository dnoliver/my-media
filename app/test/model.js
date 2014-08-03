goog.provide('app.test.suite.Model');
goog.require('app.model.Attribute');

app.test.suite.Model = function(){
  describe('Attribute suite',function(){
    var Attribute = app.model.Attribute;
    
    it('#Constructor()',function(){
        var a = new Attribute('a');
      
        chai.assert(a.value() === 'a');
    });
  });
};