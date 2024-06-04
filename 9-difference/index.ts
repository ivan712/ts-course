function difference<T extends object, U extends object>(A: T, B: U): Omit<T, keyof U> {
    const res = {} as Omit<T, keyof U>;
    for (const k in A) {
      const keyA = k as unknown as Exclude<keyof T, keyof U>;
      if (!B.hasOwnProperty(keyA)) res[keyA] = A[keyA];
    }
  
    return res;
  }
  
  console.log(difference({ a: 5, b: ''}, { a: 10, c: true }));