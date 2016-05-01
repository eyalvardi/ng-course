export var ngServices = {
  injector : null,
  getService(token){
      return this.injector.get(token);
  }  
};

