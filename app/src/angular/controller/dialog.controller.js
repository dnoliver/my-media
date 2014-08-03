goog.provide('app.angular.DialogController');

app.angular.DialogController = function(){
  
};

app.angular.DialogController.prototype.controller = function(){
  return function($scope){
    $scope.id = 'myModal';
    $scope.title = 'modal dialog title';
    $scope.content = 'modal dialog content';
  };
};

goog.addSingletonGetter(app.angular.DialogController);