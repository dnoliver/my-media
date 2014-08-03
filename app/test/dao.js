goog.provide('app.test.suite.DataAccess');
goog.require('app.dao.TempDataAccess');

app.test.suite.DataAccess = function(){
  
  var TempDataAccess = app.dao.TempDataAccess;
  
  describe('TempDataAccess Suite',function(){
    it('#Constructor',function(){
      chai.assert(TempDataAccess.getInstance() !== null);
    });
  });
};
