export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName?: string;
    age: number;
    gender: 'male' | 'female';
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: Date;
    image: string;
    bloodGroup: 'A-' | 'B-' | 'AB-' | 'O-' | 'A+' | 'B+' | 'AB+' | 'O+';
    height: number;
    weight: number;
    eyeColor: 'Green' | 'Blue' | 'Brown' | 'Hazel' | 'Gray';
    hair: {
      color: 'Black' | 'Blonde' | 'Brown' | 'Red' | 'Gray';
      type: 'Strands' | 'Waves' | 'Curly' | 'Straight';
    };
    domain: string;
    ip: string;
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    macAddress: string;
    university: string;
    bank: {
      cardExpire: string;
      cardNumber: string;
      cardType: 'maestro' | 'visa' | 'mastercard';
      currency: 'Peso' | 'Dollar' | 'Euro';
      iban: string;
    };
    company: {
      address: {
        address: string;
        city: string;
        coordinates: {
          lat: number;
          lng: number;
        };
        postalCode: string;
        state: string;
      };
      department: string;
      name: string;
      title: string;
    };
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: {
      coin: string;
      wallet: string;
      network: string;
    };
  }