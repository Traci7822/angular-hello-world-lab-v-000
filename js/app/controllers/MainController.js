function MainController($scope){
  $scope.name = "Traci";
  $scope.email = "farts@butts.com";
  $scope.phone = 11111111;
}

angular
  .module('app')
  .controller('MainController', MainController);
