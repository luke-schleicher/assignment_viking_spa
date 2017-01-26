VikingStore.factory("cartService", [

  function() {

    var cart = {};

    var incrementQuantity = function incrementQuantity(product){
      addQuantity(product);
    };

    var addQuantity = function addQuantity(product, quantity) {
      quantity = quantity || 1;
      if(!cart[product.id]) cart[product.id] = 0;
      cart[product.id] += quantity;
    };

    var getCart = function getCart() {
      return cart;
    }

    var removeItem = function removeItem(product) {
      delete cart[product.id];
    };

    return {
      addQuantity: addQuantity,
      incrementQuantity: incrementQuantity,
      getCart: getCart,
      removeItem: removeItem
    };

  }

]);


