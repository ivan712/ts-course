function pickObjectCase<T extends object, U extends keyof T>(
    obj: T,
    props: U[]
  ): { [P in U]: T[P] } {
    const res = {} as { [P in U]: T[P] };
  
    for (const prop in obj) {
      if (!obj.hasOwnProperty(prop)) continue;
      if (!props.find((el) => el === prop as unknown as U)) continue;
      res[prop as unknown as Extract<keyof T, U>] = obj[prop as unknown as Extract<keyof T, U>];
    }
  
    return res;
  }
  
  console.log(pickObjectCase({ a: 100, b: 200, c: 300 }, ["a", "b"]));