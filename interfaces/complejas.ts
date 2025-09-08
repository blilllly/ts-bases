(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Billy",
    age: 27,
    address: {
      id: 125,
      zip: "KYD SUD",
      city: "Ottawa",
    },
    getFullAddress(id: string): string {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 18,
    address: {
      id: 125,
      zip: "KYD SUD",
      city: "Ottawa",
    },
    getFullAddress(id: string): string {
      return this.address.city;
    },
  };
})();
