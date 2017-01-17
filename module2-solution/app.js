(function () {
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

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];


})();