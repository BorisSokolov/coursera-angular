(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController ', ToBuyController)
        .controller('AlreadyBoughtController ', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];


    function ToBuyController(ShoppingListCheckOffService) {
        var buyList = this;
        buyList.items = ShoppingListCheckOffService.GetItemsToBuy();
        buyList.buyItem = function(index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    };

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;
        boughtList.items = ShoppingListCheckOffService.GetBoughtItems();
    };

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [{
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
        var boughtItems = [];

        service.GetToBuyItems = function() {
            return toBuyItems;
        };

        service.GetBoughtItems = function() {
            return boughtItems;
        };

        service.buyItem = function(itemIndex) {
            if (itemIndex > -1) {
                var item = toBuyItems[itemIndex];
                boughtItems.push(item);
                toBuyItems.splice(itemIndex, 1);
            }
        };
    };
})();