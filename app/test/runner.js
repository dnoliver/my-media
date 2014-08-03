goog.provide('app.test.Runner');
goog.require('app.test.suite.DataAccess');
goog.require('app.test.suite.Validator');

app.test.Runner = function(){
  mocha.ui('bdd'); 
  mocha.reporter('html');
  
  for( var Suite in app.test.suite ){
    app.test.suite[Suite]();
  }
};

app.test.Runner.prototype.run = function(){
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
};

goog.addSingletonGetter(app.test.Runner);