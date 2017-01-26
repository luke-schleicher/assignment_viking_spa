VikingStore.factory("cartService", [

  function() {

    var cart = {};

    var changeQuantity = function changeQuantity(product, quantity) {
      if (quantity === 0) {
        removeItem(product);
      } else {
        cart[product] = quantity;        
      }
    };

    var getCart = function getCart() {
      return cart;
    }

    var removeItem = function removeItem(product) {
      delete cart[product];
    };


    return {
      changeQuantity: changeQuantity,
      getCart: getCart,
      removeItem: removeItem
    };

  }

]);


