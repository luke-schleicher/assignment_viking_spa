VikingStore.filter('categoryFilter', function() {

  return function(products, categoryId) {

    if (!categoryId) { return products }

    var returnedProducts = {};

    angular.forEach(products, function(product){
      if (product.category === Number(categoryId)) {
        returnedProducts[product.id] = product;
      }
    });

    return returnedProducts;
  };

});