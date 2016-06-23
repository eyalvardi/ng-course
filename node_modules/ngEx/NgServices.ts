export var ngServices = {
  injector : null,
  get(token){
      return this.injector.get(token);
  }  
};

