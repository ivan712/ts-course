//я не понял, зачем в этом задании нужны дженерики 
function swap(obj: Record<string, unknown>): Record<string, string> {
    const result = {} as Record<string, string>;
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        let val;
        if (typeof obj[key] === 'object') {
          val = JSON.stringify(obj[key]);
        } else {
          val = obj[key] as string;
        }
        result[val] = key;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const obj11 = {
    A: 10,
    B: 20,
    C: 30,
  };
  
  const swappedObj1 = swap(obj11);
  console.log(swappedObj);
  
  const obj12 = {
    A: { gg: 10 },
    B: { hh: 10 },
    C: { zz: 10 },
  };
  
  const swappedObj2 = swap(obj12);
  console.log(swappedObj);