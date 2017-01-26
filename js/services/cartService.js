VikingStore.factory("cartService", [

  function() {

    var cart = {};

    var addQuantity = function addQuantity(product, quantity) {
      quantity = quantity || 1;
      cart[product] += quantity;
    };

    var getCart = function getCart() {
      return cart;
    }

    var removeItem = function removeItem(product) {
      delete cart[product];
    };


    return {
      addQuantity: addQuantity,
      getCart: getCart,
      removeItem: removeItem
    };

  }

]);


