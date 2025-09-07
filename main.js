"use strict";
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    const villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    console.log(apocalipsis);
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || ""}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ""}`;
        }
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error("Nombre Requerido");
        }
        return `${firstName} ${lastName || ""}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error("Nombre Requerido");
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return "Batiseñal Activada!";
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super Velocidad", "Viajar en el tiempo"],
        getName: () => "",
    };
    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super fuerza"],
        getName() {
            return this.name;
        },
    };
    console.log(flash.getName());
})();
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
    let myCustomVariable = "Billy";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Spiderman",
        age: 18,
        powers: ["Sentido Aracnido", "Lanzar Telarañas"],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = `Dr Strange`;
    console.log(avenger.charAt(0));
    avenger = 150.2354887652;
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ["Omega Rojo", "Dormammu", "Duende Verde"];
    villians.forEach((v) => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = isBatman ? true : false;
    console.log(isSuperman);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("Auxilio!");
    console.log("Hola Mundo");
})();
(() => {
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("55A");
    console.log({ avengers });
})();
(() => {
    const batman = "Batman";
    const linternaVerde = "Linterna's Verde";
    const volcanNegro = `Héroe: Volcan negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || "No está presente");
})();
(() => {
    const hero = ["Dr Strange", 100, true];
    hero[0] = "Ironman";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() { }
    const callSuperman = () => { };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map