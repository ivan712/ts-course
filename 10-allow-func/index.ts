class User {
    @allowFunc((a: number) => a > 30)
    age: number = 1;
  
    constructor() { }
  }
  
  
  function allowFunc(func: (arg: any) => boolean) {
      return function (target: object, propertyKey: string | symbol) {
          let value: any;
  
          const setter = (newValue: any) => {
              if (func(newValue)) {
                  value = newValue;
              }
          } 
  
          const getter = () => {
              return value;
          }
  
          Object.defineProperty(target, propertyKey, {
              get: getter,
              set: setter,
          });
      }
  }
  
  const u = new User();
  console.log(u.age);
  u.age = 10;
  console.log(u.age);
  u.age = 50;
  console.log(u.age);