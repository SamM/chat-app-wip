function MemBase(){
  this.storage = {};

  function Branch(storage){
    this.get = function(type, name){
      if(typeof storage[type] != "object") return undefined;
      return storage[type][name];
    }
    this.set = function(type, name, value){
      if(typeof storage[type] != "object"){
        storage[type] = {};
      }
      storage[type][name] = value;
    }
    this.getAll = function(type){
      return storage[type];
    }
  }

  this.branch = function(namespace){
    if(typeof this.storage[namespace] != "object"){
      this.storage[namespace] = {};
    }
    return new Branch(this.storage[namespace])
  }
}

if(module){
  module.exports = MemBase;
}
