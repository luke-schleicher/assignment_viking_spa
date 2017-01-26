VikingStore.factory('categoryService', [function() {

    var categories = {};

    var all = function all(){
      return categories;
    };

    var _init = function _init(){
      _createCategories(3);
    };

    var _createCategories = function _createCategories(n){
      var newcategories = {};
      for (var i = 0; i < n; i++){
        newCategories[i] = _createCategory(i);
      }
      angular.copy(newCategories, categories);
    };

    var _createCategory = function _createCategory(id){
      var category = {
        id: id,
        name: faker.catchPhraseNoun,
        products: {
          
        }
      }
      return category;
    };

    _init();
    return {
      all: all
    };

}]);