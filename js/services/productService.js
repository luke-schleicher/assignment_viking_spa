
VikingStore.factory("productService", ["faker",

  function(faker){



    var all = function all(){
    console.log('running');
    console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));

    console.log(faker.internet.email());
    };

    return {
      all: all
    };

  }]

);
