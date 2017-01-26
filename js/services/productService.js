
VikingStore.factory("productService", ["categoryService",

  function(categoryService){

    var _id = 1;
    var products = {};

    var all = function all(){
      return products;
    };

    var find = function find(productId){
      return products[productId];
    };

    var _init = function _init(){
      var categories = categoryService.all();
      _createProductsPerCategory(6, categories);
    };

    var _createProductsPerCategory = function _createProductsPerCategory(n, categories){
      var newProducts = {};
      var id, category;
      for(var cId in categories){
        category = categories[cId];
        for (var i = 0; i < n; i++){
          id = _nextId();
          newProducts[id] = _createProduct(id, category);
        }
      };
      angular.copy(newProducts, products);
    };

    var _createProduct = function _createProduct(id, category){
      var product = {
        id: id,
        name: faker.commerce.productName(),
        imagePath: "http://placehold.it/264x175",
        price: faker.commerce.price(),
        description: faker.hacker.phrase(),
        category: category.id
      }
      category.addProduct(product);
      _id++;
      return product;
    };

    var _nextId = function _nextId(){
      return _id + 1;
    };

    _init();
    return {
      all: all,
      find: find
    };

  }

]);
