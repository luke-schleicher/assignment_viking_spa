
VikingStore.factory("productService", ["categoryService",

  function(categoryService){

    var products = {};

    var all = function all(){
      return products;
    };

    var _init = function _init(){
      _createProducts(18);
    };

    var _createProducts = function _createProducts(n){
      var newProducts = {};
      for (var i = 0; i < n; i++){
        newProducts[i] = _createProduct(i);
      }
      angular.copy(newProducts, products);
    };

    var _createProduct = function _createProduct(id){
      var product = {
        id: id,
        name: faker.commerce.productName(),
        imagePath: "http://placehold.it/264x175",
        price: faker.commerce.price(),
        description: faker.name.jobDescriptor(),
        category: 0 // TODO dynamic when categories are created
      }
      return product;
    };

    _init();
    return {
      all: all
    };

  }

]);
