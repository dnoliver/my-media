var require = {
  baseUrl: '../',
  
  map: {
    '*': {
      'css': 'bower_components/require-css/css',
      'text': 'bower_components/requirejs-text/text',
      
      'bootstrap-css': 'bower_components/bootstrap/dist/css/bootstrap.min',
      'mocha-css': 'node_modules/mocha/mocha'
    }
  },
  
  paths: {
    closure: 'node_modules/closure-library/closure/goog/base',
    angular: 'bower_components/angular/angular',
    jquery: 'bower_components/jquery/dist/jquery.min',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min',
    underscore: 'bower_components/underscore/underscore',
    
    dependencies: 'app/deps',
    
    mocha: 'node_modules/mocha/mocha',
    chai: 'node_modules/chai/chai',
  },
  
  shim: {    
    bootstrap: {
      deps: ['jquery','css!bootstrap-css']
    },
    
    mocha: {
      deps: ['css!mocha-css']
    },
    
    chai: {
      deps: ['mocha'],
      exports: 'chai'
    },
    
    dependencies: {
      deps: ['closure']
    }
  }
};