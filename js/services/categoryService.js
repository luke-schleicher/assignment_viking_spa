
VikingStore.factory("categoryService",
  [function() {

    var categories = {};

    var all = function all(){
      return categories;
    };

    var _extend = function _extend(category){
      category.addProduct = function addProduct(product){
        category.products[product.id] = true;
      }
    };

    var _init = function _init(){
      _createCategories(3);
    };

    var _createCategories = function _createCategories(n){
      var newCategories = {};
      for (var i = 0; i < n; i++){
        newCategories[i] = _createCategory(i);
      }
      angular.copy(newCategories, categories);
    };

    var _createCategory = function _createCategory(id){
      var category = {
        id: id,
        name: faker.company.catchPhraseNoun(),
        products: {}
      }
      _extend(category);
      return category;
    };

    _init();
    return {
      all: all
    };

  }
]);
