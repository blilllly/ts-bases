"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super Velocidad"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        age = 0;
        name = "";
        realName = "";
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: "Billy",
        age: 27,
        address: {
            id: 125,
            zip: "KYD SUD",
            city: "Ottawa",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: "Melissa",
        age: 18,
        address: {
            id: 125,
            zip: "KYD SUD",
            city: "Ottawa",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map