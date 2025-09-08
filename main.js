"use strict";
(() => {
    class Mutante {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo a salvo";
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado";
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        name;
        team;
        realName;
        static avgAge = 35;
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
})();
(() => {
    class Avenger {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        isMutant;
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3)
                throw new Error("El nombre debe ser mayor a 3 letras");
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    wolverine.fullName = "Billy";
})();
(() => {
    class Apocalipsis {
        name;
        static intance;
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis("Soy apocalipsis el único.");
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName("Xavier");
    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
})();
//# sourceMappingURL=main.js.map