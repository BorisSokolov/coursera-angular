(function() {
    'use strict';

    var shoppingList = [
        {
            name: "Milk",
            quantity: "2"
        },
        {
            name: "Donuts",
            quantity: "200"
        },
        {
            name: "Cookies",
            quantity: "300"
        },
        {
            name: "Chocolate",
            quantity: "5"
        },
        {
            name: "Tea",
            quantity: "10"
        }
    ];


    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController ', ToBuyController)
        .controller('AlreadyBoughtController ', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['$scope'];

    function LunchRecommendationsController($scope) {

        var enjoyMsg = "Enjoy!";
        var tooMuchMsg = "Too much!";
        var errorMsg = "Please enter data first";

        $scope.displayRecommendation = function() {
            var recommendationString = getRecommendations($scope.list);
            $scope.recommendation = recommendationString;
        };


        function getRecommendations(string) {
            if (!string)
                return errorMsg;

            var listToEat = string.split(',');
            var numberOfItems = 0;

            for (var i in listToEat) {
                if (listToEat[i].trim())
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