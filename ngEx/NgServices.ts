export const ngServices = {
  injector : null,
  get(token){
      return this.injector.get(token);
  }  
};

