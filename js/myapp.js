var LunchCheck = angular.module('LunchCheck', []);

LunchCheck.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.input;
  $scope.message;
  $scope.color;
  $scope.click = function(){
    var array = $scope.input.replace(/\s/g, '').split(',');
    var flag = array.length;

    for (i = 0; i < array.length; i++) {
      if(array[i] == ""){
        flag--;
      }
    }
    if(flag == array.length){
      if(array.length <= 3){
        $scope.message = "Enjoy!";
        $scope.color = "green";
      } else {
        $scope.message = "Too much!";
        $scope.color = "green";
      }
    } else {
      $scope.message = "Please enter data first";
      $scope.color = "red";
    }
  };
};
