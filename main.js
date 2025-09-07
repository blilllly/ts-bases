"use strict";
(() => {
    const avengers = {
        nick: "Samuel L.Jackson",
        ironman: "Robert Downey Jr",
        vision: "Paul Bettany",
        activos: true,
        poder: 1500.1126552,
    };
    const printAvenger = ({ ironman, ...resto }) => {
        console.log(ironman, resto);
    };
    const avengersArr = ["cap. america", "ironman", "hulk"];
    const [capitan, ironman] = avengersArr;
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit",
    };
    const captainAmerica = {
        name: "Capitán América",
        weapon: "Escudo",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjölnir",
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const nombre = "Billy";
    const getName = () => {
        console.log("viejo get name");
    };
})();
//# sourceMappingURL=main.js.map