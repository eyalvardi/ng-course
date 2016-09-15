export const services = [];

export const ngServices = {
  injector : null,
  get(token){
      return this.injector.get(token);
  }  
};

export function Service(){
    return (target=>{
        services.push(target);
        return target;
    })
}



