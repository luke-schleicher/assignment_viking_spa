VikingStore.factory("cartService", ["productService",

  function(productService) {

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
    };

    var getProducts = function getProducts() {
      var products = [];
      for (var productId in cart) {
        var product = productService.find(productId);
        products.push(product);
      }
      return products;
    };

    var removeItem = function removeItem(product) {
      delete cart[product.id];
    };

    return {
      addQuantity: addQuantity,
      incrementQuantity: incrementQuantity,
      getCart: getCart,
      removeItem: removeItem,
      getProducts: getProducts
    };

  }

]);


