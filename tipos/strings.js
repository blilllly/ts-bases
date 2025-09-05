"use strict";
(() => {
    const batman = "Batman";
    const linternaVerde = "Linterna's Verde";
    const volcanNegro = `Héroe: Volcan negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || "No está presente");
})();
