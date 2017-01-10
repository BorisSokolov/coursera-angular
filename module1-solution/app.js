(function () {
'use strict';

angular.module('LunchRecommendations', [])
.controller('LunchRecommendationsController', LunchRecommendationsController);

LunchRecommendationsController.$inject = ['$scope'];

function LunchRecommendationsController($scope){

  var enjoyMsg = "Enjoy!";
  var tooMuchMsg = "Too much!";
  var errorMsg = "Please enter data first";

  $scope.displayRecommendation = function () {
    var recommendationString = getRecommendations($scope.list);
    $scope.recommendation = recommendationString;
  };


  function getRecommendations(string) {
    if (!string)
      return errorMsg;

    var listToEat = string.split(',');
    var numberOfItems = 0;

    for (var i in listToEat) {
      if(listToEat[i].trim())
        numberOfItems++;
    }

    if (numberOfItems == 0)
      return errorMsg;
    if (numberOfItems <= 3)
      return enjoyMsg;
    
    return tooMuchMsg;
  }

}


})();
